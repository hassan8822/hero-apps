import { Download, Star, ThumbsUp } from "lucide-react";
import { useState } from "react";
import {   useLoaderData, useNavigate, useParams } from "react-router";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { addToApps } from "../../utility/addToApps";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)





const AppDetails = () => {
    const {id} =useParams();
    const data =useLoaderData();
    const singleApp = data.find(app => app.id === parseInt(id));
    const [installed, setInstalled]= useState(false);

    const navigate =useNavigate();

    const handleInstall = (id) => {
        setInstalled(true);
        MySwal.fire({
  title: "Good job!",
  text: "You Apps installed successfully !",
  icon: "success",
   confirmButtonColor: "#00D390",
  confirmButtonText: "Nice!",
  background: "#ffffff",
  color: "#111827",
});
        addToApps(id);
        navigate('/installation');
    }



    const {image,title,description,downloads,ratingAvg,reviews,ratings} = singleApp || {};


    return (
        <div className="w-11/12 mx-auto px-4 py-10 bg-gray-50" >
            <div className=" pb-8">
                <div className="flex flex-col md:flex-row gap-8">

            

           
            <div className="w-48 -border p-8 bg-white shadow"><img src={image} alt={title} className="w-full h-full object-contain" />
            </div>

            <div className="flex-1">
                
                <h2 className="text-3xl font font-bold">{title}</h2>
                    <div className=" shadow mb-5"></div>
                  <div className="flex w-full flex-col">
  <div className="divider"></div>
  </div>
                    
            <div className="flex flex-wrap gap-12   pt-6">
              <div className="text-center md:text-left">
                            <Download className="text-green-600 mb-1" size={24} />
                            <p className="text-xs text-gray-500  font-bold tracking-wider">Downloads</p>
                            <p className="text-2xl font-black">{downloads}</p>
                        </div>
                <div className="text-center md:text-left  pl-12">
                            <Star className="text-orange-500 mb-1" size={24} />
                            <p className="text-xs text-gray-500  font-bold tracking-wider">Average Rating</p>
                            <p className="text-2xl font-black">{ratingAvg}</p>
                        </div>
                <div className="text-center md:text-left  pl-12">
                            <ThumbsUp className="text-purple-600 mb-1" size={24} />
                            <p className="text-xs text-gray-500  font-bold tracking-wider">Total Reviews</p>
                            <p className="text-2xl font-black">{reviews}</p>
                        </div>
                        </div>
                        <button  onClick={() => handleInstall(id)}
                        disabled={installed}
                        className={`mt-4 px-14 py-2 rounded text-white font-semibold transition duration-300
                        ${installed  ?"bg-[#00D390] cursor-not-allowed":"bg-[#00D390] hover:bg-[#00D390]"  }`}
                        >
                {installed ? "Installed" : "Install Now (290 MB)"}
                  
            </button>
          
            </div>
    
           
            </div>
           <div className="flex w-full flex-col">
            <div className="divider"></div>
            </div>

            <div className="mt-14 bg-white p-6 rounded-2xl shadow-md">
                  <h2 className="text-2xl font-bold mb-6">
                   Ratings
        </h2>

         <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={[...ratings].reverse()}
      layout="vertical"
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis type="category" dataKey="name" />
      <XAxis type="count"/>
      
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#FF8811"  radius={[10, 10, 0, 0]} />
     
     
    </BarChart>
       
            </div>
             <div className="flex w-full flex-col">
            <div className="divider"></div>
            </div>
            <div>
                <h2 className="font-semibold text-3xl">Description</h2>
                <p>{description}</p>

            </div>
              
          
              
             

          
       
            </div>
            
            
        
           
           
           
          
        </div>
    );
};

export default AppDetails;