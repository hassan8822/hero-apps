
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Roots from "../Components/Roots/Roots";
import Home from "../Pages/Home/Home";


import AppDetails from "../Components/AppDetails/AppDetails";


import Installation from "../Pages/Installation/Installation";
import Apps from "../Pages/Apps/Apps";
import About from "../Components/About/About";




 export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    Component:Roots,
    children: [
      {
        index:true,
       loader:() => fetch('/AppsData.json'),
        Component:Home,
      },
     
      {
        path:"/apps",
         loader:() => fetch('/AppsData.json'),
        Component:Apps,

      },
      {
        path:"/about",
        Component:About,

      },
     
      {
        path:"/installation",
           loader:() => fetch('/AppsData.json'),
        Component:Installation,
        
      },
      
      
      {
        path:"/appDetails/:id",
        loader:() => fetch('/AppsData.json'),
        Component:AppDetails,
      }
  
    
    ]
   
  
  },
]);