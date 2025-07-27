'use client'
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Header from "./dashboard/_components/Header";

const Home = () => {
  const router = useRouter();

  const redirectToJobPortal = () => {
    const jobPortalLink = 'https://www.naukri.com/jobs-in-vadodara-baroda'; 
    window.open(jobPortalLink, '_blank');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen w-full flex flex-col justify-between items-center bg-gray-50 text-gray-900">
        <div className="w-full py-20 bg-white-200 text-center shadow-md">
          <h1 className="font-extrabold text-4xl md:text-5xl text-gray-800 mb-4">
            Your Interview Practice Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Practice makes perfect. Prepare for your interviews with our comprehensive tools and resources.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700"
              onClick={() => router.push('/dashboard')}
            >
              Get Started <ArrowRightIcon />
            </Button>
            <Button
              className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600"
              onClick={redirectToJobPortal}
            >
              Find Jobs
            </Button>
          </div>
        </div>

        <div className="w-full py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h2 className="font-bold text-xl mb-4">Comprehensive Practice</h2>
              <p className="text-gray-700">Access a variety of interview questions and practice scenarios tailored to your needs.</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">Expert Feedback</h2>
              <p className="text-gray-700">Receive feedback from industry professionals to improve your performance.</p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-4">Job Matching</h2>
              <p className="text-gray-700">Find job opportunities that match your skills and experience directly from our platform.</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white-100 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-bold text-2xl mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-gray-700">"This platform helped me land my dream job!" - Jane Doe</p>
              </div>
              <div>
                <p className="text-gray-700">"The practice questions were exactly what I needed." - John Smith</p>
              </div>
              <div>
                <p className="text-gray-700">"The feedback I received was invaluable." - Emily Johnson</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="w-full bg-gray-200 py-4 text-center text-gray-600">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
