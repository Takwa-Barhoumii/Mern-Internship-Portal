import React, { useState } from "react";

const SignUp = () => {
  // Adding state to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  // Function to update state on input change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch(`http://localhost:5000/api/users/register`, {
        // Update the URL with your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to register");
      const result = await response.json();
      console.log(result); // Log or handle the response from the server
      alert("Registration successful");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://i.imgur.com/VZs9dmv.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <div
            className="flex items-center justify-center
            px-8 py-8 sm:px-12 lg:col-span-7 
            lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Tunisair
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>

              <form
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-input-field"
                    placeholder="e.g.: Takwa"
                    required=""
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-input-field"
                    placeholder="e.g.: Barhoumi"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input-field"
                    placeholder="name@company.com"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="form-input-field"
                    placeholder="xx-xxx-xxx"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-input-field"
                    placeholder="••••••••"
                    required=""
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="schoolname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    School Name
                  </label>
                  <input
                    type="text"
                    name="schoolname"
                    id="schoolname"
                    className="form-input-field"
                    placeholder="e.g.: Université centrale"
                    required=""
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="internshipty"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Internship Type
                  </label>
                  <select
                    name="internshipty"
                    id="internshipty"
                    className="form-input-field"
                    required=""
                    onChange={handleChange}
                  >
                    <option value="">Select Type</option>
                    <option value="summer-internship">
                      {" "}
                      Summer Internship{" "}
                    </option>
                    <option value="eng-pfe"> Engeneering PFE</option>
                    <option value="bach-pfe"> Bachelors PFE </option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="skillsdev"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Skills
                  </label>
                  <input
                    type="password"
                    name="skillsdev"
                    id="skillsdev"
                    className="form-input-field"
                    placeholder="e.g.: HTML,CSS,ReactJs"
                    required=""
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-red bg-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red focus:outline-none focus:ring"
                  >
                    Create an account
                  </button>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?{" "}
                    <a
                      href="http://localhost:5173/login"
                      className="text-gray-700 underline"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
