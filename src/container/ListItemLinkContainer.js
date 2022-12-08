import { Collapse, List, useThemeProps } from '@mui/material';
import React, { useState } from 'react';
import ListItemLink from '../component/ListItemLink';
import { useStyles } from '../static/MiniDrawerStyles';

const classes = useStyles;

const ListItemLinkContainer = (props)=> {
    const [isOpen, setIsOpen] = useState(false);
    const { menuObj } = props;

    const handleClick = (e) => {
        setIsOpen(!isOpen)
    }

        return (
            <React.Fragment>
                {menuObj.submenu.length > 0 ?
                    (
                        <ListItemLink
                            key={menuObj.id}
                            to={menuObj.path}
                            menuText={menuObj.menuName}
                            icon={menuObj.icon}
                            open={isOpen}
                            onClick={handleClick} />
                    )
                    :
                    (
                        <ListItemLink
                            key={menuObj.id}
                            to={menuObj.path}
                            menuText={menuObj.menuName}
                            icon={menuObj.icon} />
                    )
                }

                <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {menuObj.submenu.map((sub, index) => (
                            <ListItemLink
                                key={sub.id}
                                to={sub.path}
                                menuText={sub.menuName}
                                icon={sub.icon}
                                className={classes.nested} />
                        ))}
                    </List>
                </Collapse>
            </React.Fragment>
        )


}

export default ListItemLinkContainer;