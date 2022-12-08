import React, { useState } from 'react';
import MainPage from '../component/MainPage';

const MainPageContainer = (props) => {
    const [openSideBar, setOpenSideBar] = useState(false);

    const toggleSideBar = (e) => {
        setOpenSideBar(!openSideBar)
    }
    return <MainPage openSideBar={openSideBar} toggleHandler={toggleSideBar}></MainPage>;
}


export default MainPageContainer;