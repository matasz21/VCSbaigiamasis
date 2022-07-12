import React from "react";
import './contact.css'

const Contact = () => {
  return (
  <div className="contact">
    <div className="container">
      <h1>SUSISIEKITE SU MUMIS</h1>
      <div className="double-line"></div>
      <div className="row">
              <div className="col-md-6">
                <h2>Kontaktinė informacija</h2>
                <p>Tel.: +370 607 89219</p>
                <p>El. paštas: <a href="mailto:uzsakymai@saldziosuogos.lt">uzsakymai@saldziosuogos.lt</a></p>
                <p>Adresas: Mamavio k., Trakų r.</p>
                <p>Skambinti galima nuo 8:00 iki 19:00 d.d.</p>
              </div>
              <div className="col-md-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31196.517899620227!2d24.974593824810444!3d54.468317394358586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dde5ed0bb71b41%3A0x7372e766254efe6!2sMamavys%2021169!5e0!3m2!1slt!2slt!4v1657522942459!5m2!1slt!2slt" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
      </div>
    </div>
  </div>
  )
};

export default Contact;
