const Footer = () => {
    return (
      <>
        {/* Main Footer Section */}
        <div className="h-auto md:h-[320px] flex flex-col justify-center items-center gap-3 px-4 py-6 bg-gray-800">
          <span className="text-2xl md:text-4xl lg:text-5xl text-white font-sans font-bold text-center">
            Get Hexnode UEM and start securing
          </span>
          <span className="text-2xl md:text-4xl lg:text-5xl text-white font-sans font-bold text-center">
            Your Endpoints
          </span>
          <button className="bg-red-500 w-full max-w-xs md:w-[18rem] h-12 md:h-16 mt-5 text-white text-lg md:text-2xl font-sans font-medium shadow-2xl rounded-2xl hover:bg-red-600 transition duration-300">
            Try Hexnode For Free
          </button>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="h-auto md:h-[100px] bg-white text-gray-600 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 py-4 md:px-12">
          <p className="text-sm md:text-base cursor-pointer text-center md:text-left">
            Terms of Use • Privacy • Cookies
          </p>
          <p className="text-sm md:text-base text-center md:text-right mt-2 md:mt-0">
            Copyright © 2024 Mitsogo Inc. All Rights Reserved.
          </p>
        </div>
      </>
    );
  };
  
  export default Footer;
  