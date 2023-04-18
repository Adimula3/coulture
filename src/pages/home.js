import React, { useState } from "react";
import '../styles/home.css';
import Header from "./header";
import { Row } from "react-bootstrap";
import blog1 from '../assets/couture1.jpeg';
import blog2 from '../assets/couture2.jpeg';
import blog3 from '../assets/hero2.jpeg';
import img33 from '../assets/img33.jpeg';
import test44 from '../assets/testimage1.jpeg';
import Cart from "./cart";



const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  
    return (
        <>
        <div className="Home">
            <div className="hero">
                <Header />
                <div className="hero-content">
                <h5>New Collections</h5>
                <h1>INTRODUCING NEW ARRIVALS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className="btn btn-primary">VIEW COLLECTION</button>
                </div>
                
            </div>
            <div className="collections">
              <div className="d-flex">
                <div className="box1">
                   
                </div>
                <div className="">
                    <div className="d-flex">
                        <div className="box2">
                       
                         </div>
                         <div className="box3">
                       
                         </div>
                    </div>
                    <div className="box4">

                    </div>
                </div>
              </div>
            </div>
            <div className="features">
                <h1>Features Product</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="mb-4 box-shadow">
                              <img src={test44} class="card-img-top" alt="..."/>
                              <div class="middle"  onClick={toggleModal}>
                                <div class="text">Quick view</div>
                              </div>
                                <div className="card-body">
                                    <h5>Product1</h5>
                                    <p class="card-text">DARK BROWN JEANS</p>
                                    <span class="price">$19.99</span>
                                </div>
                              

                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 box-shadow">
                              <img src={test44}  class="card-img-top" alt="..."/>
                              <div class="middle">
                                <div class="text">Quick view</div>
                              </div>
                                <div className="card-body">
                                    <h5>Product1</h5>
                                    <p className="card-text">DARK BROWN JEANS</p>
                                    <span className="price">$19.99</span>
                                </div>
                            </div>
                            {modalOpen && (
                              <div className="modal">
                                <div className="modal-content">
                                    
                                  <div className="d-flex">
                                     <img src={test44}  class="m-img" alt="..."/>
                                    <div className="m-p-d">
                                      <div className="product-content">
                                         <p className="details">
                                         Nam nec tellus a odio tincidunt auctor a ornare odio.
                                          Sed non mauris vitae erat consequat auctor eu in elit.
                                           Class aptent taciti sociosqu ad litora torquent per conubia
                                            nostra, per inceptos himenaeos. Mauris in erat justo.
                                             Nullam ac urna eu 
                                         felis dapibus condimentum sit amet a augue. Sed non neque elit sed
                                          </p>
                                          <hr />
                                          <div className="p-box d-flex">
                                          <p>Price</p>
                                          <span>€570,00</span>
                                      </div>
                                      <hr />
                                      <div className="p-box d-flex">
                                         <p>Color</p>
                                         <span>€570,00</span>
                                      </div>
                                       <hr />
                                       <div className="p-box d-flex">
                                       <p>Delivery time</p>
                                       <span>4 - 5 weeks
                        
                                       <span className={`icon ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} onClick={toggleAccordion}/>
            
                                        </span>
                     
                                    </div>
          
                                   {isOpen && (
                                     <div className="accordion-content">
                                        Click &amp; collect on Bordeaux and Paris. Delivery time 4-5 weeks, made to order.
                                        </div>
                                       )}
                                              <div className="product-buttons d-flex">
                                               <div className="item-count d-flex">
                                                 <span className="quantity minus">-</span>
                                                   <span className="qty">0</span>
                                                     <span className="quantity add">+</span>
                                                </div>
                                                <button className="btn btn-primary">Shop now</button>
                                              </div>
                                  </div>
                                </div>
                                <span className="close" onClick={toggleModal}>
              &times;
            </span>
                              </div>
                            </div>
                          </div>
                    )}
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 box-shadow">
                              <img src={test44}  className="card-img-top" alt="..."/>
                              <div class="middle">
                                <div class="text">Quick view</div>
                              </div>
                                <div className="card-body">
                            
                                    <h5>Product1</h5>
                                    <p className="card-text">DARK BROWN JEANS</p>
                                    <span className="price">$19.99</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-4 box-shadow">
                              <img src={test44}  class="card-img-top" alt="..."/>
                              <div class="middle">
                                <div class="text">Quick view</div>
                              </div>
                                <div className="card-body">
                                    <h5>Product1</h5>
                                    <p class="card-text">DARK BROWN JEANS</p>
                                    <span class="price">$19.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Home;