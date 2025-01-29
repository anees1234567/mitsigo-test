import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png"
import logo1 from "../../assets/Logo1.png"


const Header = () => {
  const [open, setOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate__fadeInDown");
  const [bgColor, setBgColor] = useState("bg-black text-white");

  const handleClose = () => {
    setAnimationClass("animate__fadeOutUp");
    setTimeout(() => setOpen(false), 500);
    setTimeout(() => setAnimationClass("animate__fadeInDown"), 500);
  };

  const handleScroll = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("bg-white text-black");
      } else {
        setBgColor("bg-black text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`h-[12vh] w-[100vw] grid grid-cols-12 sticky top-0 z-50 ${bgColor}`}>
      <div className="col-span-12 grid grid-cols-12 relative">
        <div className="col-span-3 sm:col-span-3 lg:col-span-2 flex justify-end items-center">
          <span className="font-bold lg:text-4xl  cursor-pointer" onClick={() => handleScroll("home")}>
          <img width={140} height={100} src={window.scrollY >0 ?logo1 :logo}  alt="Logo" />
          
          </span>
        </div>
        <div className="col-span-7 lg:hidden"></div>
        <div className="col-span-2 flex justify-center items-center lg:hidden">
          <IconButton onClick={() => setOpen(true)}>
            <Menu color="info" />
          </IconButton>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:col-span-10 lg:flex lg:items-center pl-28 lg:text-xl">
          <nav className="space-x-12">
            <a onClick={() => handleScroll("features")} className="cursor-pointer">Features</a>
            <a onClick={() => handleScroll("devices")} className="cursor-pointer">Platforms</a>
            <a onClick={() => handleScroll("testimonials")} className="cursor-pointer">Customers</a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className={`w-full flex flex-col bg-white absolute right-0 top-0 animate__animated ${animationClass}`}>
            <div className="text-black">
              <div className="p-2 h-16 flex justify-end">
                <IconButton onClick={handleClose}>
                  <Close color="info" />
                </IconButton>
              </div>
              <hr className="text-gray-400" />
              <div className="p-2 h-12  font-thin">
                <span onClick={() => { handleScroll("features"); handleClose(); }} className="cursor-pointer">Features</span>
              </div>
              <hr className="text-gray-200" />
              <div className="p-2 h-12  font-thin">
                <span onClick={() => { handleScroll("devices"); handleClose(); }} className="cursor-pointer">Platform</span>
              </div>
              <hr className="text-gray-200" />
              <div className="p-2 h-12  font-thin">
                <span onClick={() => { handleScroll("testimonials"); handleClose(); }} className="cursor-pointer">Customers</span>
              </div>
              <hr className="text-gray-200" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;


