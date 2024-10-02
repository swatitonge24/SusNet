
import {Data}  from '../assests/Data';
import { useState } from "react"
import robot3 from '../assests/robot3.jpeg'

const QuizBrowsePage = () => {
  const[index,setIndex] =useState(0);
  const[data,setData] =useState(Data)
  const[progress,setProgress] =useState(0);

  const next=()=>{
    if(index< data.length-1){
    setIndex(index+1)}
    else{"Congratulations" }{
      if(progress< 100){
        setProgress(progress+20);
      }
    }
   }
   const handleButtonReset=()=>{
          setProgress(0);
   }
   const getColor =()=>{
    if(progress <40){
      return '#ff0000';
    }else if (progress <60){
      return'#ffa500';
    }else{
      return '#2ecc71';
    }
   }
    const checked =document.querySelectorAll('.checkedValue');
    checked.forEach((curVal)=>{
      curVal.checked=false
    })
  return (
    <>
   <div className="bg-purple-400 w-full h-[400px] absolute mt-[2670px] overflow-y-hidden">
   
    <div className='w-3/4 h-[300px] bg-purple-400 ml-44 justify-center shadow-2xl'>
    <div className=" flex mt-8 ">
      <img className='w-24 h-18 ml-8 mb-2 rounded-2xl' src={robot3}/>
      <h1 className='text-3xl font-bold font-serif mt-2 ml-24 text-white'>Let's customize your Kits and Plans </h1></div>
       {/* /Progress bar */}
       <div className='w-1/2 h-1 ml-56 bg-gray-300 rounded-lg'>
       <div className= " rounded-lg h-1 transition duration-150 ease-out"style={{ width:`${progress}%`,backgroundColor :getColor()}} > {""} </div>  

     
      <div className='ml-56 '>{progress}%</div>
</div>


     <div className=' ml-60  mt-8 justify-center'>
    <h2 className="font-bold text-lg text-black   mt-2"> Q: {data[index].question}</h2>
        <div className="flex  mt-2 ">
       <input name='select'type='radio' className='checkedValue'/>
       <p className="px-2 text-black font-sans ">{data[index].a}</p>

       </div>
       <div className="flex ">
      
       <input name='select' type='radio' className='checkedValue'/>
       <p className="px-2  text-black">{data[index].b}</p>
       
       </div>
       <div className="flex ">
       <input name='select'type='radio' className='checkedValue'/>
       <p className="px-2  text-black">{data[index].c}</p>
       
       </div>
       
       <div className="score"></div>
        <div className=' ml-36' >
        <div className=''></div>
        <button className= " bg-green-500   hover:bg-red-500 hover:text-white mt-2  p-2 px-3 rounded-lg font-bold " onClick={handleButtonReset} >Reset</button>
        <button className= " bg-green-500 hover:bg-red-500 hover:text-white mt-2 p-2 px-3 mr-20 rounded-lg font-bold ml-4 " onClick={next}>Next</button>
        </div>
        </div>
      </div>
      </div>
     
   
    
     
</>
    
  )
}

export default QuizBrowsePage