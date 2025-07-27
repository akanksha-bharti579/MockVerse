"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import { Mic, StopCircle } from 'lucide-react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { chatSession } from '@/utils/GeminiAi'
import { db } from '@/utils/db'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { UserAnswer } from '@/utils/schema'
import 'regenerator-runtime/runtime'
import { toast } from "sonner"


function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
    const [userAnswer, setUserAnswer] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);

    const {
        transcript,
        listening,
        resetTranscript,
       
    } = useSpeechRecognition();

  useEffect(() => {
    // Update userAnswer by appending the transcript only when speech recognition is active and transcript changes
    if (listening && transcript) {
        setUserAnswer(prevAns => prevAns + transcript);
    } else if (!listening) {
        // Optionally, reset transcript when speech recognition stops
        SpeechRecognition.resetTranscript;
    }
}, [listening, transcript]);


    useEffect(() => {
        if (!listening && userAnswer?.length > 10) {
            updateUserAnswer();
        }
    }, [userAnswer, listening]);

    const startStopRecording = async () => {
        if (listening) {
            SpeechRecognition.stopListening();
        } else {
            resetTranscript();
            SpeechRecognition.startListening({ continuous: true });
        }
    };

    const updateUserAnswer = async () => {
        console.log(userAnswer)
        setLoading(true)

        const feedbackPrompt = "Question:" + mockInterviewQuestion[activeQuestionIndex]?.question +
            ", User Answer:" + userAnswer + ", Depends on question and user answer for give interview question " +
            " please give us rating for answer and feedback as area of improvement if any " +
            "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";

        const result = await chatSession.sendMessage(feedbackPrompt);
        const mockJsonResp = (await result.response.text()).replace('```json', '').replace('```', '');
        const jsonFeedbackResp = JSON.parse(mockJsonResp);

        const resp = await db.insert(UserAnswer).values({
            mockIdRef: interviewData?.mockId,
            question: mockInterviewQuestion[activeQuestionIndex].question||mockInterviewQuestion[activeQuestionIndex].Question,
            correctAns: mockInterviewQuestion[activeQuestionIndex].Answer||mockInterviewQuestion[activeQuestionIndex].answer,
            userAns: userAnswer,
            feedback: jsonFeedbackResp?.feedback,
            rating: jsonFeedbackResp?.rating,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD-MM-yyyy')
        });

        if (resp) {
            toast('User Answer recorded successfully');

            setUserAnswer('');
            resetTranscript();
        }
        
        setLoading(false);
    
    };

    return (
        <div className='flex items-center justify-center flex-col my-10'>
            <div className='flex flex-col mt-17 justify-center items-center bg-black rounded-lg p-5'>
                <Image src={'/webcam.png'} width={200} height={200} className='absolute' />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 500,
                        width: 500,
                        zIndex: 12,
                    }}
                />
            </div>
            <Button
                disabled={loading}
                variant="outline"
                className="mt-10"
                onClick={startStopRecording}
            >
                {listening ?
                    <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
                        <StopCircle />Stop Recording
                    </h2>
                    :

                    <h2 className='text-primary flex gap-2 items-center'>
                        <Mic />  Record Answer
                    </h2>}
            </Button>
        </div>
    );
}

export default RecordAnswerSection;
