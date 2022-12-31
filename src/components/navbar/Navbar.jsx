import { useEffect, useState } from "react";

import NavbarLink from "../../utils/NavbarLink";

const Navbar = () => {
  //bg-slate-600 bg-transparent
  const className =
    " px-4 sm:px-8 py-2 sm:py-3 transition-all hover:opacity-75 ";
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    if (scroll) {
      setScroll(false);
    }
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
      document.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <div
      className={`fixed  top-0 left-0 py-4  transition-all  w-full  flex justify-between ${
        scroll ? "bg-slate-600 text-white" : "bg-transparent text-black"
      } `}
    >
      <div className="flex">
        <NavbarLink
          to={"/"}
          id={"home"}
          className={className}
          content={"Home"}
        />
      </div>
      <div className="bg-transparent  hidden sm:flex justify-evenly  bg-violet-800 ">
        <NavbarLink
          to={"/product"}
          className={className}
          id={"product"}
          content={"Product1"}
        />
        <NavbarLink
          to={"/product"}
          className={className}
          id={"product2"}
          content={"Product2"}
        />
        <NavbarLink
          to={"/product"}
          className={className}
          id={"product3"}
          content={"Product3"}
        />
        <NavbarLink
          to={"/product"}
          className={className}
          id={"product4"}
          content={"Product4"}
        />{" "}
        <NavbarLink
          to={"/product"}
          className={className}
          id={"product4"}
          content={"Product4"}
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="text-white px-4 sm:px-8 rounded-full h-10 py-0 my-0 mr-2 bg-amber-800 hover:bg-sky-800 ">
          LogIn
        </button>
        <button className="text-white px-4 sm:px-8 rounded-full h-10 py-0 my-0 mr-2 bg-amber-800 hover:bg-sky-800 ">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
