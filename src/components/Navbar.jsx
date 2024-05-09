import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6';




const Navbar = () => {

  //access to user in local storage
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    //logout clear function
    const logout =() => {
      localStorage.clear();
      navigate("/my-space/login");
    
    }


    const [isMenuOpen, SetIsMenuOpen] = useState (false); 
    const handleMenuToggler = () => {

        SetIsMenuOpen (!isMenuOpen)
    }

    const navItems = [
      {path: "/", title: "Home" },
      {path: "/about", title: "About" },
      {path: "/our-internships", title: "Internships" },
      {path: "/resources", title: "Resources" },
      {path: "/supervisor", title: "Supervisor" },
      {path: "/my-space", title: "My Space" },
      
    ]
  return (
    <header className=' max-w-screen-2xl container mx-auto xl:px-24 px-4 shadow-sm '>
        <nav className=' flex justify-between items-center py-6'>
            <a href="/" className="flex items-center gap-2 text-2xl text-black"> 
            <img src="../public/images/logo.png" alt="Tunisair Logo" className="w-40 h-auto mr-2"/>
              InternshipPortal </a>
              <ul className= "hidden md:flex gap-12">
                {
                  navItems.map(({path, title})  => (
                    <li key={path} className= "text-base text-primary" >   
                      <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active": "" }
                  >
                    {title}
                  </NavLink>
                    </li>
                  )
                 )
                }
              </ul>


              { /* Sign up and login & logout buttons */}

              <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
                { auth ? <Link onClick ={logout}  to='/my-space/login' className= "py-2 px-5 border rounded bg-red text-white"> Logout  </Link> :
                <div className='flex'> <Link to='/login' className= "py-2 px-5 border rounded"> Log in </Link>
                <Link to='/sign-up' className= "py-2 px-5 border rounded bg-red text-white"> Sign up  </Link>
                </div>}
                
                

              </div>
              
              {/* mobile menu */}

              <div className='md:hidden block'>
                <button onClick={handleMenuToggler}>
                  {
                    isMenuOpen ?  <FaXmark className='w-5 h-5 text-primary'k/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                  }

                </button>
              </div>
        </nav>
        {/* NAV ITEMS FOR MOBILE*/}
        <div className= {`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}>
          <ul>
          {
                  navItems.map(({path, title})  => (
                    <li key={path} className= "text-base text-white first:text-white py-1" >   
                      <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active": "" }
                  >
                    {title}
                  </NavLink>
                    </li>
                  )
                 )
                }
                <li className='text-white py-1'> <Link to='/login'> Log in </Link> </li>
          </ul>
        </div>
    </header>
  )
}

export default Navbar