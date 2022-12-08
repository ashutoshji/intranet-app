import React from 'react';
import clsx from 'clsx';
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { Breadcrumbs, Link, Paper } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { staticMenu } from '../static/Menus';
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from '../static/MiniDrawerStyles';

const PureBreadcrumbs = (({ breadcrumbs }) => {
    const classes = useStyles();
    return (
        <>
            <div className={clsx(classes.breadCrumbBar)} >
                <Paper elevation={0} className={classes.paper}>
                    <Breadcrumbs
                        separator={< NavigateNext fontSize="small" />}
                        aria-label="Breadcrumb">
                        {breadcrumbs.map(({
                            breadcrumb,
                            match
                        }, index) => (
                                <div key={match.url}>
                                    {console.log(match.url)}
                                    <Link component={RouterLink} color="inherit" to={match.url}>{breadcrumb}</Link>
                                </div>
                            ))}
                    </Breadcrumbs>
                </Paper>
            </div>
        </>
    )
})

export default withBreadcrumbs(staticMenu)(PureBreadcrumbs);