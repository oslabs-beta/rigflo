import React from "react";

const Features = (props) => (
  <div className='py-12 bg-white'>
    <div className='max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8'>
      <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
        <div>
          <div className='flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md'>
            {/* Heroicon name: globe-alt */}
            <svg
              className='w-6 h-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
              />
            </svg>
          </div>
          <div className='mt-5'>
            <h5 className='text-lg font-medium leading-6 text-gray-900'>
              Competitive exchange rates
            </h5>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <div className='flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md'>
            {/* Heroicon name: scale */}
            <svg
              className='w-6 h-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
              />
            </svg>
          </div>
          <div className='mt-5'>
            <h5 className='text-lg font-medium leading-6 text-gray-900'>
              No hidden fees
            </h5>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <div className='flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md'>
            {/* Heroicon name: lightning-bolt */}
            <svg
              className='w-6 h-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              />
            </svg>
          </div>
          <div className='mt-5'>
            <h5 className='text-lg font-medium leading-6 text-gray-900'>
              Transfers are instant
            </h5>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
