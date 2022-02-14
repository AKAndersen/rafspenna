import banner from '../../components/images/tenging.jpg'
import engineer from '../../components/images/engineer.jpg'
import electric from '../../components/images/electric.jpg'
import phone from '../../components/images/HRINGDU.png'
import "./frontpage.css";
import { useState } from "react";
import { Container } from '../../components/contactform/Container';

export default function FrontPage() {
    const triggerText = <h1>SENDU Á OKKUR LÍNU</h1>;
    const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    };

    return(
        <>
            <div className="banner">
                <img className="image" src={banner} alt="background" />
                <div className="topText">
                        <h1>Við tökum á okkur allt sem við kemur rafmangi</h1>    
                </div>
                <div className="topBtn">                        
                    <Container triggerText={triggerText} onSubmit={onSubmit} />
                </div>
            </div>
            <div className="containerMiddle">
                <img className="engImg" src={engineer} />
                <div class="sectionMiddle">
                    <div class="text">
                        <h1>Við viljum vinna með þér!</h1>
                        <h2>Rafverktakafyrirtækið Raftengi byggir á gömlum grunni og áratugareynslu.
                            Starfssvið fyrirtækisins allt frá stofnun hefur verið við raflagnir,
                            hvort heldur við nýlagnir eða endurbætur á eldri raflögnum. </h2>
                    </div>
                 </div>  
            </div>
            <div class="containerFront">
                <img className="bottomImg" src={electric} />
                    <div className="bottomText">
                        <div className="left">
                            <h1>Er kominn tími á rafmagnsviðhald?</h1>
                        </div>
                        <div className="right">
                            <a href="tel:354-898-7900"><img src={phone}/></a>
                        </div>
                    </div>
            </div>
        </>
    )

}