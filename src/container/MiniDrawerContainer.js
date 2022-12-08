import React, { useState } from 'react';
import MiniDrawer from '../component/MiniDrawer';

const MiniDrawerContainer = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const { openSideBar, sideBarClick } = props;
    const handleClick = (e) => {
        setIsOpen(!isOpen)
    }
    return (<MiniDrawer subMenuOpen={isOpen} onClickHandler={handleClick}
        openSideBar={openSideBar} handlerSideBar={sideBarClick} />);
}


export default MiniDrawerContainer;