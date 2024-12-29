import { useNavigate } from "react-router-dom";
import { NETFLIX_TEXT, NETFLIX_USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user=useSelector((store)=>store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
        console.log('error-',error)
        navigate('/error')
      });
  };
  return (
    <div className="flex justify-between absolute w-full z-10 bg-gradient-to-b from-black">
      <div>
        <img src={NETFLIX_TEXT} alt="NetFlix" className="w-44 p-5 mx-16" />
      </div>
      {user &&
      <div className="flex">
        <img className="w-8 m-7 " alt="user-icon" src={NETFLIX_USER_ICON} />
        <button
          className="shadow-lg my-7 mx-3 py-2 px-3 bg-red-600 text-white font-bold
        hover:bg-red-700 hover:-translate-y-1 transition-all duration-100 "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
}
    </div>
  );
};

export default Header;
