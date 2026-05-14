import { Link } from "react-router";

const ErrorPage = () => {
  return (
  
    <div className="min-h-screen flex items-center justify-center bg-lime-600 px-4">
      
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-sm w-full">
  
        <h1 className="text-7xl font-bold text-gray-200 mb-2">404</h1>

        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>

     
        <p className="text-gray-500 mb-6 text-sm">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go Home
        </Link>

      </div>
      
    </div>
  );
};

export default ErrorPage;