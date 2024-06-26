import React from 'react'
import { Link } from 'react-router-dom'

const LandPage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900">
  <img
    src="https://img.freepik.com/vetores-premium/algumas-pessoas-lendo-livros-no-interior-da-sala-de-estar-de-casa_213110-915.jpg"
    className="absolute object-cover w-full h-full"
  />
  <div className="absolute inset-0 bg-black opacity-25"></div>
  <header className="absolute top-0 left-0 right-0 z-20">
    <nav className="container px-6 py-4 mx-auto md:px-12">
      <div className="items-center justify-center md:flex">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-12 h-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
    <div className="relative z-10 flex flex-col items-center w-full">
      <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
        Book Masb
      </h1>
      <Link to={`/signin`}
              className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900"
      >
        Start Now
      </Link>
    </div>
  </div>
</div>

  )
}

export default LandPage