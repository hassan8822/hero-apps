

const Banner = () => {
    return (
        <div className="bg-gray-100  flex flex-col items-center  pt-16 ">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-3xl text-center">We Build <br/> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">Productive</span>   Apps   </h1>

         
                <p  className="text-[#627382] font-normal mt-2 max-w-xl mx-auto px-4">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                  <div className="mt-8 flex gap-4 ">
                    <a href="https://play.google.com/store/games?" target="- blank" rel="noopener noreferrer">

                   <button className="btn h-12   "> <img src="/src/assets/icons8-google-play-48.png" alt="Google Play" />
                    Google Play </button>
                    </a>

                    <a href="https://apps.apple.com" target="- blank">

                 
                   <button className="btn h-12   "> <img src="/src/assets/icons8-app-store-48.png" alt="App Store" />
                    App Store </button>
                    </a>
      
            </div>
            <div>
              <div className="hero  mt-4 -mb-4">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="/src/assets/hero.png"
      className="max-w-sm "
    />
   
  </div>
 
</div>
            </div>
          
            </div>         
        </div>
       
    );
};

export default Banner;