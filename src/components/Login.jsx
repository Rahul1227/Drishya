import { useRef, useState } from "react";
import { NETFLIX_BG } from "../utils/constants";
import Header from "./Header";
import { validateData, validateName } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  // Using useRef hooks for form inputs
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // Function to toggle between Sign In and Sign Up
  const toggleSignIn = (e) => {
    e.preventDefault();
    setIsSignIn(!isSignIn);
    setErrMessage(null); // Clear any error messages
  };

  // Function to handle form submission
  const handleSubmitClick = (e) => {
    e.preventDefault();
    setErrMessage(null); // Clear any previous errors

    if (!isSignIn) {
      // Sign-Up Validation
      const nameError = validateName(name.current.value);
      if (nameError) {
        setErrMessage(nameError);
        return;
      }
    }

    // Common Email and Password Validation
    const validationError = validateData(
      email.current.value,
      password.current.value
    );
    if (validationError) {
      setErrMessage(validationError);
      return;
    }

    //sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
        
          const user = userCredential.user;
          if (user) {
            setErrMessage("Congratulation!. You have registered successfully");
          }

          // updating the display name in the sign up
          updateProfile(auth.currentUser, {
            displayName: name.current.value
          }).then(() => {
            // Profile updated!
            const{uid, email, displayName}=auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            
            navigate('/browse')
            // ...
          }).catch((error) => {
            // An error occurred
            console.log(error)
            // ...
          });
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "- " + errorMessage);
          // ..
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
          navigate('/browse')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode + "- " + errorMessage) {
            setErrMessage("User not found. Please Sign up");
          }
        });
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="w-full h-full">
        <img
          src={NETFLIX_BG}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-90 sm:bg-black"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center mx-auto">
        <form className="bg-black bg-opacity-75 py-[5%] px-[7%] rounded text-white space-y-4 w-5/12">
          <h1 className="text-3xl font-bold pb-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 placeholder-gray-400"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or Number"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 placeholder-gray-400"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 placeholder-gray-400"
          />
          <p className="font-extralight text-white text-sm">
            <ul>
              <li>Atleast 8 char long</li>
              <li>Atleast 1 special Char</li>
              <li>Atleat 1 digit</li>
            </ul>
          </p>
          {errMessage && (
            <p className="font-bold text-sm text-red-600 py-2">{errMessage}</p>
          )}
          <button
            onClick={handleSubmitClick}
            type="submit"
            className="w-full p-2 bg-red-600 hover:bg-red-700 rounded font-semibold"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <button
            onClick={toggleSignIn}
            className="w-full text-sm text-gray-400 hover:underline"
          >
            {isSignIn
              ? "New to Netflix? Sign up now"
              : "Already a user? Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
