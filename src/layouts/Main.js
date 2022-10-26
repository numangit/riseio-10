import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomFooter from '../components/BottomFooter/BottomFooter';
import TopNavigateBar from '../components/TopNavigateBar/TopNavigateBar';

const Main = () => {
    return (
        <div>
            <TopNavigateBar></TopNavigateBar>
            <Outlet></Outlet>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default Main;