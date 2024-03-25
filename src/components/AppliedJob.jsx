import { Link } from "react-router-dom";


const AppliedJob = ({job}) => {
 const {id, logo, job_title, remote_or_onsite, job_type, salary, location, company_name} = job
  return (
    <div className="border-2 rounded-lg p-6 flex justify-between items-center">
      <div className="flex gap-10">
      <div  className="w-52 h-52 flex items-center justify-center bg-[#F4F4F4] rounded-lg">
        <img src={logo} alt="" />
      </div>
      <div>
      <h2 className=' font-extrabold text-2xl text-start mt-8 mb-2'>{job_title}</h2>
      <p className='mb-4 font-semibold text-xl text-start text-[#757575]'>{company_name}</p>
      <div className='flex text-[#7E90FE] gap-5 mb-4'>
        <span className='border-[1px] border-[#757575] px-3 font-extrabold  text-[16px] py-2 rounded-lg'>{remote_or_onsite}</span>
        <span className='border-[1px] border-[#757575] px-3 font-extrabold  text-[16px] py-2 rounded-lg'>{job_type}</span>
      </div>
      <div className='flex gap-5 mb-6 text-[#757575] font-extrabold text-[18px]'>
        <span >{location}</span>
        <span>{salary}</span>
      </div>
      </div>
      </div>
      <Link to={`/job/${id}`}>
    <button className='font-extrabold text-xl px-4 py-2 rounded-xl bg-[#7E90FE] hover:bg-[#7E90FE]'>View Details</button>
    </Link>
    
    </div>
  );
};

export default AppliedJob;