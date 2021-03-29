import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomerNavbar from "./CustomerNavbar";
import CustomerSidebar from "./CustomerSidebar";
import cluj_hub from "../../assets/mylistings_cropped.jpg";
import CommentsBlock from "simple-react-comments";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Text from "recharts/lib/component/Text";

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
    button: {
        backgroundColor: '#47525E',
        color: 'white',
        height: '100px',
        width: '300px',
        fontSize: '30px',
        textTransform: 'capitalize',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        // maxWidth: '800px',
        maxHeight: '800px',
        height: 'auto',
        width: '100%',
    },
    pageTitle: {
        marginTop: '1%',
        marginBottom: '1%',
        fontWeight: 'bold',
        marginLeft: "2%",
        marginRight: "2%"
    },
    marginFromPicture: {
        marginTop: '5%',
    },
    detailsContent: {
        color: '#8190A5',
        fontSize: '20px',
        margin: '0px'
    },
    marginLeftAndRight: {
        marginLeft: "2%",
        marginRight: "2%"
    },
    // Buttons style in case buttons are going to be added later (maybe on the customer side?)
    buttons: {
        backgroundColor: '#47525E',
        color: 'white',
        height: '100px',
        width: '300px',
        fontSize: '30px',
        textTransform: 'capitalize',
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '4%',
    },
    textarea: {
        padding: '30px',
    },
    dateDiv: {
        padding: '20px',
        width: '100%',
        overflow: 'hidden',
    },
    startDateDiv: {
        width: '600px',
        float: 'left',
    },
    endDateDiv: {
        marginLeft: '620px',
    },
    buttonDiv: {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
    }

}));

export default function CustomerRequestReservation() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date().toLocaleString());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>

            {/*Navbar*/}
            <CustomerNavbar/>

            {/* Sidebar */}
            <CustomerSidebar/>

            {/* the page content */}
            <main className={classes.content}>

                <div className={classes.appBarSpacer}/>

                <div className={classes.pageTitle}>
                    Cluj Hub Offices
                </div>

                <div className={classes.marginLeftAndRight} style={{display: "flex", justifyContent: "center"}}>
                    <img src={cluj_hub} className={classes.image}/>
                </div>

                <br/>

                &nbsp;&nbsp;&nbsp;&nbsp;Tell us why you want to make this reservation
                <TextField className={classes.textarea} style={{width: "100%"}}
                           id="filled-multiline-static"
                           multiline
                           rows={6}
                           defaultValue=""
                           variant="filled"
                />
                <br/>
                <div className={classes.dateDiv}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className={classes.startDateDiv}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Choose Reservation Start Date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </div>
                        <div className={classes.endDateDiv}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Choose Reservation End Date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </div>
                    </MuiPickersUtilsProvider>
                </div>
                <br/>
                <div className={classes.buttonDiv}>
                    <Tooltip title="Click here to chose your payment method" placement="right">
                        <Button variant="outlined" size="large" color="primary" onClick={event =>  window.location.href='/choose_payment_mechanism'}>
                            <Text style={{color: 'black'}}>Send request</Text>
                        </Button>
                    </Tooltip>
                </div>
            </main>
        </div>
    );
}
