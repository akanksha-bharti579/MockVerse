import React from 'react'
import Header from './_components/Header'

import Footer from './_components/footer'
const DashboardLayout = ({children}) => {
  return (
    <div>
    <Header/>
    <div className='mx-5 md:mx-20 lg:mx-36'>
    {children}
    </div>
  
  </div>

  )
}

export default DashboardLayout