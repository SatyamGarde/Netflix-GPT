import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../Utils/Firebase";

import { checkValidData } from "../Utils/Validate";
import { BG_URL } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUer } from "../Utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [SignIn, SetSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [errorMessage, seterrorMessage] = useState(null);
  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    //sign in/ signUp

    if (!SignIn) {
      //SignUp form logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/90107690?v=4"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUer({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            seterrorMessage(error.message);
          });

          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const ToggleSignIn = () => {
    SetSignIn(!SignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img className="h-screen md:h-auto object-cover" src={BG_URL}></img>
      </div>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="absolute bg-black text-white p-12 -mt-64 md:mt-64  md:w-3/12 bg-opacity-80"
        >
          <h1 className="text-3xl font-bold my-8">
            {!SignIn ? "Sign Up" : "Sign In"}
          </h1>
          {!SignIn && (
            <input
            ref={name}
              type="text"
              placeholder="Name"
              className="p-2 my-4 w-full bg-zinc-800"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-zinc-800 rounded-md text-xl"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2  w-full bg-zinc-800 rounded-md text-xl"
          />
          <p className="text-red-500 mb-12 font-bold">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="p-4 mm-4 w-full bg-red-600 rounded-md"
          >
            {SignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex justify-between items-center my-3">
            <div>
              <input type="checkbox" className=" h-5 w-5 text-indigo-600" />
              <label htmlFor="myCheckbox" className="ml-3 text-gray-700">
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
