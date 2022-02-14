import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { useLocation } from "react-router-dom";
import { Container } from '../contactform/Container';



export default props => {
    
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
  return (
    <div className="hide">
        <Menu className="Menu">
            <a className="menu-item" href="/">
                <Link className="link" to="/">
                    HEIM
                </Link>
            </a>
            <a className="menu-item" href="/salads">
                <Link className="link" to="/about">
                    UM OKKUR
                </Link>
            </a>
            <a className="menu-item" href="/pizzas">
                <Link className="link" to="/assignments">
                    VERKEFNI
                </Link>
            </a>
            <a className="menu-item" href="/desserts">
                 <div className="bannerBtn">
                    <Container triggerText={triggerText} onSubmit={onSubmit} />
                </div>
            </a>
        </Menu>    
        <Link to="/">
            <img className="logoSide" src={logo} alt={"logo"}/>
         </Link>   
    </div>
    
  );
};
