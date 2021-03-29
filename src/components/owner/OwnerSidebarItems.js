import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from "@material-ui/core/Link";
import {AddCircle, ImportContacts, Message, Today, MoneyOff, LocalOffer, Edit, Delete} from "@material-ui/icons";

export const ownerSidebarItems = (
    <div>
        <ListSubheader inset>Quick actions</ListSubheader>

        <ListItem button>
            <ListItemIcon>
                <ImportContacts/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Reviews"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddCircle/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Add listings"/>
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

export const ownerSidebarItemsAndListingItems = (
    <div>
        <ListSubheader inset>Quick actions</ListSubheader>

        <ListItem button>
            <ListItemIcon>
                <ImportContacts/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Reviews"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddCircle/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Add listings"/>
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

        <ListSubheader inset>Listing actions</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <MoneyOff/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Discount Code"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AddCircle/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='/create_event'}>
                <ListItemText primary="Create Event"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LocalOffer/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='/choose_payment_plans'}>
                <ListItemText primary="Promote"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Edit/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Edit Listing"/>
            </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Delete/>
            </ListItemIcon>
            <Link color="inherit" onClick={event =>  window.location.href='#'}>
                <ListItemText primary="Delete Listing"/>
            </Link>
        </ListItem>

    </div>
);