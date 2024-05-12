import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State to hold login credentials
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch(`http://localhost:5000/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })

    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data
    });

      
        console.log(response)
      if (response.status!=200) {
        throw new Error('Login failed');
      }

     
      
      localStorage.setItem("user", response.data._id)
      localStorage.setItem("role", response.data.role)
    


      // Redirect to dashboard or perform other actions upon successful login
      // if(response.data.role=="potentialIntern")
      //   {
      //     navigate('/my-space');

      //   }
      //   else if(response.data.role=="intern")
      //     {
      //       navigate('/my-space');

      //     }
      //     else {

      //     }
          navigate('/my-space');



      
      // For example, you can use react-router-dom to navigate to a different route
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed');
    }
  };



  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
                <img
                  alt=""
                  src="https://i.imgur.com/ROGBDeZ.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </aside>
              <div className="flex items-center justify-center
                px-8 py-8 sm:px-12 lg:col-span-7 
                lg:px-16 lg:py-12 xl:col-span-6">

                <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Tunisair
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                  quibusdam aperiam voluptatum.
                </p>
                  


                  
                  <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-input-field"
                        placeholder="name@company.com"
                        required=""
                        value={loginData.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Password */}
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-input-field"
                        placeholder="••••••••"
                        required=""
                        value={loginData.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">

                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-red bg-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red focus:outline-none focus:ring">
                      Log in
                    </button>
                    

                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Don't have an account? <a href="http://localhost:5173/sign-up" className="text-gray-700 underline">Register here</a>
                    </p>
                    </div>

                  </form>
                </div>
              </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
