import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../Context/StoreContext";

function Fooditems({ id, name, description, image, price }) {

const {cartitem, addToCart, removeFromCart} = useContext(StoreContext)

    return (
        <div className="food-item" key={id}>
            <img src={image} alt={name} className="food-item-image" />
            <div className="food-item-info">
                { !cartitem[id]
                ? <img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
                : <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
                    <p>{cartitem[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="Add more" />
                    </div>
                }
                <p className="food-item-name">{name}</p>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
}

export default Fooditems;
