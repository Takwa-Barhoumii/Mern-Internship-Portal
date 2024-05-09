import React, { useState } from 'react';

const SignUp = () => {
  // Adding state to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  // Function to update state on input change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch(`http://localhost:5000/api/users/register`, { // Update the URL with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to register');
      const result = await response.json();
      console.log(result); // Log or handle the response from the server
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-red">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" name="firstName" id="firstName" className="form-input-field" placeholder="e.g.: Takwa" required="" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" name="lastName" id="lastName" className="form-input-field" placeholder="e.g.: Barhoumi" required="" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" id="email" className="form-input-field" placeholder="name@company.com" required="" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                  <input type="tel" name="phoneNumber" id="phoneNumber" className="form-input-field" placeholder="xx-xxx-xxx" required="" onChange={handleChange}/>
                </div>
                <div>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name="password" id="password" className="form-input-field" placeholder="••••••••" required="" onChange={handleChange}/>
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                <p className="text-sm font-light text-white">
                  Already have an account? <a href="http://localhost:5173/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
