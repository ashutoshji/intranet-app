import { Dashboard, Map, Settings, SettingsApplications } from '@mui/icons-material';
import React from 'react';
import { DashboardDetail } from '../pages/Dashboard';
import { MapConfiguration } from '../pages/MapConfiguration';
import { SettingsPage } from '../pages/Settings';


export const staticMenu = [
    {
        id:1,
        menuName: 'Dashboard',
        menuDescription: 'Dashboard',
        path: '/dashboard',
        component: DashboardDetail,
        exact: true,
        icon :<Dashboard />,
        submenu: [
            {
                id:3,
                menuName: 'Application Detail',
                menuDescription: 'Application Detail',
                path: '/dashboard/applicationDetail',
                component: Dashboard,
                icon: <SettingsApplications />,
            }
        ]
    },
    {
        id: 6,
        menuName: 'Map Configuration',
        menuDescription: 'Map Configuration',
        path: '/mapConfiguration',
        component: MapConfiguration,
        exact: true,
        icon: <Map />,
        submenu: []
    },
    {
        id:2,
        menuName: 'Settings',
        menuDescription: 'Settings',
        path: '/settings',
        component: SettingsPage,
        exact: true,
        icon: <Settings />,
        submenu: []
    },
];