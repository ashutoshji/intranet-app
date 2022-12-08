import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@emotion/react';
import { AppBar, CssBaseline, Divider, Drawer, IconButton, Link, List, Toolbar, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { staticMenu } from '../static/Menus';
import Menu from '@mui/icons-material/Menu';
import ListItemLinkContainer from '../container/ListItemLinkContainer';
import { useStyles } from '../static/MiniDrawerStyles';

const MiniDrawer = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { openSideBar, handlerSideBar } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: openSideBar,
                })}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handlerSideBar}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: openSideBar,
                        })}
                    >
                        <Menu />
                    </IconButton>
                    {/* <Typography style={{ color: 'white' }} component={Link} to='/' variant="h6" noWrap>
                        Cogent Health
                    </Typography> */}
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: openSideBar,
                    [classes.drawerClose]: !openSideBar,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openSideBar,
                        [classes.drawerClose]: !openSideBar,
                    }),
                }}
                open={openSideBar}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handlerSideBar}>
                        {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                    </IconButton>
                </div>

                <Divider />
                <nav className={classes.lists}>
                    <List>
                        {staticMenu.map((menu, index) => (
                            <React.Fragment key={index}>
                                <ListItemLinkContainer menuObj={menu} />
                            </React.Fragment>
                        ))}
                    </List>
                </nav>
                <Divider />
            </Drawer>
        </React.Fragment >
    );
}

export default MiniDrawer;