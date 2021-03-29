import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OwnerNavbar from "../OwnerNavbar";
import OwnerSidebar from "../OwnerSidebar";
import TextField from "@material-ui/core/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import {FcCheckmark} from "react-icons/all";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    inputs: {
        display: "block",
        width: '95%',
        fontSize: '35px'
    },
    form: {
        color: "#47525E",
        fontSize: '35px'
    },
    formChild: {
        margin: '2%'
    },
    createButton:{
        backgroundColor: '#47525E',
        color: 'white',
        height: '100px',
        width: '300px',
        fontSize: '40px',
        textTransform: 'capitalize',
        margin: '2%',
    },
    createButtonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4%',
    },

}));

export default function CreateEvent() {
    const classes = useStyles();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [peopleLimit, setPeopleLimit] = useState("");
    const [date, setDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const checkMarkIcon = <FcCheckmark/>;
    const datesCheckMarkIcon = <FcCheckmark style={{marginTop: '8px', marginLeft: '10px', fontSize: "15px"}}/>;

    const [titleIcon, setTitleIcon] = useState(null);
    const [descriptionIcon, setDescriptionIcon] = useState(null);
    const [peopleLimitIcon, setPeopleLimitIcon] = useState(null);
    const [dateIcon, setDateIcon] = useState(null);
    const [startTimeIcon, setStartTimeIcon] = useState(null);
    const [endTimeIcon, setEndTimeIcon] = useState(null);

    // const textOnlyRegex = /^[a-zA-Z ]*$/;
    const numbersOnlyRegex = /^[1-9]\d*$/;

    function validateTitle()
    {
        if(title !== "")
        {
            setTitleIcon(checkMarkIcon);
            // setTitleBackgroundColor("rgba(0, 255, 0, 0.2)");
            return true;
        }
        else
        {
            setTitleIcon(null);
            // setTitleBackgroundColor("rgba(255, 0, 0, 0.2)");
            return false;
        }


    }

    function validateDescription()
    {
        if(description !== "")
        {
            setDescriptionIcon(checkMarkIcon);
            // setDescriptionBackgroundColor("rgba(0, 255, 0, 0.2)");
            return true;
        }
        else
        {
            setDescriptionIcon(null);
            // setDescriptionBackgroundColor("rgba(255, 0, 0, 0.2)");
            return false;
        }
    }

    function validatePeopleLimit()
    {
        if(numbersOnlyRegex.test(peopleLimit) === true)
        {
            setPeopleLimitIcon(checkMarkIcon);
            // setPeopleLimitBackgroundColor("rgba(0, 255, 0, 0.2)");
            return true;
        }
        else
        {
            setPeopleLimitIcon(null);
            // setPeopleLimitBackgroundColor("rgba(255, 0, 0, 0.2)");
            return false;
        }
    }


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

                {/*<CreateEventContent/>*/}
                <form className={classes.form}>

                <div className={classes.formChild}>
                    New Event
                </div>

                <div className={classes.formChild}>
                    <label>Title:</label>
                    <TextField
                        className={classes.inputs}
                        fullWidth={true}
                        name="Title"
                        placeholder="Title of the event."
                        autoComplete="off"
                        variant="outlined"
                        value={title}
                        onChange={e => setTitle(e.target.value) }
                        onBlur={e => validateTitle() }
                        style={{backgroundColor: "#FFFFFF"}}
                        InputProps={{
                            endAdornment: titleIcon
                        }}
                    />
                </div>

                <div className={classes.formChild}>
                    <label>Description:</label>
                    <TextField
                        className={classes.inputs}
                        multiline={true}
                        fullWidth={true}
                        rows={3}
                        name="Description"
                        placeholder="Details about the event."
                        autoComplete="off"
                        variant="outlined"
                        value={description}
                        onChange={e => { setDescription(e.target.value) } }
                        onBlur = { validateDescription }
                        style={{backgroundColor: "#FFFFFF"}}
                        InputProps={{
                            endAdornment: descriptionIcon
                        }}
                    />
                </div>

                <div className={classes.formChild}>
                    <label>People Limit:</label>
                    <TextField
                        className={classes.inputs}
                        fullWidth={true}
                        name="People Limit"
                        placeholder="Number of maximum people allowed."
                        autoComplete="off"
                        variant="outlined"
                        value={peopleLimit}
                        onChange={e => { setPeopleLimit(e.target.value) } }
                        onBlur={validatePeopleLimit}
                        style={{backgroundColor: "#FFFFFF"}}
                        InputProps={{
                            endAdornment: peopleLimitIcon
                        }}
                    />
                </div>

                <div style={{marginLeft: '2%', marginTop:'2%', marginRight:"2%", marginBottom:"0"}}>
                    Date and Time:
                </div>

                <div style={{marginLeft: '2%',marginTop: '1%', marginBottom: '1%', fontSize: '20px'}}>
                    <label>Date: </label>
                    <div style={{display: "flex", maxWidth: "200px"}}>
                        <DatePicker
                            placeholderText="Click to select a date."
                            selected={date}
                            onChange={date => {
                                setDate(date);
                                if(date !== null)
                                {
                                    setDateIcon(datesCheckMarkIcon);
                                }else
                                {
                                    setDateIcon(null);
                                }
                            }}
                            shouldCloseOnSelect={false}
                            todayButton="Today"
                            minDate={new Date()}
                            InputProps={{
                                endAdornment: dateIcon
                            }}
                        />
                    {dateIcon}
                    </div>

                </div>

                <div style={{marginLeft: '2%',marginTop: '1%', marginBottom: '1%', fontSize: '20px'}}>
                    <label>From: </label>
                    <div style={{display: "flex", maxWidth: "200px"}}>
                        <DatePicker
                        placeholderText="Click to select a start time."
                        selected={startTime}
                        onChange={startTime => {
                            setStartTime(startTime);
                            // validateStartTime();
                            if(startTime !== null && endTime === null)
                            {
                                setStartTimeIcon(datesCheckMarkIcon);
                            } else if(startTime !== null && endTime !== null && startTime < endTime)
                            {
                                setStartTimeIcon(datesCheckMarkIcon);
                            }
                            else
                            {
                                setStartTimeIcon(null);
                                setEndTimeIcon(null);
                            }
                            if(endTime !== null && endTime > startTime)
                            {
                                setEndTimeIcon(datesCheckMarkIcon);
                            }
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                    {startTimeIcon}
                    </div>

                </div>

                <div style={{marginLeft: '2%',marginTop: '1%', marginBottom: '1%', fontSize: '20px'}}>
                    <label>To: </label>
                    <div style={{display: "flex", maxWidth: "200px"}}>
                    <DatePicker
                        placeholderText="Click to select an end time."
                        selected={endTime}
                        onChange={endTime => {
                            setEndTime(endTime);
                             // validateEndTime();
                            if(startTime !== null && endTime !== null && endTime > startTime)
                            {
                                setEndTimeIcon(datesCheckMarkIcon);
                            }else
                            {
                                setEndTimeIcon(null);
                            }
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                    {endTimeIcon}
                    </div>
                </div>

                <div className={classes.createButtonContainer}>
                    <Button onClick={() =>  window.location.href='/event_created_successfully'}
                            disabled={titleIcon === null ||
                                    descriptionIcon === null ||
                                    peopleLimitIcon === null ||
                                    dateIcon === null ||
                                    startTimeIcon === null ||
                                    endTimeIcon === null}
                            variant="contained"
                            className={classes.createButton}>Create</Button>
                </div>

                </form>


            </main>
        </div>
    );
}
