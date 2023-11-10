import React from 'react';
import Title from '../Title/Title';
import './VisionSection.css'

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className="vision__box">
                <Title titleText={"Visão"} color="white" nomeClass='vision__title'/>
                <p className='vision__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quam porro iusto reprehenderit velit incidunt aut cumque molestias perferendis, minima minus qui asperiores animi sed suscipit dolor, tempore hic consequatur!</p>
            </div>
        </section>
    );
};

export default VisionSection;