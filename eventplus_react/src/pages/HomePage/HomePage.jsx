import React from 'react';
import './HomePage.css';
// import Title from '../../components/Title/Title';
import Banner from '../../components/Banner/Banner';
import VisionSection from '../../components/VisionSection/VisionSection';
import MainContent from '../../components/Main/MainContent';

const HomePage = () => {
    return (
        <div>
            {/* <Title titleText="Página Home" marginTop='margin_top'/> */}
            <MainContent>
                <Banner />
                <VisionSection/>
            </MainContent>
        </div>
    );
};

export default HomePage;