import React from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { showGptSearch } from "./BrowseContainer/GPT/GptSearchSlice";
import { changeLanguage } from "./BrowseContainer/GPT/languageSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUer, removeUser } from "../Utils/userSlice";
const Header = () => {
  const GptSearchbar = useSelector((store) => store.GptSearch.GptSearch);
  const navigate = useNavigate();
  const user = useSelector(store=> store.user);

  const dispatch = useDispatch();
  const handletoggleGptSearch = () => {
    dispatch(showGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUer({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute z-30 flex flex-wrap bg-gradient-to-b from-black w-full items-center md:px-8">
      <img className="w-44 md:w-60 px-8 py-2 -mx-5" src={LOGO_URL} alt="Logo" />
      {user &&(<div className="flex-grow flex justify-end">
        {GptSearchbar && (
          <select
            className="text-white bg-gray-900 rounded-lg my-4" 
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <div className="text-white p-2 flex">
          {GptSearchbar ? (
            <button
              onClick={handletoggleGptSearch}
              className="text-white text-xl md:text-3xl bg-purple-800 md:p-2 p-1 rounded-lg md:px-3 hover:bg-purple-900 hover:text-gray-300"
            >
              Home
            </button>
          ) : (
            <button
              onClick={handletoggleGptSearch}
              className="text-white text- md:text-3xl bg-purple-800 md:p-2 p-1 mx-6 rounded-lg md:px-3 hover:bg-purple-900 hover:text-gray-300"
            >
              GPT Search
            </button>
          )}
          <img
            className="w-12 ml-2 rounded-full"
            alt="UserIcon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-xl text-white ml-2 hover:text-red-500">Login</button>
        </div>
      </div>)}
    </div>
  );
};

export default Header;
