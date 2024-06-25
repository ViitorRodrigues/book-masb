import React from 'react';
import { UserAuth } from '../context/AuthContext';
import BookList from '../components/BookList/BookList'
import SearchForm from '../components/SearchForm/SearchForm'

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <>
    <div className='w-[300px] m-auto'>
    </div>
    <SearchForm />
    <BookList />
   </>
  );
};

export default Account;
