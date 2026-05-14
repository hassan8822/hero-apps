import { toast } from "react-toastify";

const getStoredApps = () => {
    const storedApps = localStorage.getItem('apps');
    if(storedApps){
        const storedAppsData = JSON.parse(storedApps);
        return storedAppsData;
    }
    else{
          return [];

    }
  
};

const addToApps = (id) => {
    const storedAppsData = getStoredApps();

    if(storedAppsData.includes(id)){
        
       toast.error('Already Installed!', {
    position: "top-center",
});
        
    }
    else{
        storedAppsData.push(id);
        localStorage.setItem('apps', JSON.stringify(storedAppsData));
        toast.success('Installed Successfully!', {
    position: "top-center",
    autoClose: 2000,
    theme: "colored",
});
    }


};
 const removeFromApps = (id) => {
        const storedAppsData = getStoredApps();
        const updatedAppsData = storedAppsData.filter(appId => appId !== id);
        localStorage.setItem('apps', JSON.stringify(updatedAppsData));
        toast.info('App Removed!', {
    position: "top-center",
    autoClose: 2000,
    theme: "colored",
});
    

}
export {addToApps, getStoredApps, removeFromApps};