import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png';


const Header = () => {
  return (
    
    <div className='h-24 shadow-2xl'>
    <div className='flex justify-between '>
        <div className='logo-container'>
          <img className='w-28 h-10 mt-9 px-6' src={logo}/>
          </div>
      
<div className=''>
    <ul className='flex p-4 m-4 '>
      <li className=' px-3 p-2 text-sm'><Link to ="/documentation">Documentation</Link></li>
<li className='px-3  p-2 text-sm'><Link to ="/environmentalDataAnalytics">Environmental Data Analysis </Link></li> 

<li className='px-3  p-2 text-sm'><Link to ="/energybill"> Saved Energy/Bill</Link></li>

<li className='px-3  p-2 border-2  text-sm ml-2 bg-white text-blue-400 border-blue-500  rounded-lg'><Link to ="https://susnet.hitoai.ai/login">Register Building</Link></li>
<li className='px-3  p-2  ml-8 text-sm bg-blue-500 text-white rounded-lg'><Link to ="/login">Login</Link></li>


    </ul>
</div>
    </div>
    </div>
    
  )}

export default Header;

