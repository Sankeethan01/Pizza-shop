import React, {useState} from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleMenu = () => {
      setOpenLinks(!openLinks)
    }
  return (
    <div className="navbar">
      <div className="left" id={openLinks?"open":"close"}>
        <Link to="/"><img src={logo} alt="" /></Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
