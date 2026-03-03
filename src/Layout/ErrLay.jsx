import React from 'react';
import swimm from "../assets/swimming.png"
import Navbar from '../Componentz/Navbar';
import FullFooter from '../Componentz/FullFooter';


const ErrLay = () => {
    return (
        <div className=""><Navbar></Navbar>
        <div className='flex flex-col items-center my-6'>
            
            <img src={swimm} alt="" />
            <div className="text-2xl text-center font-bold">404 <br /> Page not ready yet</div>
        </div><FullFooter></FullFooter>
        </div>
    );
};

export default ErrLay;