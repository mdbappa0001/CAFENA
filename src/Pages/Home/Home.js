import React from 'react';
import Footer from '../../Shared/Footer';
import About from './About';
import Banner from './Banner';
import Review from './Review';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;