import React from "react";
import "./header.scss";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  return (
    <div className="main-header">
      <p className="logo-blog" onClick={() => history.push("/")}>
        Mern-Blog
      </p>
      <p className="logout" onClick={() => history.push("/login")}>
        Logout
      </p>
    </div>
  );
};

export default Header;
