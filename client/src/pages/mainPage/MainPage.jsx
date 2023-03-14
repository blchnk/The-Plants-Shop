import React from 'react';
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import NewArrivals from "../../components/newArrivals/NewArrivals";

const MainPage = () => {
    return (
        <div className='container'>
            <Header/>
            <Intro/>
            <NewArrivals/>
        </div>
    );
};

export default MainPage;