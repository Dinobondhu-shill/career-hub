import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from './saveApply';

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
,)
  return (
    <div className='text-center'>
      <h3>Total Applied jOb: {appliedJob.length
      }</h3>
      <ul className='space-y-5'>
        {
          appliedJob.map(job => <li key={job.id}>
            <span>{job.job_title}</span>
          </li>)
        }
      </ul>
    </div>
  );
};

export default Applied;