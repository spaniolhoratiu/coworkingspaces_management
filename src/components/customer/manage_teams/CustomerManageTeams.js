import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomerNavbar from "../CustomerNavbar";
import CustomerSidebar from "../CustomerSidebar";
import clsx from "clsx";
import logo_coworking from "../../../assets/logo_coworking.jpg";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {customerSidebarItems} from "../CustomerSidebarItems";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {AddCircle, ImportContacts} from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import ListItemText from "@material-ui/core/ListItemText";
import happy_emoji from "../../../assets/happy_emoji.png";
import add_logo from "../../../assets/add_logo.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        fontFamily: 'Franklin Gothic',
        fontSize: '30px',
        color: '#47525E',
        // marginLeft: '2%',
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
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    mainDiv: {
        // width: '800px',
        // margin: '0 auto',
        padding: '30px',
    },
    marginLeftAndRight: {
        marginLeft: "2%",
        marginRight: "2%"
    },
    detailsContent: {
        color: '#8190A5',
        fontSize: '20px',
        margin: '0px'
    },
    boxDiv: {
        transition: 'box-shadow .3s',
        width: '200px',
        height: '200px',
        margin: '30px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        background: '#fff',
        float: 'lef',
        "&:hover": {
            boxShadow: '0 0 11px rgba(33,33,33,.2)',
            cursor: 'pointer',
        },
    },

}));

export default function CustomerManageTeams() {
    const classes = useStyles();
    const [open] = React.useState(true);

    return (
        <div className={classes.root}>
            <CssBaseline/>

            {/*Navbar*/}
            <CustomerNavbar/>

            {/* Sidebar */}
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <div className="logo">
                        <a href="/customer_home">
                            <img src={logo_coworking} width="100%" height="50%"/>
                        </a>
                    </div>
                </div>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <ImportContacts/>
                        </ListItemIcon>
                        <Link color="inherit" onClick={event =>  window.location.href='#'}>
                            <ListItemText primary="Edit Preferences"/>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircle/>
                        </ListItemIcon>
                        <Link color="inherit" onClick={event =>  window.location.href='/manage_teams'}>
                            <ListItemText primary="Manage Teams"/>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>

            {/* the page content */}
            <main className={classes.content}>

                <div className={classes.appBarSpacer}/>

                <div className={classes.mainDiv}>

                    <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your teams</h5>

                    <div className={classes.boxDiv} onClick={event =>  window.location.href='/team_chat'}>
                        <p></p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={happy_emoji} width="90" height="90"/>
                        <h6 style={{marginTop: "1px"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Stars Team
                        </h6>
                    </div>

                    <div className={classes.boxDiv} onClick={event =>  window.location.href='/create_team'}>
                        <p></p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={add_logo} width="90" height="90"/>
                        <h6 style={{marginTop: "1px"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Create Team
                        </h6>
                    </div>

                </div>

            </main>
        </div>
    );
}

