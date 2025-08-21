import React, { createContext, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";

export const StoreContext = createContext();

function StoreContextProvider(props) {
    
    const [cartitem, setcartitem] = useState({});
    const [cart, setCart] = useState([]);

    const addToCart = (itemId, quantity = 1) => {
        setcartitem((prev) => ({...prev,[itemId]: (prev[itemId] || 0) + quantity}));

     
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem._id === itemId);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem._id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                const item = food_list.find(item => item._id === itemId);
                return [...prevCart, { ...item, quantity: quantity }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setcartitem((prev) => {
            const newCart = { ...prev };
            delete newCart[itemId];
            return newCart;
        });

        setCart((prevCart) => prevCart.filter(item => item._id !== itemId));
    };

    const updateCartQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(itemId);
        } else {
            setcartitem((prev) => ({
                ...prev,
                [itemId]: quantity
            }));

            setCart((prevCart) =>
                prevCart.map(item =>
                    item._id === itemId ? { ...item, quantity: quantity } : item
                )
            );
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartitem) {
            if (cartitem[itemId] > 0) {
                const item = food_list.find(item => item._id === itemId);
                if (item) {
                    totalAmount += item.price * cartitem[itemId];
                }
            }
        }
        return totalAmount;
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const Contextvalue = {
        food_list,
        cartitem,
        setcartitem,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        getTotalCartAmount,
        getCartTotal
    };

    return (
        <StoreContext.Provider value={Contextvalue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
