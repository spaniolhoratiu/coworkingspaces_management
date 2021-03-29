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
    pageTitle: {
        marginTop: '1%',
        marginBottom: '1%',
        fontWeight: 'bold',
        marginLeft: "2%",
        marginRight: "2%"
    },
    containerDiv: {
        // padding: '20px',
        marginLeft: '20px',
        width: '100%',
        overflow: 'hidden',
    },
    leftDiv: {
        marginTop: '30px',
        width: '300px',
        float: 'left',
    },
    rightDiv: {
        // marginLeft: '320px',
    },
    datePickerDiv: {
        padding: '30px',
    },
    mainDiv: {
        width: '800px',
        margin: '0 auto',
    },
    button: {
        marginLeft: '60px',
    },

}));

export default function GenerateDiscountCodePage1() {
    const classes = useStyles();

    const [value, setValue] = React.useState('fixed_sum');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
                    <div className={classes.pageTitle}>
                        Generate Discount Code for your Cluj Hub Office
                    </div>

                    <div className={classes.containerDiv}>
                        <div className={classes.leftDiv}>
                            <Box m={1} pt={0}>
                                <TextField id="outlined-basic" type="number" label="Type discount amount"
                                           variant="outlined"/>
                            </Box>
                        </div>
                        <div className={classes.rightDiv}>
                            <Box m={2} pt={0}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Discount Code Type:</FormLabel>
                                    <RadioGroup aria-label="sorting" name="sorting1" value={value}
                                                onChange={handleChange}>
                                        <FormControlLabel value="fixed_sum" control={<Radio/>} label="Fixed Sum"/>
                                        <FormControlLabel value="percentage" control={<Radio/>} label="Percentage"/>
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </div>
                    </div>

                    <div className={classes.datePickerDiv}>
                        <h6>Choose the availability period for the Discount Code:</h6>
                        <MyDatePicker/>

                        <Button variant="outlined" size="large" color="primary" className={classes.button}
                                onClick={event => window.location.href = '/generate_discount_code_page2'}>
                            <Text style={{color: 'black'}}>Generate Code</Text>
                        </Button>
                    </div>
                </div>

            </main>
        </div>
    );
}


