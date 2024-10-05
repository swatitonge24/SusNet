import Designer from '../assests/Designer.jpeg';
import efficiency from '../assests/efficiency.png';
import convenience from '../assests/convenience.png';
import sustainable from '../assests/sustainable.png';
import savings from '../assests/savings.png';
import SUSNET from './SUSNET';
import SusnetComponent from './SusnetComponent';
import Plans from './Plans';
import QuizSection from './QuizSection';
import SusnetKits from './SusnetKits';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/plans"); // Navigates to the Plans component on button click
  };

  return (
    <>
      <div className='w-full bg-slate-100 mt-28'>
        <img
          className='absolute bg-contain w-full h-[500px] bg-opacity-90'
          src={Designer}
          alt="Designer"
        />

        <h1 className='relative text-sm md:text-4xl px-10 md:px-32 pt-32 ml-14 font-serif font-bold text-white mt-8'>
          Use SusNet as your AI-Enabled <br />cost-cutting Software
        </h1>

        <button
          onClick={handleClick}
          className='text:sm ml-20 mt-4 px-2 md:mt-4 md:px-2 transition ease-in-out delay-150 bg-white hover:bg-cyan-500 text-black p-2 hover:text-white hover:-translate-y-1 hover:scale-110 duration-300 absolute rounded-lg font-bold md:ml-44 md:text-lg shadow-2xl'
        >
          Explore Our Plans
        </button>
      </div>

      <div className='mt-40 h-[900px] md:mt-56 absolute bg-gray-100 w-full md:h-[450px]'>
        <h1 className='text-xl md:relative font-bold md:text-4xl mt-14 font-serif text-black text-center'>
          Why us?
        </h1>
        <p className='text-center font-medium mt-4'>
          Susnet being the best solution to reduce on your electricity bill
        </p>

        <div className='justify-items-start md:flex md:justify-between mt-12 ml-4 overflow-x-hidden'>
          <div className='col-2 px-3'>
            <img className='w-32 h-28 ml-8' src={efficiency} alt="Efficiency" />
            <h4 className='font-bold text-center'>Efficiency</h4>
            <p className='text-sm text-center ml-4'>Optimize your energy usage effortlessly.</p>
          </div>
          <div className='col-2 px-3'>
            <img className='w-32 h-28 ml-8' src={sustainable} alt="Sustainable" />
            <h4 className='font-bold text-center ml-4'>Sustainable</h4>
            <p className='text-sm text-center ml-8'>
              Contribute to a greener planet with intelligent energy management.
            </p>
          </div>
          <div className='col-2 px-3'>
            <img className='w-32 h-28 mr-6' src={convenience} alt="Convenience" />
            <h4 className='font-bold text-center mr-4'>Convenience</h4>
            <p className='text-sm text-center mr-4'>
              Enjoy a fully automated system that requires minimal intervention.
            </p>
          </div>
          <div className='col-2 px-3'>
            <img className='w-32 h-28 mr-6' src={savings} alt="Cost Saving" />
            <h4 className='font-bold text-center mr-16'>Cost Saving</h4>
            <p className='text-sm text-center mr-10'>Reduce your energy costs by up to 60%</p>
          </div>
        </div>
      </div>

      <SUSNET />
      <SusnetComponent />
      <SusnetKits />
      <Plans />
      <QuizSection />
    </>
  );
};

export default Homepage;
