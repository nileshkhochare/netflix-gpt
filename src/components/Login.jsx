import React, { useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase";

const Login = () => {
  const user = useSelector((state) => state.user);

  const [isSigninForm, setIsSignInForm] = useState(false);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  const handleSigninSignup = (event) => {
    event.preventDefault();
    console.log(isSigninForm);
    if (isSigninForm && name && email && password) {
      console.log(name, email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else if (!isSigninForm && email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  if (user) {
    return "Loading";
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="body"
        />
      </div>

      <form
        className="p-12 bg-black absolute w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80"
        onSubmit={(e) => handleSigninSignup(e)}
      >
        <h1 className="text-3xl font-bold py-4">
          {!isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSigninForm && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {!isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {!isSigninForm
            ? " Not a member? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
