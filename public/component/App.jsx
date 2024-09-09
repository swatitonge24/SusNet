import React from "react"
import Body from "./component/Body";
import Header from "./component/Header";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Market from "./component/updates";
import Company from "./component/Company";
import Support from "./component/Support";
import Error from "./component/Error";
import Login from "./component/Login";


  const App =()=>{
    return(
      <div>
        
        <Header/>
        <Outlet/>
        
        
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
          element:<Body/>,
        },
        {
          path:"/updates",
          element:<Market/>,
        },
        {
          path:"/company",
          element:<Company/>,
        },
        {
          path:"/support",
          element:<Support/>,
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
