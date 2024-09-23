import React from 'react'
import eurosign from '../assests/eurosign.png'
import { CheckIcon } from '@heroicons/react/16/solid';



const Plans = () => {
  return (
      <div className=' absolute mt-[1700px] bg-gray-100  h-[650px] w-full '>
             <h1 className='realtive mt-14 font-bold text-4xl font-serif text-center'>Choose Your Plan</h1>
             <p className='text-center text-sm mt-2'>Choose from our premium plans to save your hand earn money and enjoy a hassle-free sustainable solution </p>
       <div className='grid lg:grid-cols-3 gap-10 lg:gap-0 mt-20'>
       <div className=' w-auto  rounded-md  cursor-pointer pr-10 '>
       <div className=' bg-white shadow-2xl border-solid border-1 border-gray-100 rounded-lg
        transition ease-in-out delay-150 hover:border-gray-100 ml-20 hover:-translate-y-6'>

      {/* {Card Header} */}
      
      <div className=' px-2 py-3 border-b-2 border-gray-200'>
        <h1 className='text-3xl font-semibold text-center font-serif '>Basic</h1>
        <p className='text-sm text-center mt-2'>Entry Level Features</p>
        <div className='flex justify-center items-center mt-8 '>
          
        <img  className='w-10 h-8 ' src={eurosign}/>
        <p className=' text-4xl font-bold'>350</p>
        </div>
        </div>
      
        {/* {card bodY} */}
        <div className='px-5  py-3'>
          <ul className='space-y-2'>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className='text-sm text-grey-600 '>1 IOT Hub +1Thermostat</p>
            </li>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>Connect Upto 5Devices</p></li>
              <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>No Data Dashboard</p>
            </li>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>No Customer Support</p>
            </li>
          </ul>
          <button className='mt-8 w-full py-2 px-8  border-2 rounded-lg text-lg  border-green-800
           transition ease-in-out delay-150
           text-green-800  hover:-translate-y-1 hover:scale-110 hover:bg-green-800 hover:text-white duration-300 '>
        
            Get Started</button>
        </div>

       </div>
       </div>

       <div className=' w-auto  rounded-md  cursor-pointer pr-10 '>
       <div className=' bg-white shadow-lg border-solid border-1 border-gray-100  rounded-lg hover:border-gray-100 ml-20 
       hover:-translate-y-6 transition ease-in-out delay-150 '>
        <button className='bg-cyan-800 ml-24 mt-2 px-2 py-1  text-sm rounded-lg text-white'>Most Popular</button>

      {/* {Card Header} */}
      
      <div className=' px-2 py-3 border-b-2 border-gray-200'>
        <h1 className='text-3xl font-semibold text-center font-serif '>Standard</h1>
        <p className='text-sm text-center mt-2 '>Essential Features</p>
        <div className='flex justify-center items-center mt-2 '>
          
        <img  className='w-10 h-8 ' src={eurosign}/>
        <p className=' text-4xl font-bold'>800</p>
        </div>
        </div>
      
        {/* {card bodY} */}
        <div className='px-5  py-3'>
          <ul className='space-y-2'>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className='text-sm text-grey-600 '>1 IOT Hub +5 TRVs</p>
            </li>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>Connect Upto 20 Devices</p></li>
              <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>Access Dashboard</p>
            </li>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>24/7 Customer Support</p>
            </li>
          </ul>
          <button className='mt-8 w-full py-2 px-8  border-2 rounded-lg text-lg  border-green-800
           transition ease-in-out delay-150
           text-green-800  hover:-translate-y-1 hover:scale-110 hover:bg-green-800 hover:text-white duration-300 '>
        
            Get Started</button>
        </div>

       </div>
       </div>
       <div className=' w-auto  rounded-md  cursor-pointer pr-10 '>
       <div className=' bg-white shadow-lg border-solid border-1 border-gray-100  rounded-lg hover:border-gray-100 ml-20 
        transition ease-in-out delay-150  hover:-translate-y-6'>
          

      {/* {Card Header} */}
      
      <div className=' px-2 py-3 border-b-2 border-gray-200'>
        <h1 className='text-3xl font-semibold text-center font-serif '>Premium</h1>
        <p className='text-sm text-center mt-2'>Premium Features</p>
        <div className='flex justify-center items-center mt-8 '>
          
        <img  className='w-10 h-8 ' src={eurosign}/>
        <p className=' text-4xl font-bold'>840</p>
        </div>
        </div>
      
        {/* {card bodY} */}
        <div className='px-5  py-3'>
          <ul className='space-y-2'>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className='text-sm text-grey-600 '>2 IOT Hub +10 TRVs</p>
            </li>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>Connect Upto 30 Devices</p></li>
              <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>No Data Dashboard</p>
            </li>
            <li className='flex items-center space-x-4'>
              <CheckIcon className='w-6 h-6 text-green-600 flex-shrink-0'/>
              <p className=' text-sm text-grey-600'>24/7 Customer Support</p>
            </li>
          </ul>
          <button className='mt-8 w-full py-2 px-8  border-2 rounded-lg text-lg  border-green-800
           transition ease-in-out delay-150
           text-green-800  hover:-translate-y-1 hover:scale-110 hover:bg-green-800 hover:text-white duration-300 '>
        
            Get Started</button>
        </div>

       </div>
       </div>
       </div>
       </div>




       


      
     
         
         
           
       
       
           
        
       
   
     
    );
  };


    
  


export default Plans