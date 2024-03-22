import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams()
console.log(id, jobs)
  return (
    <div>
      <h3>Hello From Job Details</h3>
    </div>
  );
};

export default JobDetails;