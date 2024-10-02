import React from 'react'
import susnet from '../assests/susnet.png'
import { CheckIcon } from '@heroicons/react/16/solid'



const SUSNET = () => {
  return (
    
        <div className='bg-cyan-800 mt-[650px]  absolute w-full h-[500px] flex max-auto'>
<div className='basis-[45%]'>
<img className='absolute w-[560px] h-[350px] mb-7 bg-center px-20  rounded-xl  mt-16' src={susnet}/>
</div>
<div className='basis-[55%]'>
  <h1 className='font-bold text-4xl font-serif text-white mt-14'>Susnet</h1>
  <h2 className='font-semibold text-2xl font-sans text-white mt-3'>Empower Your Energy Efficiency With SusNet</h2>
  <p className='text-white text-medium mt-8 font-sans'> SusNet is HitoAI's flagship product,an AI-powered sustainable energy management system engineered
    to optimize energy usage.As the global sustainable energy management market expands and an artificial intelligence technology
    advances,HitoAI Limited stands at the industry's forefront.</p>
    <h2 className='font-semibold text-2xl font-sans text-white mt-6'>Benefits</h2>
    <li className='flex items-center space-x-2'>
              <CheckIcon className='w-6 h-6 mt-3 text-white flex-shrink-0'/>
    <p className=' text-white text-medium pt-2'> The POC of <span className='font-bold'>50-60%</span>
     billl cutting is validated.</p></li>
     <li className='flex items-center space-x-2'>
     <CheckIcon className='w-6 h-6 mt-3 text-white flex-shrink-0'/>
    <p className=' text-white text-medium pt-2'>Highly correlational features(Greater than 90%) with various IOT components.</p></li>
    <li className='flex items-center space-x-2'>
    <CheckIcon className='w-6 h-6 mt-3 text-white flex-shrink-0'/>
    <p className=' text-white text-medium pt-2'>Ability to process comprehensive online data into final decision in seconds</p></li>
    <li className='flex items-center space-x-2'>
    <CheckIcon className='w-6 h-6 mt-3 text-white flex-shrink-0'/>
    <p className=' text-white text-medium pt-2'>Hassle Free and Easy to Use.</p></li>
    


</div>
    </div>
  )
}

export default SUSNET