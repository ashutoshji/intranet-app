import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material'
import MiniDrawerContainer from '../container/MiniDrawerContainer';
import { Routing } from './Routing';
import { useStyles } from '../static/MiniDrawerStyles';
// import AppBarComponent from './AppBarComponent';

function MainPage(props) {
    const classes = useStyles;
    const theme = createTheme();
    const { openSideBar, toggleHandler } = props;
    
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                {/* <AppBarComponent /> */}
                <MiniDrawerContainer openSideBar={openSideBar} sideBarClick={toggleHandler} />
                <Routing openSideBar={openSideBar} sideBarClick={toggleHandler} />
            </div>
        </ThemeProvider>
    );
}

export default MainPage;