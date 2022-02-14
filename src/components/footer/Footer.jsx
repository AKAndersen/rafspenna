import React from 'react'
import "./footer.css"
import logoYellow from '../images/logo2.png'

export default function Footer() {
  return (
    <>
        <div className="footerContainer">
            <div className="footerSection">
                <img className="logoFooter" src={logoYellow}/>
                <ul className = "footInfo">
                    <h1>Rafspenna ehf.</h1>
                    <h2>Krossaling 2. 201 Kópavogi</h2>
                    <h2>Kt. 451196-2789</h2>
                    <h2>Sími 354-898-79000</h2>
                </ul>       
                <p>2021 | Rafspenna ehf.</p>
            </div>
        </div>
    </>
  )
}