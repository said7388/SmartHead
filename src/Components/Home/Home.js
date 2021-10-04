import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import Badges from '../Badge/Badge';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Courses from '../Courses/Courses';
import Instractor from '../Instractor/Instractor';

const Home = () => {
    // This is our Home page
    return (
        <div>
            <Banner></Banner>
            <Badges></Badges>
            <AboutCompany></AboutCompany>
            <Category></Category>
            <Courses></Courses>
            <Instractor></Instractor>
        </div>
    );
};

export default Home;