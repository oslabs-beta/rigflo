import React from "react";

const Team = (props) => {
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl px-4 py-12 mx-auto text-center sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
            <h2 className='text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl'>
              Meet our team
            </h2>
          </div>
          <ul className='mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl'>
            <li>
              <div className='space-y-6'>
                <img
                  className='w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56'
                  src='https://ca.slack-edge.com/T016VMCKF7Y-U0185R5UJA1-34ec57058e50-512'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h4>Akosua Kernizan</h4>
                    <p className='text-indigo-600'>Software Engineer</p>
                  </div>
                  <ul className='flex justify-center space-x-5'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/akosuakernizan/'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>LinkedIn</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                    {/* <li> */}
                    {/* <a
                        href='https://github.com/akernizan'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a> */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56'
                  src='https://ca.slack-edge.com/T016VMCKF7Y-U01A6FGPASV-9b33b8ce1b4f-512'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h4>Sam Carlile</h4>
                    <p className='text-indigo-600'>Software Engineer</p>
                  </div>
                  <ul className='flex justify-center space-x-5'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/samkcarlile/'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>LinkedIn</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                    {/* <li> */}
                    {/* <a
                        href='https://github.com/samkcarlile'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a> */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56'
                  src='https://ca.slack-edge.com/T016VMCKF7Y-U019SHCMXLG-09f2fcc40a89-512'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h4>Garrett James</h4>
                    <p className='text-indigo-600'>Software Engineer</p>
                  </div>
                  <ul className='flex justify-center space-x-5'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/garrett-lamar-james/'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>LinkedIn</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                    {/* <li> */}
                    {/* <a
                        href='https://github.com/gjames5355'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a> */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56'
                  src='../../assests/james.jpeg'
                  alt=''
                />
                <div className='space-y-2'>
                  <div className='space-y-1 text-lg font-medium leading-6'>
                    <h4>James Scaggs</h4>
                    <p className='text-indigo-600'>Software Engineer</p>
                  </div>
                  <ul className='flex justify-center space-x-5'>
                    <li>
                      <a
                        href='https://www.linkedin.com/in/jamesscaggs/'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>LinkedIn</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                    {/* <li> */}
                    {/* <a
                        href='https://github.com/akernizan'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'>
                          <path
                            fillRule='evenodd'
                            d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a> */}
                    {/* </li> */}
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
