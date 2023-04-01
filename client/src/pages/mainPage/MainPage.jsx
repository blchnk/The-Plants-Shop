import React from 'react';
import Intro from "../../components/intro/Intro";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import CategoriesPromo from "../../components/categoriesPromo/CategoriesPromo";

const MainPage = () => {
    return (
        <div className='container'>
            <Intro/>
            <NewArrivals/>
            <CategoriesPromo/>
        </div>
    );
};

export default MainPage;