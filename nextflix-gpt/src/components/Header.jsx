import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const naviagte=useNavigate();
  const dispatch=useDispatch();
 const user=useSelector(store => store.user)
 const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut =()=>{
    signOut(auth)
      .then(() => {
       
        // Sign-out successful.
      })
      .catch((error) => {
        naviagte("/error")
        // An error happened.
      });

  }

useEffect(() => {
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      naviagte("/browse")

      // ...
    } else {
      dispatch(removeUser());
      naviagte("/")
    }
  });
  //unsubscribe when component unmounts
  return () => unsubscribe(); 
}, []);

const handGptSearchClick = ()=>{
   //toggle gpt search
   dispatch(toggleGptSearchView())

}
const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value));
}
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white h-12"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES?.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="h-12 py-2 px-4  mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handGptSearchClick}
          >
            GPT-Search
          </button>
          <img
            className="w-12 h-12 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlnpuRaPw1TsOEVo5QDAR7IIK9N8ojAF0Mg&usqp=CAU"
            alt="user-icon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header
