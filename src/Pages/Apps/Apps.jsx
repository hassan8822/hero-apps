import { useState } from "react";
import App from "../App/App";
import { useLoaderData } from "react-router";


const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredData = data.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto py-6">

      
      <div className="text-center p-6">
        <h2 className="text-5xl font-bold">Trending Apps</h2>
        <p className="opacity-80 mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl">
          Total Apps: {filteredData.length}
        </h2>

        <input
          type="text"
          placeholder="Search apps..."
          className="input input-bordered"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    
      {filteredData.length === 0 ? (
        <p className="text-center text-red-500 text-xl">
          No App Found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredData.map(app => (
            <App key={app.id} singleapp={app} />
          ))}
        </div>
      )}

    </div>
  );
};

export default Apps;