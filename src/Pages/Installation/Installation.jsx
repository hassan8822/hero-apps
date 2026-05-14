import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps, removeFromApps } from "../../utility/addToApps";
import { Download, Star } from "lucide-react";



const Installation = () => {
    const ourAppsData =useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);

      const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const storedApps = getStoredApps();
        const ConvertedStoredApps = storedApps.map(id => parseInt(id));
        const installedAppsData = ourAppsData.filter(app => ConvertedStoredApps.includes(app.id));
        setInstalledApps(installedAppsData);
    }, [ourAppsData]);

    const handleUninstall = (id) => {
        removeFromApps(id);
        const updatedInstalledApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(updatedInstalledApps);
    };

    const [sort, setSort] = useState("");

    const handleSort = (sortType) => {
        setSort(sortType);
        if(sortType === "A-Z"){
            const sortedApps = [...installedApps].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            setInstalledApps(sortedApps);
        }
            
         
            
        if(sortType === "Z-A"){
    const sortedApps = [...installedApps].sort((a, b) =>
       b.title.localeCompare(a.title)
    );

    setInstalledApps(sortedApps);
        }};

        const filteredApps = installedApps.filter(app =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
    );

      


    return (
        <div className="bg-gray-200 min-h-screen py-10">
            <div className="text-center">
                 <h2 className="font-bold  text-5xl">Your Installed Apps</h2>
            <p className="text-gray-600 mt-4">Explore All Trending Apps on the Market developed by us</p>
            

            </div>

            <div className="flex items-center justify-between mt-8 w-11/12 mx-auto">
                <h2 className="text-xl font-semibold">{installedApps.length} Apps Installed</h2>
                <details className="dropdown">
          <summary className="btn m-1">Sort By Size : {sort ? sort:"None"}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a onClick={() => handleSort("A-Z")}>A-Z</a></li>
             <li><a onClick={() => handleSort("Z-A")}>Z-A</a></li>
              </ul>
            </details>
            </div>

              <div className="w-1/6 mx-auto  mt-4">

                <input
                    type="text"
                    placeholder="Search Apps..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input input-bordered w-full"
                />
              
            </div>
               <div className="flex flex-col mt-4 gap-6">

                {
                    filteredApps.map(app => (

                     <div
                        key={app.id}
                         className="bg-white rounded-xl shadow-md p-4  w-11/12 mx-auto"
>
                  <div className="flex items-center justify-between">

    
               <div className="flex items-center gap-4">

            <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 object-cover rounded-xl bg-gray-200"
            />

            <div>
                <h3 className="text-xl font-bold text-slate-800">
                    {app.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">

                    <span className="flex items-center gap-1">
                        <Download
                            size={16}
                            className="text-emerald-500"
                        />
                        {app.downloads || "9M"}
                    </span>

                    <span className="flex items-center gap-1">
                        <Star
                            size={16}
                            className="text-orange-400 fill-orange-400"
                        />
                        {app.rating || "5"}
                    </span>

                    <span>{app.size || "258 MB"}</span>
                </div>
            </div>
        </div>

      
        <button
            onClick={() => handleUninstall(app.id)}
            className="px-6 py-2 bg-[#00d084] hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all"
        >
            Uninstall
        </button>

    </div>
</div>
                
    
                    ))
                }
               </div>
        </div>
        
    
      
    );
}

export default Installation;