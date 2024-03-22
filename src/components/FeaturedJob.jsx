import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {
  const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
  return (
    <div className='font-manrope border-2 rounded-xl p-10'>
      <img src={logo} alt="" />
      <h2 className=' font-extrabold text-2xl mt-8 mb-2'>{job_title}</h2>
      <p className='mb-4 font-semibold text-xl text-[#757575]'>{company_name}</p>
      <div className='flex text-[#7E90FE] gap-5 mb-4'>
        <span className='border-[1px] border-[#757575] px-3 font-extrabold  text-[16px] py-2 rounded-lg'>{remote_or_onsite}</span>
        <span className='border-[1px] border-[#757575] px-3 font-extrabold  text-[16px] py-2 rounded-lg'>{job_type}</span>
      </div>
      <div className='flex gap-5 mb-6 text-[#757575] font-extrabold text-[18px]'>
        <span >{location}</span>
        <span>{salary}</span>
      </div>
    <Link to={`/job/${id}`}>
    <button className='font-extrabold text-xl px-4 py-2 rounded-xl bg-[#7E90FE] hover:bg-[#7E90FE]'>View Details</button>
    </Link>
      
    </div>
  );
};
FeaturedJob.propTypes = {
  job:PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
  job_title: PropTypes.string,
  company_name: PropTypes.string,
  remote_or_onsite: PropTypes.string,
  location: PropTypes.string,
  job_type: PropTypes.string,
  salary: PropTypes.string,
};

export default FeaturedJob;