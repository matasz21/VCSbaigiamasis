import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sadziosuogos', 'template_opqceai', form.current, 'vEwyw-jWm1SaRhmfX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Jūsų užsakymas buvo išsiųstas!");
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='modal-form'>
            <label>Vardas Pavardė</label>
            <input type="text" name="vardas" required/>
            <label>Tel. numeris</label>
            <input type="tel" name="tel" required/>
            <label>Užsakomos uogos ir kiekis (kg)</label>
            <textarea name="uogos" id="" cols="20" rows="3" placeholder='pvz.: Braškės 3kg, šilauogės 2kg' required></textarea>
            <label>Adresas (jeigu renkatės pristatymą į namus)</label>
            <input type="text" name="adresas"/>
            <button className='btn'>Pateikti užsakymą</button>
    </form>
  );
};