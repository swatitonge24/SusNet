import React from 'react'
import { Link } from 'react-router-dom';
import logo from 'C:/Users/mghah/All/Documents/HitoAI/ceo-hitoai/Susnet-V1/susnet-front/susnet_front/src/assests/logo.png'



const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='logo-container'>
          <img className='w-36 h-20 pt-5 p-2 px-7 ' src={logo}/>
          
        </div>
<div className=''>
    <ul className='flex p-4 m-4 '>
<li className='px-6 p-2'><Link to ="/">Documentations</Link></li>
<li className='px-6 p-2'><Link to ="/">Environmental Data Analytics </Link></li>  
<li className='px-6 p-2'><Link to ="/updates">Saved Energy/Bill</Link></li>
<li className='px-6 p-2'><Link to ="/company">Company</Link></li>
<li className='px-6 p-2 '><Link to ="/support">24/7 Support</Link></li>
<li className='px-6 p-2 font-bold bg-lime-500 rounded-xl'><Link to ="susnet.hitoai.ai">Sign Up</Link></li>
<li className='px-6 p-2 font-bold bg-lime-500 rounded-xl'><Link to ="/login">Login</Link></li>


    </ul>
</div>
    </div>
  )
}

export default Header;