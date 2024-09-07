import React from 'react'
import '../globals.css'

const page = () => {
  return (
    <div className='h-screen text-2xl text-black'><section className="bg-orange-50 dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
          <p className="mb-4">Welcome to Global Compass LLP, we are a Kolkata based Outbound travel agent specializing in International Tours, operating for the last 15 Years. Being one of the first of our kind, we have made and developed travel itineraries that have become the standard of the market.</p>
          <p>About Us:
            Welcome to Global Compass LLP, we are a Kolkata based Outbound travel agent specializing in International Tours, operating for the last 15 Years. Being one of the first of our kind, we have made and developed travel itineraries that have become the standard of the market. Our motto "Dream Holidays @ Dream Price" is also our goal, therefore we always ensure a high level of quality and affordability for any and all of our customers.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-xl" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-xl" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
      </div>
    </section></div>
  )
}

export default page