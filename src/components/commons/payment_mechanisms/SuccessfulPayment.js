import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import OwnerNavbar from "../../owner/OwnerNavbar";
import OwnerSidebar from "../../owner/OwnerSidebar";
import happy_emoji from "../../../assets/happy_emoji.png";

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
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    alignment: {
        textAlign: 'center',
    },

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
                    <div style={{padding: "30px", textAlign: "center",}}>
                        <div>
                            <h1>
                                Thank you!&nbsp;&nbsp;
                                <img src={happy_emoji} width="50" height="50"/>
                            </h1>
                        </div>
                        <div>
                            <h2>The request was successfully placed.</h2>
                        </div>
                        <div>
                            <h3>Please check your email.</h3>
                        </div>
                    </div>
                </main>

            </main>
        </div>
    );
}
