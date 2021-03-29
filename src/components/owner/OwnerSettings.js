import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SettingsSidebar from "../commons/SettingsSidebar";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from "@material-ui/lab/Alert";
import OwnerNavbar from "../owner/OwnerNavbar";


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

    notification: {
        background: 'lightblue',
        height: '300px',
        width: '880px',
    },
    notification2: {
        background: 'lightgreen',
        height: '200px',
        width: '880px',
    },

    pushNotificationAll: {
        marginLeft: '20%',
    },
    pushNotification: {
        marginLeft: '5%',
    },

    textFieldStyle: {
        marginLeft: '10%',
    },

    formControl: {
        marginLeft: '1%',
    },
    displayNice: {
        display: 'flex'
    },

    buttonStyle: {
        marginLeft: '680px',
    },

}));


export default function OwnerSettings() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        if (event.target.name === "push_notification_in_app" || event.target.name === "push_notification_offline") {
            setState({
                ...state,
                push_notification: true,
            });
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.checked,
            });
        }
    };

    const {email, phone, push_notification_in_app, push_notification_offline, push_notification, all_people, fully_boocked} = state;

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>

            {/*Navbar*/}
            <OwnerNavbar/>

            {/* Sidebar */}
            <SettingsSidebar/>

            {/* the page content */}
            <main className={classes.content}>

                <div className={classes.appBarSpacer}/>

                <div className={classes.mainDiv}>

                    <h4>Notification Settings</h4>

                    <div className={classes.notification}>

                        Please choose what notifications you would like to enable:
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <div className={classes.displayNice}>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={email} onChange={handleChange} name="email"/>
                                            }
                                            label="Enable Email Notifications"
                                        />

                                        <TextField className={classes.textFieldStyle} id="email" label="Email"
                                                   type='email'/>
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={phone} onChange={handleChange} name="phone"/>
                                            }
                                            label="Enable Phone Notifications"
                                        />

                                        <TextField className={classes.textFieldStyle} id="phone" label="Phone"
                                                   type='phone'/>

                                    </div>
                                    <div>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={push_notification} onChange={handleChange}
                                                          name="push_notification"/>
                                            }
                                            label="Enable Push Notifications"
                                            disabled={true}
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={push_notification_in_app} onChange={handleChange}
                                                          name="push_notification_in_app"/>
                                            }
                                            label="In app"
                                            className={classes.pushNotification}
                                        />
                                        <br/>
                                        <FormControlLabel
                                            control={
                                                <Checkbox checked={push_notification_offline} onChange={handleChange}
                                                          name="push_notification_offline"/>
                                            }
                                            label="Offline"
                                            className={classes.pushNotification}
                                        />

                                    </div>
                                </div>
                            </FormGroup>
                        </FormControl>
                    </div>

                    <div className={classes.notification2}>
                        Choose what you would like to be notify about:
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={all_people} onChange={handleChange} name="people"/>
                                    }
                                    label="Notify me when people from my contact list message me"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox checked={fully_boocked} onChange={handleChange} name="booked"/>
                                    }
                                    label="Notify me when all my places are fully booked"
                                />

                                <div className={classes.buttonStyle}>
                                    <Button color="primary" variant="contained" type="submit" onClick={handleClick}>
                                        Save Preferences
                                    </Button>

                                    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success">
                                            You successfully changed your notification preferences!
                                        </Alert>
                                    </Snackbar>
                                </div>

                            </FormGroup>
                        </FormControl>
                    </div>

                </div>

            </main>
        </div>
    );
}



