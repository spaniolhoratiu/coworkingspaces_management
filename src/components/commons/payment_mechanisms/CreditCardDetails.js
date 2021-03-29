import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import OwnerNavbar from "../../owner/OwnerNavbar";
import OwnerSidebar from "../../owner/OwnerSidebar";
import CreditCardDetailsForm from "./CreditCardDetailsForm";

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
    messages: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2%',
        color: '#8190A5',
        fontSize: '40px',
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

                {/* payment mechanisms */}
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <div className={classes.messages}>Please enter your credit card details</div>
                    <div style={{
                        textAlign: "center",}}>
                        <CreditCardDetailsForm/>
                    </div>
                </main>

            </main>
        </div>
    );
}
