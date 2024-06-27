import React from 'react';
import { UserAuth } from '../context/AuthContext';
import BookList from '../components/BookList/BookList'
import SearchForm from '../components/SearchForm/SearchForm'

const Account = () => {
  
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
