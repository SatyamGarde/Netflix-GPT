import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [SignIn, SetSignIn] = useState(true);
  const ToggleSignIn = () => {
    SetSignIn(!SignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>
      <div className="flex justify-center items-center h-screen">
        <form className="absolute bg-black text-white p-12  w-3/12 bg-opacity-80">
          <h1 className="text-3xl font-bold my-8">
            {!SignIn ? "Sign Up" : "Sign In"}
          </h1>
          {!SignIn && (
            <input
              type="text"
              placeholder="Name"
              className="p-2 my-4 w-full bg-zinc-800"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-zinc-800 rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-2 my-2 mb-12 w-full bg-zinc-800 rounded-md"
          />
          <button className="p-4 mm-4 w-full bg-red-600 rounded-md">
            {SignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between items-center my-3">
            <div>
              <input type="checkbox" className=" h-5 w-5 text-indigo-600" />
              <label for="myCheckbox" className="ml-3 text-gray-700">
                Remember me
              </label>
            </div>
            <div>Need help?</div>
          </div>
          <p className="cursor-pointer py-5" onClick={ToggleSignIn}>
            {SignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registerd.. Sign In now"}
          </p>

          <p className="py-4 text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a className="text-blue-700" href="https://www.netflix.com">
              Learn More
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
