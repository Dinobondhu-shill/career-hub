import Banner from "./Banner";
import Categorylist from "./Categorylist";
import FeaturedJobs from "./FeaturedJobs";


const Home = () => {
  return (
    <div className=" space-y-24">
      <Banner></Banner>
      <Categorylist></Categorylist>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;