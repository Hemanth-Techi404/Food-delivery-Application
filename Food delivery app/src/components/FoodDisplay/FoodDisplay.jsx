import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Fooditems from "./Fooditems";
import "./FoodDisplay.css";

function FoodDisplay(){

    const {food_list} = useContext(StoreContext)

    return(
        <div className="food-display">
            <h1 className="food-display-title">Top dishes near you</h1>
            <div className="food-display-list">
                {
                    food_list.map((item,index)=>{
                        return <Fooditems 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            description={item.description}
                            image={item.image}
                            price={item.price}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay
