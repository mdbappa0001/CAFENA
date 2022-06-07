import React from 'react';
import Footer from '../../Shared/Footer';
import About from './About';
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;