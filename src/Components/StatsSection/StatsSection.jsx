

const StatsSection = () => {
    return (
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center pt-8 pb-12 px-4  ">
            <div className="max-w-400 mx-auto ">
                <h1 className="text-5xl font-semibold">Trusted by Millions, Built for You</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
                 
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-normal opacity-80">Total Downloads</p>
                        <h3 className="text-5xl md:text-6xl font-black my-2">29.6M</h3>
                        <p className="text-sm font-normal opacity-80">21% More Than Last Month</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-sm font-normal opacity-80">Total Reviews</p>
                        <h3 className="text-5xl md:text-6xl font-black my-2">906K</h3>
                        <p className="text-sm font-normal opacity-80">46% More Than Last Month</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-sm font-normal opacity-80">Active Apps</p>
                        <h3 className="text-5xl md:text-6xl font-black my-2">132+</h3>
                        <p className="text-sm font-normal opacity-80">31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>

           
            
   
    );
};

export default StatsSection;