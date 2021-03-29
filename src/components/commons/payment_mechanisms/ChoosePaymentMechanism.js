import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import credit_cards from '../../../assets/credit_cards.png'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import { DateRangePicker } from 'react-date-range';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import OwnerNavbar from "../../owner/OwnerNavbar";
import OwnerSidebar from "../../owner/OwnerSidebar";


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
        cursor: 'pointer',
        // transition: 'all .25s linear',
        // boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
        // "&:hover,": {
        //     boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
        // }
    },
    rootCard: {
        flexGrow: 1,
        padding: '15px',
        // margin: '20px',
        marginRight: '300px',
        marginLeft: '300px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    group: {
        float: "left",
        flexDirection: "row",
        marginLeft: "10px"
    },
    ChoosePaymentMechanism: {
        textAlign: 'center',
    },
    divTop: {
        textAlign: 'center',
    },
    divBottom: {
        textAlign: 'center',
    }

}));

export default function ChoosePaymentMechanism() {

    const classes = useStyles();

    return(

        <div className={classes.root}>
            <CssBaseline/>

            {/*Navbar*/}
            <OwnerNavbar/>

            {/* Sidebar */}
            <OwnerSidebar/>

            {/* the page content */}
            <main className={classes.content}>

                <br></br>
                <br></br>

                {/* payment mechanisms */}
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <h1 className={classes.ChoosePaymentMechanism}>
                        How do you want to pay?
                    </h1>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3} direction="column">

                            {/* a card */}
                            <div className={classes.rootCard}>
                                <Paper className={classes.paper} onClick={event =>  window.location.href='/credit_card_details'} elevation={20}>
                                    <div className={classes.divTop}>
                                        <h2>
                                            With my Credit Card
                                        </h2>
                                    </div>
                                    <div className={classes.divBottom}>
                                        <img src={credit_cards} width="150" height="50"/>
                                    </div>
                                </Paper>
                            </div>

                            {/* a card */}
                            <div className={classes.rootCard}>
                                <Paper className={classes.paper} onClick={event =>  window.location.href='/discount_code_details'} elevation={10}>
                                    <div className={classes.divTop}>
                                        <h2>
                                            With my Discount Code
                                        </h2>
                                    </div>
                                    <div className={classes.divBottom}>
                                    </div>
                                </Paper>
                            </div>

                        </Grid>
                    </Container>
                </main>

            </main>
        </div>
    );
}
