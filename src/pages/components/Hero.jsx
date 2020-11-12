import React from "react";

const Hero = (props) => {
  return (
    <div className='relative overflow-hidden bg-purple-500'>
      <div className='relative pt-6 pb-12 sm:pb-32'>
        <nav className='relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6'>
          <div>
            <a
              href='https://www.rigflo.io/'
              className='inline-block px-4 py-2 mt-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0'>
              rigflow
            </a>
          </div>
          <div>
            <a
              href='https://github.com/oslabs-beta/rigflo'
              className='inline-block px-4 py-2 mt-4 text-sm font-bold leading-none text-white border-2 border-white rounded hover:border-transparent hover:text-purple-500 hover:bg-white lg:mt-0'>
              Github
            </a>
          </div>
        </nav>

        <main className='mt-8 sm:mt-16 md:mt-20 lg:mt-24'>
          <div className='max-w-screen-xl mx-auto'>
            <div id='logo' className='grid-cols-1'></div>
            <div className='lg:grid lg:grid-cols-1 lg:gap-0'>
              <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:flex lg:items-center'>
                <div>
                  <h2 className='mt-2 text-6xl font-extrabold leading-10 tracking-tight text-center text-white sm:mt-5 sm:leading-none sm:text-5xl lg:mt-6 lg:text-6xl xl:text-8xl'>
                    rigflo
                  </h2>
                  <p className='mt-3 text-center text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    A design first approach to speed up API delivery.
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
