import React from "react";
import './whyChoose.css';

const WhyChoose = () => {
  return (
    <div className="gray">
        <div className="container why-choose">
            <h3>KODĖL RINKTIS MUS</h3>
            <div className="double-line"></div>
            <div className="cards row">
                <div className="col-xl-4 center">
                    <h2>KOKYBĖ</h2>
                    <p>Mūsų ūkyje auginamos tik geriausios rūšies braškės, šilauogės bei avietės, kurias prižiūrime kasdien ir renkame rankomis.</p>
                </div>
                <div className="col-xl-4 center">
                    <h2>ŠVIEŽUMAS</h2>
                    <p>Uogas renkame kasdien ir klientams pristatome per 24 valandas nuo surinkimo, o dažniausiai ir tą pačią dieną.</p>
                </div>
                <div className="col-xl-4 center">
                    <h2>PATOGUMAS</h2>
                    <p>Užsisakyti galite Jums patogiu būdu svetainėje, el. paštu ar telefonu, o uogas galime pristatyti Vilniuje jau tą pačią dieną.</p>
                </div>
            </div>
        </div>
    </div>
    
  )
};

export default WhyChoose;
