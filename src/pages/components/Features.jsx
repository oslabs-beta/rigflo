import React from "react";

const Features = (props) => (
  <div className='py-12 bg-white'>
    <div className='max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8'>
      <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
        <div>
          <div className='flex items-center justify-center w-12 h-12 text-white rounded-md'>
            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyMyIgeT0iMjMiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgcng9IjIiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMxQTE5MkIiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIyMyIgeT0iMyIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iI0ZGMDA3MiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjMiIHk9IjIzIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjMUExOTJCIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzFBMTkyQiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjE3IiBjeT0iMTAiIHI9IjMiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjIzIiBjeT0iMTAiIHI9IjMiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMTciIHI9IjMiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMjMiIHI9IjMiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjE3IiBjeT0iMzAiIHI9IjMiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjIzIiBjeT0iMzAiIHI9IjMiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMjMiIHI9IjIiIGZpbGw9IiMxQTE5MkIiLz4KPGNpcmNsZSBjeD0iMTciIGN5PSIzMCIgcj0iMiIgZmlsbD0iIzFBMTkyQiIvPgo8Y2lyY2xlIGN4PSIyMyIgY3k9IjMwIiByPSIyIiBmaWxsPSIjMUExOTJCIi8+CjxyZWN0IG9wYWNpdHk9IjAuMzUiIHg9IjE4IiB5PSI5LjUiIHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9IiMxQTE5MkIiLz4KPHJlY3Qgb3BhY2l0eT0iMC4zNSIgeD0iMjkuNSIgeT0iMjEuNSIgd2lkdGg9IjQiIGhlaWdodD0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDI5LjUgMjEuNSkiIGZpbGw9IiMxQTE5MkIiLz4KPHJlY3Qgb3BhY2l0eT0iMC4zNSIgeD0iMTgiIHk9IjI5LjUiIHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9IiMxQTE5MkIiLz4KPGNpcmNsZSBjeD0iMTciIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzFBMTkyQiIvPgo8Y2lyY2xlIGN4PSIyMyIgY3k9IjEwIiByPSIyIiBmaWxsPSIjRkYwMDcyIi8+CjxjaXJjbGUgY3g9IjMwIiBjeT0iMTciIHI9IjIiIGZpbGw9IiNGRjAwNzIiLz4KPC9zdmc+Cg==' />
          </div>
          <div className='mt-5'>
            <h5 className='text-lg font-medium leading-6 text-gray-900'>
              React Flow
            </h5>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              Highly customizable React.js library for bulding node-based
              editors and diagrams.
            </p>
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <div className='flex items-center justify-center w-12 h-12 text-white rounded-md'>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' />
          </div>
          <div className='mt-5'>
            <h5 className='text-lg font-medium leading-6 text-gray-900'>
              React
            </h5>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              A JavaScript library for building user interfaces
            </p>
          </div>
        </div>
        <div className='mt-10 lg:mt-0'>
          <div className='flex items-center justify-center w-12 h-12 text-white rounded-md'>
            <svg
              id='toc-logo'
              height='38px'
              viewBox='0 0 640 512'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M635.92,462.7 L347.92,14.7 C342.03,5.54 331.89,0 321,0 C310.11,0 299.97,5.54 294.08,14.7 L6.08,462.7 C-0.250773249,472.547007 -0.699487627,485.064987 4.91,495.34 C10.522069,505.612419 21.2945349,512 33,512 L609,512 C620.71,512 631.48,505.61 637.09,495.33 C642.699457,485.058495 642.250708,472.543372 635.92,462.7 Z M321,91.18 L406.39,224 L321,224 L257,288 L218.94,249.94 L321,91.18 Z'
                id='Shape'
              />
            </svg>
          </div>
          <div className='mt-5'>
            <h5 className='text-lg font-medium leading-6 text-gray-900'>
              Snowpack
            </h5>
            <p className='mt-2 text-base leading-6 text-gray-500'>
              Snowpack is a modern frontend build tool for faster web
              development. It replaces heavier, more complex bundlers like
              webpack or Parcel in your development workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
