import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from "@material-ui/core/Link";
import {ImportContacts} from "@material-ui/icons";

export const settingsSidebarItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <ImportContacts/>
            </ListItemIcon>
            <Link color="inherit" onClick={event => window.location.href = '/settings'}>
                <ListItemText primary="NotificationSeting"/>
            </Link>
        </ListItem>
    </div>
);
