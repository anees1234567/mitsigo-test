const Home = () => {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 pt-10">
        {/* Text Section */}
        <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-center text-center md:text-left px-6 sm:px-10 md:px-12 py-8">
          <span className="text-3xl sm:text-4xl  lg:text-6xl font-bold text-white leading-tight">
            The Standard for Unified <br />
            Endpoint Management
          </span>
          <span className="text-lg sm:text-xl md:text-2xl text-gray-300 font-sans mt-4">
            Manage devices of varying form factors and operating systems
            <br />
            with one solution
          </span>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center ">
            <button className="bg-red-500 hover:bg-red-700 w-full sm:w-auto text-white font-bold py-3 px-8 rounded-lg text-lg sm:text-base transition-all duration-200">
              TRY FOR FREE
            </button>
            <button className="border-2 border-amber-50 text-white font-bold py-3 px-8 rounded-lg text-lg sm:text-base mt-4 sm:mt-0 sm:ml-4 transition-all duration-200">
              REQUEST DEMO
            </button>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="col-span-1 md:col-span-6 flex justify-center items-center mt-6 md:mt-0 px-6 sm:px-10">
          <img
            src="https://static.hexnode.com/img/home_page/images/2x/featured/v2/device-management-automated.jpg"
            alt="Device Management"
            className="w-full max-w-[500px] md:max-w-[650px] lg:max-w-[750px] h-auto"
          />
        </div>
      </div>
    );
  };
  
  export default Home;
  