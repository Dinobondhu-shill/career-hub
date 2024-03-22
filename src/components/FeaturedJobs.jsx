import React, { useEffect, useState } from 'react';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4)
  useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])
  return (
    <div className='px-40 '>
       <h2 className='text-5xl font-manrope font-extrabold text-center'>Featured Jobs</h2>
      <p className=' py-5 text-center font-manrope font-medium text-[16px] text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
      {
        jobs.slice(0, dataLength).map(job=>
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        )
      }
      </div>
      <div className='text-center'>
      <div className={dataLength === jobs.length && 'hidden'}> 
      <button
      onClick={()=> setDataLength(jobs.length)}
       className='font-extrabold text-xl px-4 py-2 rounded-xl bg-[#7E90FE] hover:bg-[#7E90FE] w-fit  my-5'>Show All Jobs</button>
      </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;