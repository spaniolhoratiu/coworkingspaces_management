import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import OwnerNavbar from "./OwnerNavbar";
import OwnerSidebar from "./OwnerSidebar";
import {useGoogleMaps} from "react-hook-google-maps";
import OwnerSidebarWithProps from "./OwnerSidebarWithProps";
import {ownerSidebarItemsAndListingItems} from '../owner/OwnerSidebarItems';
import OwnerSidebarCustomLinks from "./OwnerSidebarCustomLinks";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {MyDatePicker} from "../commons/MyDatePicker";
import Text from "recharts/lib/component/Text";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";


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
    mainDiv: {
        width: '800px',
        margin: '0 auto',
    },
    button: {
        marginLeft: '60px',
    },
    buttonsContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '4%',
    },
    buttons:{
        backgroundColor: '#47525E',
        color: 'white',
        height: '100px',
        width: '300px',
        fontSize: '30px',
        textTransform: 'capitalize',
    },
    messages: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '2%',
    },

}));

export default function GenerateDiscountCodePage2() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>

            {/*Navbar*/}
            <OwnerNavbar/>

            {/* Sidebar */}
            <OwnerSidebar/>

            {/* the page content */}
            <main className={classes.content}>

                <div className={classes.appBarSpacer}/>

                <div className={classes.mainDiv}>

                    <h4 className={classes.messages}>All done!</h4>
                    <h4 className={classes.messages}>Your generated Discount Code is:</h4>
                    <h4 className={classes.messages}><i>mNyqAeV10</i></h4>

                    <br/>

                    <div className={classes.buttonsContainer}>
                        <Button onClick={() =>  window.location.href='/owner_home'}  variant="contained" className={classes.buttons}>Home</Button>
                        <Button onClick={() =>  window.location.href='/my_listings'}  variant="contained" className={classes.buttons}>My Listings</Button>
                    </div>

                </div>

            </main>
        </div>
    );
}


