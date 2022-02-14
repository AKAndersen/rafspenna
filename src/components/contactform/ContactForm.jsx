import React from 'react';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './contact.css'
import person from '../../components/images/karl.png'
import company from '../../components/images/fyrirtæki.png'

export const Form = ({ onSubmit }) => {

  const [startDate, setStartDate] = useState(new Date());

  return (
      <div className="modal">
    <form className="headerContact">
        <div className="container">
            <div className="leftText">
                <h1 className="contacth1">Fagaðilar í rafiðnaði</h1>
                <h2>Við sérhæfum okkur
                    í raflausnum
                    fyrir fyrirtæki jafnt
                    og einstaklinga.
                    Við lofum skilvirkum og
                    áráðanlegum vinnubörgðum.
                </h2>
                <div className="logos">
                    <div className="logoPerson">
                        <img className="person" src={person}/>
                        <h1>EINSTAKLINGUR</h1>
                    </div>
                    <div className="logoCompany">                              
                        <h1>FYRIRTÆKI</h1>
                        <img className="company" src={company}/>
                    </div>
                </div>
            </div>
            <div className='rightText'>
                <h1>Hafðu samband</h1>  
                <form className="contact-form" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            className="form-control-full" 
                            id="name" 
                            htmlFor="name" 
                            placeholder="Nafn*"/>
                    </div>
                    <div className="form-group">
                        <input
                          type="email"
                          className="form-control-half"
                          id="email"
                          htmlFor="email"
                          placeholder="Netfang*"
                        />
                        <input
                          type="number"
                          className="form-control-half"
                          id="number"
                          htmlFor="phone"
                          placeholder="Sími*"
                        />
                    </div>
                    <div className="form-group">
                        <input
                          type="address"
                          className="form-control-full"
                          id="address"
                          htmlFor="address"
                          placeholder='Heimilisfang*'
                        />
                    </div>
                    <div className="form-group">
                        <select
                          className="form-control-full"
                          id="service"
                          htmlFor="service"
                          placeholder="Þjónusta"
                          >
                          <option>Einstaklingur</option>
                          <option>Fyrirtæki</option>
                        </select>
                    </div>
                    <div className ="form-group">
                          <p className="timi">Hvenær hentar þér best?:</p>
                          <DatePicker 
                              name="date"
                              htmlFor="date"
                              selected={startDate} 
                              onChange={(date) => setStartDate(date)}     
                          />
                    </div>
                    <div className="form-group">
                        <textarea
                          className="form-control-full"
                          id="message"
                          htmlFor="message"
                          placeholder="Verklýsing"
                          cols="30" rows="10"
                        />
                    </div>
                    <button type="submit" className="submit">Senda beðni</button>
                </form> 
            </div>
        </div>
    </form>
    </div>
  );
};
export default Form;