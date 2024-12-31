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
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
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
           userCredential.user;
          // console.log(user);
          
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
    <div className="relative w-full min-h-screen">
      <Header />
      <div className="w-full h-full">
        <img
          src={NETFLIX_BG}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover filter contrast-75 brightness-90"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <form className="bg-black bg-opacity-80 p-8 md:p-12 rounded-lg text-white space-y-6 w-full max-w-md mx-4">
          <h1 className="text-3xl font-bold mb-8">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          
          {!isSignIn && (
            <div className="space-y-2">
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <input
              ref={email}
              type="email"
              placeholder="Email or Number"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          
          <div className="space-y-2 relative">
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <div className="bg-gray-800 bg-opacity-40 p-4 rounded-lg">
            <p className="text-sm text-gray-300">
              Password must contain:
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>At least 8 characters</li>
                <li>At least 1 special character</li>
                <li>At least 1 digit</li>
              </ul>
            </p>
          </div>

          {errMessage && (
            <p className="text-red-500 text-sm font-medium py-2">{errMessage}</p>
          )}

          <button
            onClick={handleSubmitClick}
            type="submit"
            className="w-full p-3 bg-red-600 hover:bg-red-700 rounded font-semibold transition-colors duration-200"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <button
            onClick={toggleSignIn}
            className="w-full text-sm text-gray-400 hover:text-gray-200 transition-colors duration-200"
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