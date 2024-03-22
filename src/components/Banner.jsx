import React from 'react';
import photo from '../assets/images/user.png'
const Banner = () => {
  return (
    <div className='flex justify-between items-center pt-9'>
      <div className='space-y-4'>
        <h1 className='font-manrope text-6xl font-extrabold leading-tight'>One Step <br />Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
        <p className='max-w-lg font-manrope font-medium text-[18px] text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className='text-white font-manrope font-extrabold text-xl px-5 py-3 rounded-2xl bg-[#7E90FE] hover:bg-[#7E90FE]'>Get Start</button>
        </div>
      <div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Banner;