import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ to, id, className, content }: any) => {
  return (
    <Link to={to} id={id} className={className}>
      {content}
    </Link>
  );
};

export default NavbarLink;
