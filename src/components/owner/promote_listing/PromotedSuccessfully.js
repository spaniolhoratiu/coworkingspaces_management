import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OwnerNavbar from "../OwnerNavbar";
import OwnerSidebar from "../OwnerSidebar";
import Button from "@material-ui/core/Button";

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
        fontSize: '40px',
    },
    messages: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2%',
        color: '#8190A5',
    },
    buttons:{
        backgroundColor: '#47525E',
        color: 'white',
        height: '100px',
        width: '300px',
        fontSize: '30px',
        textTransform: 'capitalize',
    },
    buttonsContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '4%',
    },
}));

export default function PromotedSuccessfully() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline/>

            {/*Navbar*/}
            <OwnerNavbar/>

            {/*Sidebar*/}
            <OwnerSidebar/>

            {/* the page content */}
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>

                <div className={classes.messages}>Thank you!</div>
                <div className={classes.messages}>Your listing will shortly be updated as promoted!</div>

                <div className={classes.buttonsContainer}>
                    <Button onClick={() =>  window.location.href='/owner_home'}  variant="contained" className={classes.buttons}>Home</Button>
                    <Button onClick={() =>  window.location.href='/my_listings'}  variant="contained" className={classes.buttons}>My Listings</Button>
                </div>

            </main>
        </div>
    );
}
