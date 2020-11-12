import React from "react";

const Hero = (props) => {
  return (
    <div className='relative overflow-hidden bg-gray-800'>
      <div className='relative pt-6 pb-12 sm:pb-32'>
        <nav className='relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6'>
          <div className='hidden md:flex'>
            <a
              href='/'
              className='inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700'>
              Github
            </a>
          </div>
        </nav>

        <main className='mt-8 sm:mt-16 md:mt-20 lg:mt-24'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
              <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
                <div>
                  <h2 className='mt-4 text-4xl font-extrabold leading-10 tracking-tight text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-6xl xl:text-8xl'>
                    rigflo
                  </h2>
                  <p className='mt-3 text-center text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
