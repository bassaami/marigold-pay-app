import React from 'react';
import HeroCarousel from '../Componentz/HeroCarousel';
import ServicesGrid from '../Componentz/ServicesGrid';
import RegularPayments from '../Componentz/RegularPayments';
import MIdCarousel from '../Componentz/MIdCarousel';
import OtherFacilities from '../Componentz/OtherFacilities';


const Hooome = () => {
    return (
        <div>
            <section>
                <HeroCarousel></HeroCarousel>
            </section>
            <section><ServicesGrid></ServicesGrid> </section>
            <section><RegularPayments></RegularPayments> </section>
            <section><MIdCarousel></MIdCarousel> </section>
            <section><OtherFacilities></OtherFacilities> </section>
        </div>
    );
};

export default Hooome;