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

     
      
      localStorage.setItem("user", response.data.accessToken)
    


      // Redirect to dashboard or perform other actions upon successful login
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
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
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
                <div>
                  <label htmlFor="password" className="form-label">Password</label>
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

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>

                <p className="text-sm font-light text-white">
                  Don't have an account? <a href="http://localhost:5173/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
