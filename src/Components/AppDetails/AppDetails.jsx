import {  useParams } from "react-router";


const AppDetails = () => {
    const {id} =useParams();

 console.log(id)
    return (
        <div>
            <h2>App Details</h2>
            
        </div>
    );
};

export default AppDetails;