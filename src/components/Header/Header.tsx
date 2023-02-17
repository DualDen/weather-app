import React, { FC } from "react";
import { Link, useMatch } from "react-router-dom";
import "./Header.css";

const Header: FC = () => {
  const route = useMatch("");
  const linkPath = () => {
    return route?.pathname === "/" ? "/gallery" : "/";
  };
  const linkText = () => {
    return route?.pathname === "/" ? "To Gallery" : "To Weather";
  };
  return (
    <div className="header">
      <Link style={{}} to={linkPath()}>
        {linkText()}
      </Link>
    </div>
  );
};

export default Header;
