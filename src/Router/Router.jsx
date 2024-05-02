import {createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import OurInternships from "../Pages/OurInternships";
import Rescources from "../Pages/Rescources";
import MySpace from "../Pages/MySpace";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home /> },
        {path: "/about", element: <About/> },
        {path: "/our-internships", element: <OurInternships/> },
        {path: "/resources", element: <Rescources/> },
        {path: "/my-space", element: <MySpace/> }
        
      
    ],
    },
  ]);

  export default router; 
