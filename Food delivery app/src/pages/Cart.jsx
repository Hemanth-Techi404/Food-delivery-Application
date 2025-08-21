import React, { useContext } from "react";
import { StoreContext } from "../components/Context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cartitem, food_list, removeFromCart, addToCart, getTotalCartAmount } = useContext(StoreContext);

   
    const totalAmount = getTotalCartAmount ? getTotalCartAmount() : 0;


    const cartItems = food_list.filter(item => cartitem[item._id] > 0);
    const isEmpty = cartItems.length === 0;

    
    const handleIncrease = (itemId) => {
        addToCart(itemId);
    };

    
    const handleDecrease = (itemId) => {
        if (cartitem[item._id] > 1) {
            addToCart(itemId, -1);
        } else {
            removeFromCart(itemId);
        }
    };

    const handleRemove = (itemId) => {
        removeFromCart(itemId);
    };

    const OrderNavigate = useNavigate();
    function DirectTo(){
        OrderNavigate('/Placeorder');
    }

    return (
        <div className="cart">
            <h1>Your Shopping Cart</h1>

            {isEmpty ? (
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>
                    <p>Your cart is empty</p>
                    <button onClick={() => window.location.href = '/'}>Continue Shopping</button>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item._id} className="cart-item">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p className="cart-item-price">${item.price}</p>

                                    <div className="quantity-controls">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleDecrease(item._id)}
                                            disabled={cartitem[item._id] <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{cartitem[item._id]}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleIncrease(item._id)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className="remove-btn"
                                        onClick={() => handleRemove(item._id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
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
                        <button className="checkout-btn" onClick={()=>DirectTo()}>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
