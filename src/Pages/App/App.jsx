import { ArrowDownToLine, Star } from "lucide-react";
import { Link } from "react-router";


const App = ({singleapp}) => {
    const {image,downloads,ratingAvg,title,id} =singleapp
    return (
  <Link to ={`/appDetails/${id}`}>
        <div className="card bg-base-100 w-full shadow-sm border hover:shadow-lg transition overflow-hidden duration-300 ">
  <figure className="p-5 bg-gray-100 " >
    <img className="h-28"
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    
    </h2>
    
    <div className="card-actions justify-between">
      <div className="badge bg-green-50 text-[#00D390] flex items-center gap-1 px-3 py-2 "> <span><ArrowDownToLine className="w-4 h-4"></ArrowDownToLine></span> {downloads}</div>
      <div className="badge bg-orange-50 text-[#FF8811] flex items-center gap-1 px-3 py-2"><span ><Star className="w-4 h-4"></Star> </span> {ratingAvg}</div>
    </div>
   
  </div>
  
</div>

  </Link>



    );
};

export default App;