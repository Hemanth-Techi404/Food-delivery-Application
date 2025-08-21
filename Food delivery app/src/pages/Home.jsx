import React from "react";
import Header from "../components/Header/Header";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";

function Home(){
    return(
        <>
            <Header />
            <ExploreMenu />
            <FeaturedSection />
            <TestimonialsSection />
        </>
    )
}

export default Home
