import React from "react";
import { Github } from "react-icons/fa";

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
                    <li>
                      <a
                        href='https://github.com/akernizan'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
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
                    <li>
                      <a
                        href='https://github.com/samkcarlile'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
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
                    <li>
                      <a
                        href='https://github.com/gjames5355'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className='space-y-6'>
                <img
                  className='w-40 h-40 mx-auto rounded-full xl:w-56 xl:h-56'
                  src='https://media-exp1.licdn.com/dms/image/C4E03AQEaeRHpIjqezw/profile-displayphoto-shrink_800_800/0?e=1610582400&v=beta&t=ECaZfMk9reDeLxgOYII0Cd0HpwHhRNhSMVjtzWtEN04'
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
                    <li>
                      <a
                        href='https://github.com/jamesscaggs'
                        className='text-gray-400 transition duration-150 ease-in-out hover:text-gray-500'>
                        <span className='sr-only'>Github</span>
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            fillRule='evenodd'
                            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </li>
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
