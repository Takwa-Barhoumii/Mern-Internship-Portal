import {createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import OurInternships from "../Pages/OurInternships";
import Rescources from "../Pages/Rescources";
import MySpace from "../Pages/MySpace";
import CreateInternship from "../Pages/CreateInternship";
import Supervisor from "../Pages/Supervisor";
import MyInternships from "../Pages/MyInternships";
import UpdateInternship from "../Pages/UpdateInternship";
import Login from "../components/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home /> },
                {path: "/about", element: <About/> },
        {path: "/our-internships", element: <OurInternships/> },
        {path: "/resources", element: <Rescources/> },
        {path: "/my-space", element: <MySpace/> },
        {path: "/create-internship", element: <CreateInternship/> },
        {path: "/supervisor", element: <Supervisor/> },
        {path: "/my-internships", element: <MyInternships/> },
        {path: "/edit-internship/:id", element: <UpdateInternship/>,
         loader: ({params}) => fetch(`http://localhost:5000/all-internships/${params.id}`) },
        

        
      
    ],
    },

    {
      path: "/Login",
      element: <Login/>
    }
  ]);

  export default router; 
