import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const JobDetails = () => {
const {id} = useParams()
const idInt = parseInt(id)
const [jobs, setJob] = useState([])

useEffect(()=> {
fetch("/jobs.json")
.then(res => res.json())
.then(data=>{
const selectedJob = data.find(job=> job.id === idInt)
setJob(selectedJob)
})
}
,[idInt])

return (
<div>
  <div className="font-manrope font-extrabold text-4xl pt-24 text-center bg-[#F9F9F9]">
    <h3>Hello From Job Details</h3>
    <img src={"/bg1.png"} alt="" />
    <img src={"/bg2.png"} alt="" className="absolute top-0 right-0" />
  </div>
  <div className="px-44 py-28 bg-white flex justify-between items-center">
    <div className="font-manrope space-y-5 w-2/3 mr-6">
      <p className="font-medium text-[#1A1919]"><span className="font-extrabold text-[16px] text-black">Job
          Description:</span> {jobs.job_description}</p>
      <p className="font-medium text-[#1A1919]"><span className="font-extrabold text-[16px] text-black">Job
          Responsibility:</span>{jobs.job_responsibility}</p>
      <p className="font-medium text-[#1A1919]"><span className="font-extrabold text-[16px] text-black">Educational
          Requirements:</span> <br /> {jobs.educational_requirements}</p>
      <p className="font-medium text-[#1A1919]"><span
          className="font-extrabold text-[16px] text-black">Experiences:</span> <br /> {jobs.experiences}</p>
    </div>
    <div className="p-7 bg-[#a0a8db] w-1/3 rounded-lg">
      <h2 className="font-extrabold text-[16px] text-black mb-6 ">Job Details</h2>
      <hr />
      <h2 className="font-extrabold text-[16px] text-black mt-5 mb-3">Salary: <span>{jobs.salary}</span></h2>
      <h2 className="font-extrabold text-[16px] text-black mb-3">Job Title: <span>{jobs.job_title}</span></h2>
      <h2 className="font-extrabold text-[16px] text-black mb-6">Contact Information:</h2>
      <hr />
      {jobs.contact_information && (
      <>
        <p className="font-medium text-[#1A1919]"><span className="font-extrabold text-[16px] text-black mt-4">Phone:</span>
          {jobs.contact_information.phone}</p>
        <p className="font-medium text-[#1A1919]"><span className="font-extrabold text-[16px] text-black">Email:</span>
          {jobs.contact_information.email}</p>
        <p className="font-medium text-[#1A1919]"><span
            className="font-extrabold text-[16px] text-black">Address:</span> {jobs.contact_information.address}</p>
      </>
      )}
    </div>
  </div>
</div>
);
};

export default JobDetails;