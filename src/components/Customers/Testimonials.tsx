import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Testimonials = () => {
  const Reviews = [
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=3840&q=80",
      Review: "Most Complete MDM solution I found and I tested many of them",
      Name: "Daliber Kujilac",
      company: "Kameyelay LTD",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=3840&q=80",
      Review: "Most Complete MDM solution I found and I tested many of them",
      Name: "Justin Modrak",
      company: "Technology Coordinator",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=3840&q=80",
      Review: "It seems to be in line with everything we are looking at",
      Name: "Chris Robinson",
      company: "Executive Account Manager, NCS",
    },
  ];

  const [index, setIndex] = useState<number>(0);

  return (
    <div className="bg-white px-4 py-10 md:py-16 w-full flex flex-col items-center">
      <h2 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8">
        What Our Customers Say
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-5xl">
        <IconButton
          onClick={() => setIndex((prev) => (prev === 0 ? Reviews.length - 1 : prev - 1))}
          className="hidden md:block"
        >
          <ArrowBack fontSize="large" />
        </IconButton>

        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg p-6 shadow-lg">
          <img
            src={Reviews[index]?.img}
            alt="Reviewer"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
          />

          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl font-semibold italic">"{Reviews[index]?.Review}"</p>
            <p className="mt-4 text-lg font-bold">{Reviews[index]?.Name}</p>
            <p className="text-sm md:text-base text-gray-600">{Reviews[index]?.company}</p>
          </div>
        </div>

        <IconButton
          onClick={() => setIndex((prev) => (prev === Reviews.length - 1 ? 0 : prev + 1))}
          className="hidden md:block"
        >
          <ArrowForward fontSize="large" />
        </IconButton>
      </div>

      {/* <div className="flex justify-center mt-6 md:hidden">
        <IconButton
          onClick={() => setIndex((prev) => (prev === 0 ? Reviews.length - 1 : prev - 1))}
        >
          <ArrowBack fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => setIndex((prev) => (prev === Reviews.length - 1 ? 0 : prev + 1))}
        >
          <ArrowForward fontSize="large" />
        </IconButton>
      </div> */}
    </div>
  );
};

export default Testimonials;
