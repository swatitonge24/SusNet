import React from 'react'
import phone from '../assests/phone.png'
import image2 from '../assests/image2.webp'

const Body = () => {
  return (
    
      
    <div className= ' bg-sky-500 w-full  h-[400px] flex mx-auto'>
      <div className='basis-[55%]'>
      <h1 className=' text-4xl px-32 pt-32 font-sans font-extrabold text-white'>
        Invest with Our Trading App</h1>
         <p className='text-sm text-white pt-6 px-32'>Our comprehensive range of diverse trading platforms is built to suit your unique
    objectives,<br/>empowering you to select perfect platform for your individual goals and experience
    level.
  </p>
  </div>
  <div className='basis-[45%]'>
        <img className='w-[550px] h-[450px] pt-14 pr-20 'alt="phoneimg" src={phone}/>
    </div>
    </div>
    
    
    
    
  )
}

export default Body