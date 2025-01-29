const RecognitionSection = () => {
  return (
    <div className="bg-[#1a1c2b] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">

        <div className="space-y-4">
          <div className="text-2xl sm:text-3xl font-bold">IDC</div>
          <p className="text-lg sm:text-xl text-gray-300">
            Hexnode is listed as a leader and a major player in IDC MarketScape
            UEM Vendors Assessment Reports 2024.
          </p>
        </div>

    
        <div className="space-y-4 border-t md:border-t-0 md:border-l md:border-r border-gray-600 px-6 md:px-8">
          <div className="text-2xl sm:text-3xl font-bold">Gartner</div>
          <p className="text-lg sm:text-xl text-gray-300">
            Hexnode was recognized in the 2023 Gartner® Market Guide for
            Unified Endpoint Management Tools.
          </p>
        </div>

    
        <div className="space-y-4">
          <div className="text-2xl sm:text-3xl font-bold">Forrester</div>
          <p className="text-lg sm:text-xl text-gray-300">
            Forrester includes Hexnode as a Notable vendor in The Unified
            Endpoint Management Landscape, Q3 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecognitionSection;
