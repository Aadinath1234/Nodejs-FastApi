// import React from "react";
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="flex flex-col md:flex-row w-full min-h-screen">
//       {/* Left Side Image */}
//       <div className="w-full md:w-1/2 h-64 md:h-auto">
//       <Link to="/">
//       <img
//           src="/assets/base.jpg"
//           alt="side visual"
//           className="w-full h-full object-cover"
//         />
//       </Link>  
//       </div>

//       {/* Right Side Form */}
//       <div className="flex justify-center items-center w-full md:w-1/2 bg-sky-100">
//         <fieldset className="w-full max-w-md bg-sky-100  border border-base-300 rounded-box p-6 md:p-10 gap-4">
//           {/* Header and Branding */}
//           <div className="text-center">
//             <Link to="/">
//             <img
//               src="/assets/name.png"
//               alt="Brand logo"
//               className="mx-auto mb-4"
//             />
//             </Link>
            
//             <p className="font-bold text-2xl">Welcome to Gigfloww</p>
//             <div className="mt-2 font-[Montserrat]">
//               <p className="font-bold text-4xl mt-8">Register</p>
//               <p className="font-medium">Seamless HR operations start now!</p>
//               <p>SignUp</p>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="flex flex-col gap-4 mt-8">
//             <label className="label">Name</label>
//             <input
//               type="text"
//               className="input rounded-2xl w-full"
//               placeholder="Name"
//             />

//             <label className="label">Email Address</label>
//             <input
//               type="email"
//               className="input rounded-2xl w-full"
//               placeholder="Email Address"
//             />

//             <label className="label">Password</label>
//             <input
//               type="password"
//               className="input rounded-2xl w-full"
//               placeholder="Password"
//             />

//             <label className="label">Confirm Password</label>
//             <input
//               type="password"
//               className="input rounded-2xl w-full"
//               placeholder="Confirm Password"
//             />

//             <button className="btn bg-sky-600 mt-4">Register</button>

//             <div className="mt-6 text-center">
//               <p>
//                 Already on Gigfloww?{" "}
//                 <button className="text-blue-600 underline ml-1">Login</button>
//               </p>
//             </div>

//             <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 w-full h-full">
//               <button className="flex items-center gap-2 rounded-2xl bg-transparent border-2 border-gray-400 p-2 text-black w-full md:w-auto">
//                 <img
//                   src="https://freelogopng.com/images/all_img/1657955079google-icon-png.png"
//                   alt="Google"
//                   className="w-10 h-10"
//                 />
//                 <span>Register with Google</span>
//               </button>

//               <button className="flex items-center gap-2 rounded-2xl bg-transparent border-2 border-gray-400 p-2 text-black w-full md:w-auto">
//                 <img
//                   src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19677.png"
//                   alt="Apple"
//                   className="w-10 h-10"
//                 />
//                 <span>Register with Apple</span>
//               </button>
//             </div>
//           </div>
//         </fieldset>

//         <div></div>
//       </div>
//     </div>
//   );
// }

// export default Login;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!isLoginMode && formData.password !== formData.confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      const endpoint = isLoginMode ? '/auth/login' : '/auth/register';
      const payload = isLoginMode
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const response = await axios.post(`http://localhost:5000/api${endpoint}`, payload);

      if (isLoginMode) {
        localStorage.setItem('user', JSON.stringify(response.data));
        alert('Login successful!');
        navigate('/task');
      } else {
        alert('Signup successful! Please log in.');
        setIsLoginMode(true);
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLoginMode ? 'Login to Gigfloww' : 'Create your Gigfloww account'}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLoginMode && (
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input input-bordered"
          />

          {!isLoginMode && (
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="input input-bordered"
            />
          )}

          <button type="submit" className="btn btn-primary mt-4">
            {isLoginMode ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="mt-4 text-center">
          {isLoginMode ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={toggleMode} className="text-blue-600 underline">
            {isLoginMode ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
