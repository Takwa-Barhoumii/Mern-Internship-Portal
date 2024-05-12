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
import SignUp from "../components/SignUp";
import UnderReview from "../components/UnderReview";
import Unnasigned from "../components/Unnasigned";
import Intern from "../components/Intern";
import PrivateComponent from "../components/PrivateComponent";
import UsersInfo from "../components/UsersInfo";
import InternshipDetails from "../Pages/InternshipDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element: <Home /> },
                {path: "/about", element: <About/> },
        {path: "/our-internships", element: <OurInternships/> },
        {path: "/resources", element: <Rescources/> },

       //wrapped my space with private component
        {
          path: "/my-space",
          element: <PrivateComponent child={<MySpace />} />,
        } ,

        
        {path: "/create-internship", element: <CreateInternship/> },
        {path: "/supervisor", element: <Supervisor/> },
        {path: "/users-info", element: <UsersInfo/> },
        {path: "/my-internships", element: <MyInternships/> },
        {path: "/edit-internship/:id", element: <UpdateInternship/>,
         loader: ({params}) => fetch(`http://localhost:5000/all-internships/${params.id}`) },
         {path: "/internship/:id", element: <InternshipDetails/> },
         {path: "/under-review", element: <UnderReview/> },
         {path: "/my-space/login", element: <Unnasigned/> },
         {path: "/intern", element: <Intern/> },
        

        
      
    ],
    },

    {
      path: "/login",
      element: <Login/>
    },

    {
      path: "/sign-up",
      element: <SignUp/>
    },
    

    

  ]);

  export default router; 
