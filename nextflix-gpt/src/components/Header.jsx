import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const naviagte=useNavigate();
 const user=useSelector(store => store.user)
  const handleSignOut =()=>{
    signOut(auth)
      .then(() => {
        naviagte("/")
        // Sign-out successful.
      })
      .catch((error) => {
        naviagte("/error")
        // An error happened.
      });

  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="logo"
      />
      { user &&(
      <div className='flex p-2'>
        <img
          className="w-12 h-12 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlnpuRaPw1TsOEVo5QDAR7IIK9N8ojAF0Mg&usqp=CAU"
          alt="user-icon"
        />
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>)
}
    </div>
  );
}

export default Header
