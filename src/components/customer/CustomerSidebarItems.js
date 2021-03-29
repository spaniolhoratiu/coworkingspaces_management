import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from "@material-ui/core/Link";
import {AddCircle, ImportContacts, Message, Today} from "@material-ui/icons";

export const customerSidebarItems = (
    <div>
        {/*<ListSubheader inset>Quick actions</ListSubheader>*/}

        <ListItem button>
            <ListItemIcon>
                <ImportContacts/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='/my_reservations'}>
                <ListItemText primary="Reservations"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddCircle/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Create Reservation"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Today/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Calendar"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Message/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Messages"/>
            </Link>
        </ListItem>
    </div>
);
