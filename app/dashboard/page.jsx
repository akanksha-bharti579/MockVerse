
import AddNewInterview from './_components/AddNewInterview'
import React from 'react'
import InterviewList from './_components/InterviewList'



const Dashboard = () => {
  return (
      <div className='p-10'>
        <h2 className='font-bold text-2xl'> Welcome to Dashboard</h2>
        <h2 className=' text-gray-500'> Create and Start your mock interview </h2>
    
      <div className='flex *:grid grid-col-1 md:grid-col-3 my-5'>
        <AddNewInterview/>
      </div>
    {/* Previous Interview List  */}
      <InterviewList/>
      </div> 

    )
}





export default Dashboard