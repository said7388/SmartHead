import React from 'react';
import AboutCompany from '../AboutCompany/AboutCompany';
import Badges from '../Badge/Badge';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Badges></Badges>
            <AboutCompany></AboutCompany>
            <Category></Category>
            <Courses></Courses>
        </div>
    );
};

export default Home;