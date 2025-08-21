import React, { useContext } from "react";
import { StoreContext } from "../components/Context/StoreContext";
import "./PlaceOrder.css";

function PlaceOrder(){

    const { getTotalCartAmount } = useContext(StoreContext);
    const totalAmount = getTotalCartAmount ? getTotalCartAmount() : 0;

    return(
     <div className="place-order">
        <h1>Place Your Order</h1>
        <form className="order-form" action="">
            <h2 className="section-header">Personal Information</h2>
            <div className="input-names">
                <div>
                    <label className="form-label">First Name</label>
                    <input type="text" placeholder="First Name" required />
                </div>
                <div>
                    <label className="form-label">Last Name</label>
                    <input type="text" placeholder="Last Name" required />
                </div>
            </div>
            
            <div className="address">
                <label className="form-label">Delivery Address</label>
                <input type="text" placeholder="Enter your complete address" required />
            </div>
            
            <div className="contact-details">
                <div>
                    <label className="form-label">Mobile Number</label>
                    <input type="tel" placeholder="Enter your mobile number" required />
                </div>
                <div>
                    <label className="form-label">Email Address</label>
                    <input type="email" placeholder="Enter your email address" required />
                </div>
            </div>

            <div className="cart-summary">
                <h2>Order Summary</h2>
                <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Delivery Fee:</span>
                    <span>$5.00</span>
                </div>
                <div className="summary-row">
                    <span>Tax:</span>
                    <span>${(totalAmount * 0.08).toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span>Total:</span>
                    <span>${(totalAmount + 5 + (totalAmount * 0.08)).toFixed(2)}</span>
                </div>
                <button type="submit" className="checkout-btn">
                    Proceed to Payment
                </button>
            </div>
        </form>
     </div>
    )
}
export default PlaceOrder
