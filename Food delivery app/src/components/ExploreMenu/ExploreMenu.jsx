import React, { useState } from "react";
import { menu_list } from "../../assets/frontend_assets/assets";
import "./ExploreMenu.css";
import FoodDisplay from "../FoodDisplay/FoodDisplay";

function ExploreMenu() {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    return (
        <div className="explore-menu">
            <h1>Explore Your favorite item</h1>
            <p className="explore-menu-text">Grab Your favorite Food from near by Restaurents Now!</p>
            <div className="menu-list">
                {
                    menu_list.map((item, i) => {
                        return (
                            <div 
                                key={i} 
                                className={selectedMenu === i ? 'active' : ''}
                                onClick={() => handleMenuClick(i)}
                            >
                                <img src={item.menu_image} alt={item.menu_name} />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
           
        </div>
        
    )
}

export default ExploreMenu;
