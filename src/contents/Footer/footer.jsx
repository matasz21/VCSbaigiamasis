import React from "react";
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer>
        <div className="container split">
            <div className="row">
                <div className="col-md-4">
                    <p>"Saldžių uogų ūkis" - tai nedidelis ūkis Trakų rajone, kuriame auginamos saldžios braškės, šilauogės, avietės bei kitos sodo ir daržo gėrybės.</p>
                </div>
                <div className="col-md-4">
                    <h1>KONTAKTAI</h1>
                    <p>Tel.: +370 607 89219 <br /> El. paštas: <a href="mailto:uzsakymai@saldziosuogos.lt">uzsakymai@saldziosuogos.lt</a></p>
                </div>
                <div className="col-md-4">
                    <h1>Taip pat mus sekite</h1>
                    <a href="https://facebook.com"><FacebookIcon/></a><a href="https://www.instagram.com/saldziu_uogu_ukis/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="underline-blank"></div>
                <div className="footer-text">
                    <span>Visos teisės saugomos. © 2022 "Saldžių uogų ūkis".</span><span>www.saldziosuogos.lt</span>
                </div>
            </div>
        </div>
    </footer>

  )
};

export default Footer;
