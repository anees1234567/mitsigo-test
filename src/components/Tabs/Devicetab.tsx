import { useState } from "react";

const tabs = [
  {
    name: "Android",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fandroid.jpg&w=1200&q=90",
    content:
      "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
  },
  {
    name: "iOS",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FiOS.jpg&w=1200&q=90",
    content:
      "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
  },
  {
    name: "macOS",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FmacOS.jpg&w=1200&q=90",
    content:
      "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
  },
  {
    name: "Windows",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fwindows.jpg&w=1200&q=90",
    content:
      "Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.",
  },
  {
    name: "tvOS",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FtvOS.jpg&w=1200&q=90",
    content:
      "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
  },
  {
    name: "FireOS",
    image:
      "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FfireOS.jpg&w=1200&q=90",
    content:
      "Enroll Amazon Fire tablets, phones, and e-readers in Hexnode UEM to manage them all from a single console.",
  },
];

const TabInterface = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <div className="bg-[#f7f7f7]  pb-20">
   
      <div className="px-4 py-8 text-center">
        <h1 className="text-3xl md:text-5xl font-sans font-bold">
          Multi-platform Endpoint Management
        </h1>
        <p className="text-lg md:text-2xl font-sans mt-4">
          Devices of varying platforms? Hexnode thrives in a diverse environment.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-6 px-4 lg:px-12">

        <div className="hidden lg:block lg:w-1/3">
          <img
            src={activeTab !== null ? tabs[activeTab].image : tabs[0].image} 
            alt="Tab Image"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        <div className="lg:w-2/3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`border-b p-4 mb-4 transition-all duration-300  ${
                activeTab === index
                  ? "bg-white rounded-2xl border-0 shadow-2xl "
                  : "hover:bg-gray-300 cursor-pointer" 
              }`}
              onClick={() => setActiveTab(activeTab === index ? null : index)}
            >

              <h3 className="text-2xl md:text-3xl font-sans font-semibold">
                {tab.name}
              </h3>


              {activeTab === index && (
                <div className="mt-4 space-y-4 cursor-default">

                  <div className="lg:hidden">
                    <img
                      src={tab.image}
                      alt="Tab Image"
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>

                  <p className="text-lg md:text-xl text-gray-600">{tab.content}</p>
                  <h3 className="text-red-500 font-semibold text-lg md:text-2xl">
                    Try Hexnode on your Endpoint
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabInterface;
