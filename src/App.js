import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import NavBarApp from './components/Navbar';
import { AppProvider } from './context.';
import BookDetails from './components/BookDetails/BookDetails';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppProvider>
        <NavBarApp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path = "/book/:id" element = {<BookDetails />} />

          <Route
            path='/book'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
        </AppProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
