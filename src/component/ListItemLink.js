import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const ListItemLink = (props) => {
    const { to, open, menu, menuText, icon, ...other } = props;
    
    return (
        <ListItem button component={RouterLink} to={to} {...other} >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={menuText} />
            {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItem>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

export default ListItemLink;