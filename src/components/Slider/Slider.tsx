
import { motion } from "framer-motion";

const logos = [
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/group1-automotive.png",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg"
];

const Slider = () => {
  return (
    <div  className="grid grid-cols-12 bg-white">
        <div className="col-span-1"></div>
        <div className=" col-span-10 overflow-hidden   py-6">
          <motion.div
            className="flex space-x-12 shadow-2xs"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatDelay:1,
              duration: 50,
              ease: "linear",
              
            }}
          >
           
            {[...logos, ...logos,...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company Logo"
                className="h-16 object-contain"
              />
            ))}
          </motion.div>
        
        </div>
        <div className="col-span-1"></div>
    </div >
  );
};

export default Slider;
