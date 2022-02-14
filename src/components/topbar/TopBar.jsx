import "./topbar.css";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container } from '../contactform/Container';
import  SideBar  from '../sidebar/SideBar';


export default function TopBar() {

        const triggerText = <h3>VERKBEIÐNI</h3>;
        const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        };

     //assigning location variable
     const location = useLocation();
     //destructuring pathname from location
     const { pathname } = location;
     //Javascript split method to get the name of the path in array
     const splitLocation = pathname.split("/");

    return(
        <>
            <div className="top">
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div className="leftSection">
                    <Link to="/">
                        <img className="logo" src={logo} alt={"logo"}/>
                    </Link>          
                </div>   
                <ul className="middleSection">
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link className="link" to="/">
                        HEIM
                        </Link>
                    </li>
                    <li className={splitLocation[1] === "about" ? "active" : ""}>
                        <Link className="link" to="/about">
                        UM OKKUR
                        </Link>
                    </li>
                    <li className={splitLocation[1] === "assignments" ? "active" : ""}>
                        <Link className="link" to="/assignments">
                        VERKEFNI
                        </Link>
                    </li>
                </ul>
                <ul className="rightSection">
                        <div className="bannerBtn">
                           <Container triggerText={triggerText} onSubmit={onSubmit} />
                        </div>
                        <li className="fa fa-road"><h2>Krossaling 2. 201 Kópavogi</h2></li>
                        <li className="fa fa-phone"><h2>898-79000</h2></li>
                </ul>
            </div>
        </>
    )

}