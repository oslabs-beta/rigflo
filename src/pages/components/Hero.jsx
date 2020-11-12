import React from "react";

const Hero = (props) => {
  return (
    <div className='relative overflow-hidden bg-gray-800'>
      <div className='hidden sm:block sm:absolute sm:inset-0'>
        <svg
          className='absolute bottom-0 right-0 mb-48 text-gray-700 transform translate-x-1/2 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0'
          width='364'
          height='384'
          viewBox='0 0 364 384'
          fill='none'>
          <defs>
            <pattern
              id='eab71dd9-9d7a-47bd-8044-256344ee00d0'
              x='0'
              y='0'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'>
              <rect x='0' y='0' width='4' height='4' fill='currentColor' />
            </pattern>
          </defs>
          <rect
            width='364'
            height='384'
            fill='url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)'
          />
        </svg>
      </div>
      <div className='relative pt-6 pb-12 sm:pb-32'>
        <nav className='relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6'>
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <a href='/' aria-label='Home'>
                <img
                  className='w-auto h-8 sm:h-10'
                  src='https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg'
                  alt='Logo'
                />
              </a>
              <div className='flex items-center -mr-2 md:hidden'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                  id='main-menu'
                  aria-label='Main menu'
                  aria-haspopup='true'>
                  <svg
                    className='w-6 h-6'
                    stroke='currentColor'
                    fill='none'
                    viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='hidden space-x-10 md:flex md:ml-10'>
              <a
                href='/'
                className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                Product
              </a>
              <a
                href='/'
                className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                Features
              </a>
              <a
                href='/'
                className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                Marketplace
              </a>
              <a
                href='/'
                className='font-medium text-white transition duration-150 ease-in-out hover:text-gray-300'>
                Company
              </a>
            </div>
          </div>
          <div className='hidden md:flex'>
            <a
              href='/'
              className='inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray focus:border-gray-700 active:bg-gray-700'>
              Log in
            </a>
          </div>
        </nav>

        <div className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
          <div className='rounded-lg shadow-md'>
            <div
              className='overflow-hidden bg-white rounded-lg shadow-xs'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='main-menu'>
              <div className='flex items-center justify-between px-5 pt-4'>
                <div>
                  <img
                    className='w-auto h-8'
                    src='https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg'
                    alt=''
                  />
                </div>
                <div className='-mr-2'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500'
                    aria-label='Close menu'>
                    <svg
                      className='w-6 h-6'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                <a
                  href='/'
                  className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                  role='menuitem'>
                  Product
                </a>
                <a
                  href='/'
                  className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                  role='menuitem'>
                  Features
                </a>
                <a
                  href='/'
                  className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                  role='menuitem'>
                  Marketplace
                </a>
                <a
                  href='/'
                  className='block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50'
                  role='menuitem'>
                  Company
                </a>
              </div>
              <div>
                <a
                  href='/'
                  className='block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700'
                  role='menuitem'>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>

        <main className='mt-8 sm:mt-16 md:mt-20 lg:mt-24'>
          <div className='max-w-screen-xl mx-auto'>
            <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
              <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
                <div>
                  <a
                    href='/'
                    className='inline-flex items-center p-1 pr-2 text-white bg-gray-900 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200'>
                    <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                      We're hiring
                    </span>
                    <span className='ml-4 text-sm leading-5'>
                      Visit our careers page
                    </span>
                    {/* Heroicon name: chevron-right */}
                    <svg
                      className='w-5 h-5 ml-2 text-gray-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                  <h2 className='mt-4 text-4xl font-extrabold leading-10 tracking-tight text-white sm:mt-5 sm:leading-none sm:text-6xl lg:mt-6 lg:text-5xl xl:text-6xl'>
                    Data to enrich your
                    <br className='hidden md:inline' />
                    <span className='text-indigo-400'>online business</span>
                  </h2>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p>
                  <p className='mt-8 text-sm font-semibold tracking-wide text-white uppercase sm:mt-10'>
                    Used by
                  </p>
                  <div className='w-full mt-5 sm:mx-auto sm:max-w-lg lg:ml-0'>
                    <div className='flex flex-wrap items-start justify-between'>
                      <div className='flex justify-center px-1'>
                        <img
                          className='h-9 sm:h-10'
                          src='https://tailwindui.com/img/logos/v1/tuple-logo.svg'
                          alt='Tuple'
                        />
                      </div>
                      <div className='flex justify-center px-1'>
                        <img
                          className='h-9 sm:h-10'
                          src='https://tailwindui.com/img/logos/v1/workcation-logo.svg'
                          alt='Workcation'
                        />
                      </div>
                      <div className='flex justify-center px-1'>
                        <img
                          className='h-9 sm:h-10'
                          src='https://tailwindui.com/img/logos/v1/statickit-logo.svg'
                          alt='StaticKit'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-span-6'>
                <div className='bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'>
                  <div className='px-4 py-8 sm:px-10'>
                    <div>
                      <p className='text-sm font-medium leading-5 text-gray-700'>
                        Sign in with
                      </p>

                      <div className='grid grid-cols-3 gap-3 mt-1'>
                        <div>
                          <span className='inline-flex w-full rounded-md shadow-sm'>
                            <button
                              type='button'
                              className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue'
                              aria-label='Sign in with Facebook'>
                              <svg
                                className='w-5 h-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'>
                                <path
                                  fillRule='evenodd'
                                  d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </button>
                          </span>
                        </div>

                        <div>
                          <span className='inline-flex w-full rounded-md shadow-sm'>
                            <button
                              type='button'
                              className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue'
                              aria-label='Sign in with Twitter'>
                              <svg
                                className='w-5 h-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'>
                                <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                              </svg>
                            </button>
                          </span>
                        </div>

                        <div>
                          <span className='inline-flex w-full rounded-md shadow-sm'>
                            <button
                              type='button'
                              className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue'
                              aria-label='Sign in with GitHub'>
                              <svg
                                className='w-5 h-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'>
                                <path
                                  fillRule='evenodd'
                                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='relative mt-6'>
                      <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                      </div>
                      <div className='relative flex justify-center text-sm leading-5'>
                        <span className='px-2 text-gray-500 bg-white'>Or</span>
                      </div>
                    </div>

                    <div className='mt-6'>
                      <form action='#' method='POST' className='space-y-6'>
                        <div>
                          <label htmlFor='name' className='sr-only'>
                            Full name
                          </label>
                          <div className='rounded-md shadow-sm'>
                            <input
                              id='name'
                              placeholder='Full name'
                              required
                              className='block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor='mobile-or-email' className='sr-only'>
                            Mobile number or email
                          </label>
                          <div className='rounded-md shadow-sm'>
                            <input
                              id='mobile-or-email'
                              placeholder='Mobile number or email'
                              required
                              className='block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor='password' className='sr-only'>
                            Password
                          </label>
                          <div className='rounded-md shadow-sm'>
                            <input
                              id='password'
                              type='password'
                              placeholder='Password'
                              required
                              className='block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                            />
                          </div>
                        </div>

                        <div>
                          <span className='block w-full rounded-md shadow-sm'>
                            <button
                              type='submit'
                              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700'>
                              Create your account
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10'>
                    <p className='text-xs leading-5 text-gray-500'>
                      By signing up, you agree to our{" "}
                      <a
                        href='/'
                        className='font-medium text-gray-900 hover:underline'>
                        Terms
                      </a>
                      ,{" "}
                      <a
                        href='/'
                        className='font-medium text-gray-900 hover:underline'>
                        Data Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href='/'
                        className='font-medium text-gray-900 hover:underline'>
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
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
