import React, { useState } from 'react';
import {Data}  from '../assests/Data'; // Assuming Data is imported from a separate file
import robot3 from '../assests/robot3.jpeg'


const QuizBrowsePage = () => {
  const [index, setIndex] = useState(0);  // Starting with the first question (index 0)
  const [progress, setProgress] = useState(0); // Progress bar
  const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option
  const data = Data;  // The quiz data

  // Function to go to the next question
  const next = () => {
    if (selectedOption === null) {
      alert('Please select an option before moving to the next question.');
      return;
    }

    if (index < data.length - 1) {
      setIndex(index + 1);  // Update index for next question
      setSelectedOption(null);  // Reset the selected option
      setProgress(progress + 20);  // Increase progress (assuming 5 questions, each worth 20%)
    } else {
      // If all questions are completed, show congratulations message
      alert("Congratulations! You have completed the quiz.");
    }
  };


  // Function to go back to the previous question
  const back = () => {
    if (index > 0) {
      setIndex(index - 1);
      setProgress(progress - 20); // Decrease progress if going back
      setSelectedOption(null); // Reset selected option when going back
    }
  };

  // Function to reset the quiz
  const handleButtonReset = () => {
    setIndex(0);
    setProgress(0);
    setSelectedOption(null);
  };

  // Function to handle option selection
  const checkAns = (e, option) => {
    setSelectedOption(option); // Set the selected option
  };

  // Get color for progress bar based on progress percentage
  const getColor = () => {
    if (progress < 40) return '#ff0000';
    else if (progress < 60) return '#ffa500';
    else return '#2ecc71';
  };

  return (
    <>
      <div className="bg-cyan-800 w-full h-[600px] absolute mt-[2630px] overflow-y-hidden">
        <div className='w-3/4 h-[450px] bg-cyan-700 ml-44 justify-center shadow-2xl rounded-lg'>
          <div className="flex mt-8">
            <img className='w-24 h-18 ml-8 mb-2 rounded-2xl' src={robot3} alt="Robot" />
            <h1 className='text-3xl font-bold font-serif mt-2 ml-24 text-white'>
              Let's customize your Kits and Plans
            </h1>
          </div>

          {/* Progress bar */}
          <div className='w-1/2 h-1 ml-56 bg-gray-300 rounded-lg'>
            <div
              className="rounded-lg h-1 transition duration-150 ease-out"
              style={{ width: `${progress}%`, backgroundColor: getColor() }}>
            </div>
            <div className='ml-56 '>{`Question ${index + 1} of ${data.length}`}</div>
          </div>

          {/* Question and Options */}
          <div className='ml-52 mt-8 justify-center '>
            <h2 className="font-bold text-lg text-black border-1 border-blue-100 p-2 rounded-full shadow-lg bg-white w-3/4 mt-2">
              {index + 1}. {data[index].question}
            </h2>

            <div className="flex mt-4 ml-4 ">
              <li
                className={`px-2 text-black text-start font-sans text-medium border-1 w-64  border-blue-100 p-2 rounded-xl list-none cursor-pointer ${selectedOption === 1 ? 'bg-green-400' : ''}`}
                onClick={(e) => checkAns(e, 1)}>
                {data[index].option1}
              </li>
              <li
                className={`px-2 ml-2 text-black font-sans text-medium border-1 w-64 border-blue-100 p-2 rounded-xl list-none cursor-pointer ${selectedOption === 2 ? 'bg-green-400' : ''}`}
                onClick={(e) => checkAns(e, 2)}>
                {data[index].option2}
              </li>
            </div>

            <div className="flex mt-4 ml-4 ">
              <li
                className={`px-2 text-black font-sans text-medium border-1 w-64 border-blue-100 p-2 rounded-xl list-none cursor-pointer ${selectedOption === 3 ? 'bg-green-400' : ''}`}
                onClick={(e) => checkAns(e, 3)}>
                {data[index].option3}
              </li>
              <li
                className={`px-2 ml-2 text-black font-sans text-medium border-1 w-64 border-blue-100 p-2 rounded-xl list-none cursor-pointer ${selectedOption === 4 ? 'bg-green-400' : ''}`}
                onClick={(e) => checkAns(e, 4)}>
                {data[index].option4}
              </li>
            </div>

            {/* Navigation Buttons */}
            <div className='ml-36'>
              <div className='flex mb-4 mt-4 p-2 px-3 rounded-lg'>
                <button className="bg-green-500 hover:bg-red-500 hover:text-white p-2 mr-4 px-3 rounded-lg font-bold" onClick={back}>
                  Back
                </button>
                <button className="bg-green-500 hover:bg-red-500 hover:text-white p-2 mr-3 px-3 rounded-lg font-bold" onClick={handleButtonReset}>
                  Reset
                </button>
                <button className="bg-green-500 hover:bg-red-500 hover:text-white p-2 px-3 rounded-lg font-bold" onClick={next}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizBrowsePage;
