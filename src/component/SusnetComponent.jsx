
import susnetHub from '../assests/susnetHub.png'
import Group1 from '../assests/Group1.png'
import Group2 from '../assests/Group2.png'
import Group3 from '../assests/Group3.png'



const SusnetComponent = () => {
  return (
    <div className='absolute mt-[1150px]  bg-white w-full h-[450px] '>
      <h1 className='relative  mt-14 font-bold text-4xl font-serif text-center'>Susnet Components </h1>
      <p className='text-lg font-semibold text-center mt-4'>The components set works the best with the subscription plan</p>

      <div className='flex justify-between mt-2 px-2 mr-6 overflow-x-hidden'>
      <div className='col-4 px-7' >
<img className='w-[500px]  h-[207px] mt-4 ml-5' src={Group1}/>
<h4 className='font-bold text-center px-8 font-serif mt-3  '>Global Thermostat</h4>
<p className='text-sm text-center font-sans  mt-2'> This AI-powered,Wi-Fi-based thermostat is designed to revolutionize energy management.
  .</p>
      </div>
      <div className='col-4 px-7'>
      <img className='w-[500px]  h-[207px] mt-4 ml-5 ' src={Group3}/>
      <h4 className='font-bold text-center px-8 font-serif mt-3'>IoT Hub</h4>
      <p className='text-sm text-center font-sans mt-2'> This IoT Hub is a stable,bidirectional data transmiter designed to enable network
        connectivity with a closed-loop schema.</p>
      
      </div>
      <div className='col-4 px-7'>
      <img className='w-[500px]  h-[207px] mt-4 ml-5 ' src={Group2}/>
      <h4 className='font-bold text-center font-serif px-8 mt-3'>Thermostatic Radiator Valves(TRVs)</h4>
<p className='text-sm text-center font-sans mt-2'>This Wi-Fi-enabled TRV device leverages AI to transform energy management.Equiped with state of art AI ledger.</p>
      </div>
      </div>

     
     
    </div>
  )
}

export default SusnetComponent