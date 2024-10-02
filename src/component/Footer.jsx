
import logo from '../assests/logo.png';
import LinkedIn from '../assests/LinkedIn.png'
import twiter from '../assests/twiter.png'
import fb from '../assests/fb.png'
import insta from '../assests/insta.jpeg'
import { EnvelopeIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/16/solid';


const Footer = () => {
  return (
    <div className=' absolute mt-[3100px] w-full h-[100px] bg-gray-100 overflow-x-hidden'>
      <div className='flex justify-between mt-8 '>
      <div className='col-4  '>
      <img className='w-24 h-10  px-6 mr-32 ' src={logo}/>
    </div>
    <div className='col-4 ml-20'>
      <PhoneArrowDownLeftIcon className='w-4 h-4 mr-40'></PhoneArrowDownLeftIcon><br/>
      <EnvelopeIcon className='w-4 h-4  mr-40'></EnvelopeIcon>


      </div>
      <div className='col-4 flex ml-28   overflow-x-hidden'>
     <img className='w-10 h-10 p-2 ' src={LinkedIn}/>
     <img className='w-10 h-10  p-2' src={fb}/>
     <img className='w-10 h-10 p-2' src={insta}/>
     <img className='w-10 h-10 p-2' src={twiter}/>

        </div>
   

    </div>
    </div>
    
  )
}

export default Footer

