import { useLoaderData, useNavigate } from "react-router";
import Banner from "../../Components/Banner/Banner";
import StatsSection from "../../Components/StatsSection/StatsSection";
import App from "../App/App";



const Home = () => {
    const data =useLoaderData();
    const navigate = useNavigate();
  
    const myData = data.slice(0, 8);
   
    return (
        <div >
      <Banner></Banner>
      <StatsSection></StatsSection>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto mt-8">
        {myData.map(app => (
          <App key={app.id} singleapp={app} />
        ))}
      </div>
                          <div className="text-center mt-6 mb-4">
          <button onClick={() => navigate("/apps")} className="btn btn-primary">Show All</button>
        </div>
        </div>
    );
};

export default Home;