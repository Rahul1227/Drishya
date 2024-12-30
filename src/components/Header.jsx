import { useNavigate } from "react-router-dom";
import { NETFLIX_TEXT, NETFLIX_USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log('error-', error);
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between fixed top-0 left-0 w-full z-10 bg-gradient-to-b from-black">
      <div>
        <img src={NETFLIX_TEXT} alt="Netflix" className="w-44 p-5 mx-16" />
      </div>
      {user && (
        <div className="flex">
          <img className="w-11 m-7" alt="user-icon" src={NETFLIX_USER_ICON} />
          <button
            className="shadow-lg my-7 mx-3 py-2 px-3 bg-red-600 text-white font-bold
        hover:bg-red-700 hover:-translate-y-1 transition-all duration-100"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

