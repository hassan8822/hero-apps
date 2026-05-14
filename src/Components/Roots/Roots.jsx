import { Outlet, useNavigation } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Roots = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
                {navigation.state === "loading" && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm z-50">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Roots;