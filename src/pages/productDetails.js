import React, { useState } from "react";
import '../styles/product.css'
import {Row, Col} from 'react-bootstrap';
import blog3 from '../assets/hero2.jpeg';
const Product = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <div className="product-details">
         <div className="row">
                <div className="col-lg-6">
                    <img src={blog3} alt="" className="p-img"/>
                </div>
             <div className="col-lg-6">
                <div className="product-content">
                    <p className="details">— <i>Orange colored stool </i>
                        made in France from
                        recycled steel,
                        assembled by hand
                        and then powder
                        coated.
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
          </div>
        </div>
        </>
    );
}
export default Product;