import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div>
  <div className="relative flex h-full w-full">
  <div className="h-screen w-1/2 bg-black">
    <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
      <div>
        <p className="text-2xl">Login</p>
        <p>please login to continue</p>
      </div>
      <div className="my-6">
        <button onClick={handleGoogleSignIn} className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">
          <img
            src="https://freesvg.org/img/1534129544.png"
            className="mr-2 w-6 object-fill"
          />
          Sign in with Google
        </button>
      </div>
      <div>
      </div>
      <div className="mt-10">
      </div>
    </div>
  </div>
  <div className="h-screen w-1/2 bg-blue-600">
    <img
      src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
      className="h-full w-full"
    />
  </div>
</div>
    </div>
  );
};

export default Signin;
