import React from 'react'
import susnetHub from '../assests/susnetHub.png'
import susnetkit from '../assests/susnetkit.png'


const SusnetComponent = () => {
  return (
    <div className='absolute mt-[1150px]  bg-white w-full h-[450px] '>
      <h1 className='relative  mt-14 font-bold text-4xl font-serif text-center'>Susnet Components </h1>
      <p className='text-lg font-semibold text-center mt-4'>The components set works the best with the subscription plan</p>

      <div className='flex justify-between mt-2 px-2 ml-10 overflow-x-hidden'>
      <div className='col-4 px-16' >
<img className='w-52 h-60  ml-5' src={susnetkit}/>
<h4 className='font-bold text-center font-serif mr-6 pr-6'>Global Thermostat</h4>
<p className='text-sm text-center font-sans'> This AI-powered,Wi-Fi-based thermostat is designed to revolutionize energy management.
  Equipped with a cutting-edge AI ledge,it empowers energy system with an automated modeler that eliminates the need for manual scheduling
  or control .</p>
      </div>
      <div className='col-4 px-20'>
      <img className='w-52 h-60 ml-5 ' src={susnetHub}/>
      <h4 className='font-bold text-center font-serif mr-6 pr-6'>IoT Hub</h4>
      <p className='text-sm text-center font-sans'> This IoT Hub is a stable,bidirectional data transmiter designed to enable network
        connectivity with a closed-loop schema.</p>
      
      </div>
      <div className='col-4 px-20'>
      <img className='w-52 h-60 ml-5 ' src={susnetHub}/>
      <h4 className='font-bold text-center font-serif mr-5 pr-6'>Thermostatic Radiator Valves(TRVs)</h4>
<p className='text-sm text-center font-sans'>This Wi-Fi-enabled TRV device leverages AI to transform energy management.Equiped with state of art AI ledger.</p>
      </div>
      </div>

     
     
    </div>
  )
}

export default SusnetComponent