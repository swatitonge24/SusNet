

import tick from '../assests/tick.svg'
import cross from '../assests/cross.svg'




const Plans = () => {

  

  return (

      <div className=' absolute mt-[2000px] bg-gray-100  h-[690px] w-full overflow-x-hidden  '>
             <h1 className='realtive mt-14 font-bold text-4xl font-serif text-center'>Susnet Plans</h1>
             <p className='text-center text-sm mt-2'>Choose from our premium plans to save your hand earn money and enjoy a hassle-free sustainable solution </p>
            
                
       <div className='grid lg:grid-cols-3 gap-0 mt-20 mr-10'>
       <div className=' w-[450px]  rounded-md  cursor-pointer pr-10 '>
       <div className=' bg-white shadow-2xl border-solid border-1 border-gray-100 rounded-lg
        transition ease-in-out delay-150 hover:border-gray-100 ml-20 hover:-translate-y-6'>

      {/* {Card Header} */}
      
      <div className=' px-1 py-3 '>
        <h1 className='text-4xl font-semibold px-4 font-serif '>Basic</h1>
        <p className='text-sm ml-7 mt-2 text-gray-400'>Entry Level Features</p>

        <div className='  justify-center mt-8 '>
        <span className='ml-9 text-gray-400 text-lg font-normal w-60 h-36'></span>
        <span className='text-4xl font-bold ml-1' > €330</span><br/>
        
<span className="text-gray-400 text-sm ml-8 pt-4">+ Susnet Plan €10/Month
</span>
        </div>
        
        </div>
       
        
      
        {/* {card bodY} */}
        <div className='px-5  py-3'>
          <ul className='space-y-2'>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0 'src={tick}/>
              <p className='text-sm text-grey-600 '>1 IOT Hub +1Thermostat</p>
            </li>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0' src={tick}/>
              <p className=' text-sm text-grey-600'>Connect Upto 5Devices</p></li>
              <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0' src={cross}/>
              <p className=' text-sm text-grey-600'>No Data Dashboard</p>
            </li>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6flex-shrink-0 ' src={cross}/>
              <p className=' text-sm text-grey-600'>No Customer Support</p>
            </li>
          </ul>
          
        </div>

       </div>
       </div>

       <div className=' w-[450px]  rounded-md  cursor-pointer pr-10 '>
       <div className=' bg-white shadow-lg border-solid border-1 border-gray-100  rounded-lg hover:border-gray-100 ml-20 
       hover:-translate-y-6 transition ease-in-out delay-150 '>
        <button className='bg-cyan-800 w-full px-2 py-1  text-sm  text-white'>Most Popular</button>

      {/* {Card Header} */}
      
      <div className=' px-1 py-3 '>
        <h1 className='text-4xl font-semibold px-4 font-serif '>Standard</h1>
        <p className='text-sm ml-7 mt-2 text-gray-400'>Essential Features</p>

        <div className='ml-8 justify-center mt-8'>
          
       <span className='text-4xl font-bold'>
  €750</span><br/>
  <span className='text-gray-400 ml-2 text-sm'> + Susnet Plan €20/Month</span>
        </div>
        
        </div>
      
        {/* {card bodY} */}
        <div className='px-5  py-3'>
          <ul className='space-y-2'>
            <li className='flex items-center space-x-4'>
        <img className='w-6 h-6 flex-shrink-0 'src={tick}/>
              <p className='text-sm text-grey-600 '>1 IOT Hub +5 TRVs</p>
            </li>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0 'src={tick}/>
              <p className=' text-sm text-grey-600'>Connect Upto 20 Devices</p></li>
              <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0'src={tick}/>
              <p className=' text-sm text-grey-600'>Access Dashboard</p>
            </li>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0' src={tick}/>
              <p className=' text-sm text-grey-600'>24/7 Customer Support</p>
            </li>
          </ul>
          
        </div>

       </div>
       </div>
       <div className=' w-[450px]  rounded-md  cursor-pointer pr-10 '>
       <div className=' bg-white shadow-lg border-solid border-1 border-gray-100  rounded-lg hover:border-gray-100 ml-20 
        transition ease-in-out delay-150  hover:-translate-y-6'>
          

      {/* {Card Header} */}
      
      <div className=' px-1 py-3 '>
        <h1 className='text-4xl font-semibold px-4 font-serif '>Premium</h1>
        <p className='text-sm ml-7 mt-2 text-gray-400'>Custom Premium Features</p>

        <div className='  justify-center mt-8 '>
        
        <span className='text-4xl font-bold ml-8'> €900</span><br/>
        
        <span className="text-gray-400 text-sm ml-8">+ Susnet Plan €30/Month</span>
        </div>
       
        </div>
      
        {/* {card bodY} */}
        <div className='px-5  py-3'>
          <ul className='space-y-2'>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0' src={tick}/>
              <p className='text-sm text-grey-600 '>2 IOT Hub +10 TRVs</p>
            </li>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6flex-shrink-0' src={tick}/>
              <p className=' text-sm text-grey-600'>Connect Upto 30 Devices</p></li>
              <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0' src={cross}/>
              <p className=' text-sm text-grey-600'>No Data Dashboard</p>
            </li>
            <li className='flex items-center space-x-4'>
              <img className='w-6 h-6 flex-shrink-0' src={cross}/>
              <p className=' text-sm text-grey-600'>24/7 Customer Support</p>
            </li>
          </ul>
         
        </div>

       </div>
       </div>
       </div>
       </div>




       


      
     
         
         
           
       
       
           
        
       
   
     
    );
  };


    
  


export default Plans