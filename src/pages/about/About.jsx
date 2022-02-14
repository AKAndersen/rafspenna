import React from 'react'
import handshake from '../../components/images/handshake.jpg'
import "./about.css";
import staff from '../../components/images/staff.jpg'
import worker from '../../components/images/technical-electrical-engineer.jpg'
import leader from '../../components/images/heading-engineering.png'
import person from '../../components/images/karl.png'
import company from '../../components/images/fyrirtæki.png'
import plant from '../../components/images/plant.jpg'

export default function About() {
  return (
    <div>
      <div className="flex">
            <img className="aboutImgLeft" src={plant}/>
            <img className="aboutImgRight" src={handshake}/>
        </div>
          <div className="aboutContainer">
              <h1 className ="aboutText">Þín ánægja er okkar fag</h1>
              
              <h2 className ="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae error laborum tempore, exercitationem impedit, facilis a assumenda adipisci reprehenderit ducimus natus accusantium consequuntur ipsa cupiditate quo tenetur, id officiis cumque!</h2>
      </div>
      <div className="aboutMiddle">
        <div className="aboutMiddleText">
          <h1>Við sérhæfum okkur
              í raflausnum
              fyrir fyrirtæki jafnt
              og einstaklinga.
          </h1>
          <h2>
              Við lofum skilvirkum og
              áráðanlegum vinnubörgðum.
            </h2>
        </div>
        <div className="aboutLogos">
            <div className="aboutLogoPerson">
                <img src={person}/>
                <h1>EINSTAKLINGUR</h1>
            </div>
            <div className="aboutLogoCompany">                              
                <img src={company}/>
                <h1>FYRIRTÆKI</h1>
            </div>
        </div>
      </div>
      <div class="row">
            <div class="column">
                <div className="columnText">
                    <h1>Starfsfólkið okkar vill vinna með þér!</h1>
                    <h2>Rafverktakafyrirtækið Raftengi byggir á gömlum grunni og áratugareynslu. Starfssvið fyrirtækisins allt frá stofnun hefur verið við raflagnir, hvortheldur við nýlagnir eða endurbætur á eldri raflögnum. </h2>
                </div>
            </div>
            <div class="columnWorker">
              <img src={worker} alt="Snow"/>
            </div>  
            <div class="columnLeader">
              <img src={leader} alt="Forest"/>
            </div>
            <div class="columnStaff">
              <img src={staff}alt="Mountains"/>
            </div>
      </div>
    </div>
  )
}
