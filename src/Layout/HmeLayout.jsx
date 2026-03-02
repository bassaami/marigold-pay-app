import React from 'react';
import Navbar from "../Componentz/Navbar"
// import HeroCarousel from '../Componentz/HeroCarousel';
import { Outlet } from 'react-router';
import FullFooter from '../Componentz/FullFooter';


const HmeLayout = () => {



    return (
        <div>
            <header>
                <nav> <Navbar></Navbar>  </nav>
            </header>

            <main className="mx-auto">
                <Outlet></Outlet>
            </main>
            
            <footer>
                <FullFooter></FullFooter>
            </footer>

        </div>
    );
};

export default HmeLayout;