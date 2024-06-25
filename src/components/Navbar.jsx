import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBarApp = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'>
        <Link to="/" >
         Books Masb
        </Link>
      </h1>
      {user?.displayName ? (
        <>
        <button onClick={handleSignOut}>
        <p>{user?.displayName}</p>
        Logout
        </button>
        </>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div>
  );
};

export default NavBarApp;
