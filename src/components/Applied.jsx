import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from './saveApply';
import AppliedJob from './AppliedJob';

const Applied = () => {
const [appliedJob, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();
useEffect(()=>{
 const storeJobId = getStoredApplication()
  if(jobs.length> 0){

    const appliedJobs =[];

    for(const id of storeJobId){
      const job = jobs.find(job => job.id == id)
      if(job){
        appliedJobs.push(job)
      }
    }
    setAppliedJobs(appliedJobs);
  }
  
}
,[jobs])
  return (
    <>
    <div className="font-manrope font-extrabold text-4xl pt-20 text-center bg-[#F9F9F9]">
    <h3>Applied Jobs</h3>
    <img src={"/bg1.png"} alt="" />
    <img src={"/bg2.png"} alt="" className="absolute top-0 right-0" />
  </div>
    <div className='text-center px-44 my-20'>
      <ul className='space-y-5'>
        {
          appliedJob.map(job => <AppliedJob key={job.id} job ={job}>
          </AppliedJob>)
        }
      </ul>
    </div>
    </>
  );
};

export default Applied;