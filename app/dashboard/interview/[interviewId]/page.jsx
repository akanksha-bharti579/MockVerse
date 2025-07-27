"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {

    const [interviewData,setInterviewData]=useState();
    const [webCamEnabled,setWebCamEnabled]=useState();
    useEffect(()=>{
        console.log(params.interviewId)
        GetInterviewDetails();
    },[])

    /**
     * Used to Get Interview Details by MockId/Interview Id
     */
    const GetInterviewDetails=async()=>{
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        setInterviewData(result[0]);
    }
  return (
    <div className='my-10 '>
    <h2 className='font-semibold text-xl mb-6'>Let's Get Started</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col gap-5 mt-6'>
        <div className='flex flex-col p-5 rounded-lg border gap-5'>
            <h2 className='text-md'><strong>Job Role/Job Position:</strong> {interviewData?.jobPosition}</h2>
            <h2 className='text-md'><strong>Job Description/Tech Stack:</strong> {interviewData?.jobDesc}</h2>
            <h2 className='text-md'><strong>Years of Experience:</strong> {interviewData?.jobExperience}</h2>
        </div>
        <div className='p-5 border rounded-lg border-purple-300 bg-purple-100'>
             
            <h2 className='flex gap-2 items-center text-purple-500'>
                <Lightbulb color='black'/>
                
                <strong>Information:</strong></h2>

            <p className='mt-3 text-purple-500'>{process.env.NEXT_PUBLIC_INFORMATION}</p>
        </div>
        </div>
        <div className='flex flex-col justify-between items-center h-full'>
        {webCamEnabled ?
            <Webcam
            onUserMedia={() => setWebCamEnabled(true)}
            onUserMediaError={() => setWebCamEnabled(false)}
            mirrored={true}
            style={{ height: 300, width: 300 }}
            />
        : 
            <>
            <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
            
            <Button 
                className=' w-full my-2 '
                onClick={() => setWebCamEnabled(true)}
            >
                Enable Web Cam and Microphone
            </Button>
        
            </>
            }
        </div>
    </div>      
    <div className='flex justify-end items-end mt-7'>
        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
        <Button>
            Start Interview</Button>
        </Link>
    </div>
    
     
</div>
  )
}

export default Interview