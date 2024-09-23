import React from 'react'
//import phone from '../assests/Asset 4.png'
//import image2 from '../assests/image2.webp'
import susnet from '../assests/susnet.png'
import img1 from '../assests/img1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'
import img04 from '../assests/img04.png'

import SUSNET from './SUSNET'
import SusnetComponent from './SusnetComponent'
import Plans from './Plans'


const Homepage = () => {
  return (
    <>
      <div className='w-full bg-slate-100 mt-28'>
    <img className=' absolute bg-cover w-full h-[450px]' src={susnet}></img>
     
      <h1 className=' relative text-lg md:text-3xl  px-10 md:px-32 pt-20 ml-14 font-serif font-bold text-black '>
        Use SusNet as your AI-Enabled <br/>cost-cutting Software</h1>
         
<button className= ' mt-4  px-2 transition ease-in-out delay-150 bg-green-500 hover:bg-cyan-500 text-black p-2 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300  absolute rounded-lg font-bold ml-44 text-lg  shadow-2xl'>
          
          Explore plans</button>
                 </div>

<div className=' mt-40  h-[900px] md:mt-56 absolute bg-gray-100 w-full md:h-[450px] '>
        <h1 className=' text-xl md:relative font-bold md:text-4xl mt-14 font-serif text-black  text-center'>Why us ?</h1>
         <p className='text-center font-medium mt-4'>Susnet being the best solution to reduce on your electricity bill</p>
        
    <div className=' justify-items-start md:flex md:justify-between mt-12 ml-8 overflow-x-hidden'>
      <div className=' col-2 px-1'>
<img className=' w-60 h-40 justify-center md:w-40 md:h-28 md:px-2 ml-4' src={img3}/>
<h4 className='font-bold text-center'>Efficiency </h4>
<p className='text-sm text-center'>Optimize your energy usage effortlessly.</p>
      </div>
      <div className='col-2 px-1'>
      <img className='w-32 h-28 px-2 ml-4' src={img2}/>
      <h4 className='font-bold text-center'> Sustainable</h4>
      <p className='text-sm text-center'> Contribute to a greener planet with intelligent energy management.</p>
      
      </div>
      <div className='col-2 px-2 '>
      <img className='w-32 h-28 px-2 ml-6' src={img04}/>
      <h4 className='font-bold text-center'>Convenience</h4>
       <p className='text-sm text-center'>Enjoy a fully automated system that requires minimal intervention.</p>
      
      </div>
      <div className=' col-2 px-2'>
        <img className='w-32 h-28  px-2 ml-4' src={img1}/>
        <h4 className='font-bold text-center'>Cost Saving</h4>
        <p className='text-sm text-center'>Reduce your energy costs by upto 60%</p>
      </div>
    </div>
    
    </div>

<SUSNET/>
<SusnetComponent/>
<Plans/>

    </>
  )
}

    
  

export default Homepage