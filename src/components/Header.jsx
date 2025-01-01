import { useNavigate } from "react-router-dom";
import { NETFLIX_TEXT, NETFLIX_USER_ICON } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { setPreLang, toggleGptShow } from "../store/gptSlice";
import { LANGUAGE_SUPPORTED } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const gptShow = useSelector((store) => store.gpt.gptShow);

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

  const handleSearchClick = () => {
    dispatch(toggleGptShow());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (e) => {
    e.preventDefault();
    dispatch(setPreLang(e.target.value));
  };

  const handleNewButtonClick = () => {
    navigate('/new-feature'); // Example functionality for the new button
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
        <img src={NETFLIX_TEXT} alt="Netflix" className="w-44 p-5 mx-16 max-xs:mx-1" />
      </div>
      {user && (
        <>
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden px-4 py-2 m-4"
            onClick={toggleMenu}
          >
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white mb-1"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            {gptShow && (
              <div className="my-7 mx-3 py-2 px-3">
                <select
                  className="w-[120px] h-[40px] bg-rose-600 text-white font-bold rounded-lg px-3 py-2"
                  onChange={handleLanguageChange}
                >
                  {LANGUAGE_SUPPORTED.map((lan) => (
                    <option
                      className="bg-orange-800"
                      key={lan.identifier}
                      value={lan.identifier}
                    >
                      {lan.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              className="shadow-lg my-7 mx-3 py-1 px-3 bg-purple-500 text-white font-bold
                hover:bg-purple-900 hover:-translate-y-1 transition-all duration-100 rounded-lg"
              onClick={handleSearchClick}
            >
              {!gptShow ? 'Try Gpt Search' : 'Home'}
            </button>
            <img className="w-11 m-7" alt="user-icon" src={NETFLIX_USER_ICON} />
            <button
              className="shadow-lg my-7 mx-3 py-2 px-3 bg-red-600 text-white font-bold
                hover:bg-red-900 hover:-translate-y-1 transition-all duration-100 rounded-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 bg-black w-48 py-2 rounded-lg shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={handleSearchClick}
              >
                Try GPT Search
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={handleNewButtonClick}
              >
                New Feature
              </button>
              <div className="px-4 py-2">
                <img className="w-8" alt="user-icon" src={NETFLIX_USER_ICON} />
              </div>
              <button
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Header;
