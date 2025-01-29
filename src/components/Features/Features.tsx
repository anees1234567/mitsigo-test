const Features = () => {
    const features = [
      {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fzero-touch.jpg&w=828&q=100",
        title: "Zero-touch Enrollment",
        description:
          "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
      },
      {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fautomation.jpg&w=828&q=100",
        title: "Automation",
        description:
          "Streamline processes with automation to improve efficiency and reduce manual effort.",
      },
      {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fremote-access.jpg&w=828&q=100",
        title: "Remote Access",
        description:
          "Manage and troubleshoot devices remotely with ease and efficiency.",
      },
      {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fautomation.jpg&w=828&q=100",
        title: "Automation",
        description:
          "Streamline processes with automation to improve efficiency and reduce manual effort.",
      },
      {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fremote-access.jpg&w=828&q=100",
        title: "Remote Access",
        description:
          "Manage and troubleshoot devices remotely with ease and efficiency.",
      },
      {
        img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fautomation.jpg&w=828&q=100",
        title: "Automation",
        description:
          "Streamline processes with automation to improve efficiency and reduce manual effort.",
      }
    ];
  
    return (
      <div className="flex flex-col items-center bg-white p-6">
            <div className="text-center">
                <p className="font-normal text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                    Powerful endpoint management, built for
                </p>
                <p className="font-normal text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                    the Device you choose
                </p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-6 mt-8 p-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="  col-span-3 flex flex-col items-center bg-gray-100 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <img
              height={340}
              width={480}
                src={feature.img}
                alt={feature.title}
                className=" rounded-t-2xl shadow-xs"
              />
              <h3 className="mt-4 text-3xl font-semibold text-gray-800 ">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-center text-2xl ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Features;
  