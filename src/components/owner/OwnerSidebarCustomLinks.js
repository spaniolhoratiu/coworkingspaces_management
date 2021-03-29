import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import logo_coworking from '../../assets/logo_coworking.jpg'
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {AddCircle, Delete, Edit, ImportContacts, LocalOffer, Message, MoneyOff, Today} from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));


export default function OwnerSidebarCustomLinks(props){

    const classes = useStyles();
    const [open] = React.useState(true);

    return(
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}>
            {/* The website logo */}
            <div className={classes.toolbarIcon}>
                <div className="logo">
                    <a alt="logo" href="/owner_home">
                        <img alt="Logo" src={logo_coworking} width="100%" height="50%"/>
                    </a>
                </div>
            </div>
            <Divider/>
            {/* the content of this list will be changed for other pages */}
            <List>
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
                        <Link color="inherit" onClick={event =>  window.location.href='/generate_discount_code_page1'}>
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
                        <Link color="inherit" onClick={event =>  window.location.href = props.editListingLink}>
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
            </List>
        </Drawer>
    );
}
