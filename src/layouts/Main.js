import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavigateBar from '../components/TopNavigateBar/TopNavigateBar';

const Main = () => {
    return (
        <div>
            <TopNavigateBar></TopNavigateBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;