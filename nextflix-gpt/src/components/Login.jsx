import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import { checkValidateData } from '../utils/validate.js'

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true)
  const[errorMessage,SetErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick = () =>{
     const message = checkValidateData(
       email.current.value,
       password.current.value
     );
   console.log(email.current.value);
   console.log(password.current.value);
   SetErrorMessage(message)
   console.log(message);
  }

  const toggleSingInForm = () => {
   setIsSignInForm(!isSignInForm)
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fit/w_828,h_466,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className='text-red-500 font-bold text-lg py-3'>{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSingInForm}>
          {isSignInForm
            ? " New to Netfilix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login
