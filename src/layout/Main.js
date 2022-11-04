import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer/Footer';
import Header from '../share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;