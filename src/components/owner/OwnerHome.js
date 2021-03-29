import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { ownerSidebarItems } from './OwnerSidebarItems';
import home_img from '../../assets/home_img.jpg';
import logo_coworking from '../../assets/logo_coworking.jpg'
import OwnerNavbar from "./OwnerNavbar";
import chat_icon from '../../assets/chat_icon.png';

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
    boxDiv: {
        transition: 'box-shadow .3s',
        width: '100px',
        height: '100px',
        paddingTop: '600px',
        background: '#fff',
        "&:hover": {
            cursor: 'pointer',
        }
    }
}));

export default function OwnerHome() {
    const classes = useStyles();
    const [open] = React.useState(true);

    return (
        <div className={classes.root}>
            <CssBaseline />

            {/*Navbar*/}
            <OwnerNavbar />

            {/* Sidebar */}
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                {/* The website logo */}
                <div className={classes.toolbarIcon}>
                    <div className="logo">
                        <a href="/owner_home">
                            <img src={logo_coworking} width="100%" height="50%" />
                        </a>
                    </div>
                </div>
                <Divider />
                {/* the content of this list will be changed for other pages */}
                <List>{ownerSidebarItems}</List>
            </Drawer>

            {/* the page content */}
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className="homepage">

                    <div className="wallpaper">
                        <img src={home_img} width="100%" />
                    </div>

                    <div className={classes.boxDiv} onClick={event => window.location.href = '/chat'}>
                        <img src={chat_icon} width="100" height="100" />
                    </div>

                </div>
            </main>
        </div>
    );
}
