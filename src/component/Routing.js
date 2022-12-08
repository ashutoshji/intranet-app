import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DashboardDetail } from '../pages/Dashboard';
import { SettingsPage } from '../pages/Settings';
import { MapConfiguration } from '../pages/MapConfiguration';
import { useStyles } from '../static/MiniDrawerStyles';
import clsx from 'clsx';
import CaasAppBar from './CaasAppBar';


export const Routing = (props) => {
    const { content, toolbar, contentShift } = useStyles();
    const { openSideBar } = props;

    return (
        <main className={clsx(content, {
            [contentShift]: openSideBar,
        })}>
            <CaasAppBar />
            {/* <div className={toolbar} /> */}
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/dashboard' exact element={<DashboardDetail/>} />
                <Route path='/settings' element={<SettingsPage/>} />
                <Route path='/mapConfiguration' element={<MapConfiguration/>} />
            </Routes>
        </main>);
}