import React from 'react';
import './assignments.css';
import header from '../../components/images/header.jpg'
import gallaryOne from '../../components/images/spenna.jpg'
import gallaryTwo from '../../components/images/spenna2.jpg'
import gallaryThree from '../../components/images/spenna3.jpeg'
import gallaryFour from '../../components/images/spenna4.jpg'
import electric from '../../components/images/electric.jpg'
import phone from '../../components/images/HRINGDU.png'
import electrical from '../../components/images/ELECTRICAL.jpg'
import Modal from '../../components/contactform/Modal'



export default function Assignments() {
  return (
    <div>
        <div className="bannerAssign">
              <img className="assignImg marginBtn" src={electrical}/>
                  <div className="assignmentText">
                        <h1>Við tileinkum okkur fjölbreytt svið verkefna</h1>
                        <h2>
                            Við sérhæfum okkur í raflausnum
                            fyrir fyrirtæki jafnt og einstaklinga.<br/>
                            Við lofum skilvirkum og áráðanlegum vinnubörgðum. 
                        </h2>
                  </div>
                <img className="assignImg" src={header}/>
        </div>
        <div className="galleryHeader">
            <h1>Dæmi um þau verkefni sem við höfum að okkur tekið</h1>
        </div>
        <div class="gallery">
            <div class="image-wrapper">
                <a href="#lightbox-image-1">
                    <div className="textWrapper">
                         <h1>Rafmagnskassar</h1>
                    </div>
                    <img src={gallaryOne} alt="" />
                </a>
            </div>
            <div class="image-wrapper">
                <a href="#lightbox-image-2">
                    <div className="textWrapper">
                        <h1>Rafgeymir</h1>
                    </div>
                    <img src={gallaryTwo} alt="" />
                </a>
            </div>
            <div class="image-wrapper">
                <a href="#lightbox-image-3">
                <div className="textWrapper">
                        <h1>Hiteveita</h1>
                    </div>
                    <img src={gallaryThree} alt="" />
                </a>
            </div>
            <div class="image-wrapper">
                <a href="#lightbox-image-4">
                    <div className="textWrapper">
                        <h1>Loftkæling</h1>
                    </div>
                    <img src={gallaryFour} alt="" />
                </a>
            </div>
        </div>
        <div className="gallery-lightboxes">
            <div className="image-lightbox" id="lightbox-image-1">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-3" className="arrow-left"></a>
                    <a href="#lightbox-image-2" className="arrow-right"></a>
                    <img src={gallaryOne} alt="" />
                </div>
            </div>
            
            <div className="image-lightbox" id="lightbox-image-2">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-1" className="arrow-left"></a>
                    <a href="#lightbox-image-3" className="arrow-right"></a>
                    <img src={gallaryTwo}  alt="" />
                </div>
            </div>
            
            <div className="image-lightbox" id="lightbox-image-3">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-2" className="arrow-left"></a>
                    <a href="#lightbox-image-1" className="arrow-right"></a>
                    <img src={gallaryThree} alt="" />
                </div>
            </div>
            <div className="image-lightbox" id="lightbox-image-4">
                <div className="image-lightbox-wrapper">
                    <a href="#" className="close"></a>
                    <a href="#lightbox-image-2" className="arrow-left"></a>
                    <a href="#lightbox-image-1" className="arrow-right"></a>
                    <img src={gallaryFour} alt="" />
                </div>
            </div>
        </div>
        <div class="containerAssign">
            <img className="bottomImg" src={electric} />
                 <div className="bottomTextAssign">
                    <div className="rightAssign">
                        <a href="tel:354-898-7900"><img src={phone}/></a>
                    </div>
                </div>
        </div>
    </div>
  )
}
