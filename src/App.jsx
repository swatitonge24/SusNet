import React from "react"
import './App.css'
import Header from "./component/Header";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";

import Error from "./component/Error";
import Login from "./component/Login";
import Homepage from "./component/Homepage";
import EnvironmentalDataAnalytics from "./component/EnvironmentalDataAnalytics";
import Documentation from "./component/Documentation";
import Energybill from "./component/Energybill";
import Hangging_btn from "./component/Hangging_btn";
import Footer from "./component/Footer";
import QuizBrowsePage from "./component/QuizBrowsePage";
import Plans from "./component/Plans";





  const App =()=>{
    return(
      <div>
        
        <Header/>
       
        
        <Outlet/>
        <Hangging_btn/>
        <Footer/>
       
        
      
        
        
      </div>
    )
  }
   export const aapRouter=createBrowserRouter([
    {
      path :"/",
      element:<App/>,
      children:[
        {
          path:"/",
          element:<Homepage/>,
        },
        {
          path:"/documentation",
          element:<Documentation/>,
        },
        
        {
          path:"/environmentalDataAnalytics",
          element:<EnvironmentalDataAnalytics/>,
        },
        {
          path:"/energybill",
          element:<Energybill/>,
        },
        {
          path:"/login",
          element:<Login/>,
        },
       
        
       

      ],
      errorElement:<Error/>,
    },
    
    
  ]);
  
    
  

export default App;
