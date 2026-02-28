import React from 'react';
import Navbar from "../Componentz/Navbar"
import HeroCarous from '../Componentz/HeroCarous';


const HmeLayout = () => {



    return (
        <div>
            <header>
                <nav> <Navbar></Navbar>  </nav>
                <section>
                    <HeroCarous></HeroCarous>
                </section>
            </header>

            
        </div>
    );
};

export default HmeLayout;