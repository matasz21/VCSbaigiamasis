import React from "react";
import './header.css';
import SearchBar from "./searchBar/SearchBar";
import BerryData from "./Data.json";
import Logo from "../LogoWeb.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NavBar from "./navBar/Navbar";




const Header = () => {
  return (
    <div className="container">
      <div className="header row wrap">
          <div className="input col-lg-4 d-flex">
              <SearchBar placeholder="Ieškoti asortimento..." data={BerryData} />
          </div>
          <div className="logos col-lg-4 d-flex">
              <img src={Logo} alt='Logo' className="logo"></img>
          </div>
          <div className="socMedia col-lg-4 d-flex">
              <div className="s-hidden"><SearchBar placeholder="Ieškoti asortimento..." data={BerryData} /></div>
              <div className="d-flex"><a href="https://facebook.com"><FacebookIcon/></a><a href="https://www.instagram.com/saldziu_uogu_ukis/" target="_blank" rel="noreferrer"><InstagramIcon/></a></div>
          </div>
          <div className="underline"></div>
          <NavBar />
          
      </div>
    </div>
  );
};

export default Header;
