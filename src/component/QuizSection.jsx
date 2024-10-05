

import React, { useState } from 'react';
import QuizBrowsePage from './QuizBrowsePage';
import SelectKitsPlans from './SelectKitsPlans';

const QuizSection = () => {
  const [showModel, setShowModel] = useState(false);
  const [iskitsAndPlans, setIsKitsandPlans] = useState(false); // State for kits and plans
  const [isquizPage, setIsQuizPage] = useState(false); // State for quiz page

  // Modal component for Quiz
  const MyModel = () => {
    // Toggles quiz page on 'YES' button click
    const toggleQuizPage = () => {
      setIsQuizPage(!isquizPage);
    };

    // Toggles kits and plans section on 'NO' button click
    const togglePage = () => {
      setIsKitsandPlans(true); // Set this to true to display kits and plans
    };

    return (
      <>
        {isquizPage ? (
          <QuizBrowsePage />
        ) : (
          <div className="shadow-lg w-3/12 h-auto ml-[490px] mt-8">
            <h1 className="text-bold text-white text-center mt-8">
              Do you need help to select kits and plans?
            </h1>
            <div className="flex justify-center mt-3 ">
              <button
                className="p-1 px-3 bg-green-600 text-sm font-bold text-white rounded-lg list-none mb-3 cursor-pointer"
                onClick={toggleQuizPage}
              >
                YES
              </button>
              <button
                className="p-1 px-3 bg-red-500 text-sm font-bold text-white rounded-lg ml-10 list-none mb-3"
                onClick={togglePage} // Clicking NO shows kits and plans
              >
                NO
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      {iskitsAndPlans ? ( // Render kits and plans when NO is clicked
        
          <SelectKitsPlans/>
          
        
      ) : isquizPage ? (
        <QuizBrowsePage />
      ) : (
        <div className="bg-cyan-800 w-full h-[380px] absolute mt-[2670px] overflow-y-hidden">
          <p className="text-center text-2xl font-bold mt-20 ml-16 text-white">
            Let's start to select our Sunset kits or plans of your choice.
          </p>

          <button
            className="bg-pink-600 text-white w-4/12 p-3 font-bold text-xl rounded-lg ml-[450px] mt-16 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300"
            onClick={() => setShowModel(true)}
          >
            Get Started
          </button>
          {showModel && <MyModel />}
        </div>
      )}
    </>
  );
};

export default QuizSection;

     
  


    
 

  


  






  
    
  





