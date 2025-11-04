import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import NavbarTop from '../Shared/Navbar/NavbarTop';

const RootLayout = () => {
    //--------Naviagtion----Or-----Loading---------
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)


    return (
        <div>

            
            <NavbarTop></NavbarTop>
            <Navbar ></Navbar>
            {
                isNavigating && <img src="https://i.ibb.co/YFJ3FbKc/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;