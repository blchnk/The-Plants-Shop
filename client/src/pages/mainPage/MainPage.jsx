import React from 'react';
import Intro from "../../components/intro/Intro";
import NewArrivals from "../../components/newArrivals/NewArrivals";

const MainPage = () => {
    return (
        <div className='container'>
            <Intro/>
            <NewArrivals/>
        </div>
    );
};

export default MainPage;