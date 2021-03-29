import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import home_img from '../../assets/home_img.jpg';
import logo_coworking from '../../assets/logo_coworking.jpg'
import the_office from '../../assets/the_office.jpg'
import cluj_hub from '../../assets/mylistings_picture_1.jpg'
import business_center from '../../assets/business_center.jpg'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";
import Text from "recharts/lib/component/Text";
import {customerSidebarItems} from "../customer/CustomerSidebarItems";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ListItem from "@material-ui/core/ListItem";
import ButtonBase from "@material-ui/core/ButtonBase";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Box from "@material-ui/core/Box";
// import { DateRangePicker } from 'react-date-range';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Component} from 'react';
import {MyDatePicker} from "./MyDatePicker";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";


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
    },
    fixedHeight: {
        height: 240,
    },
    rootCard: {
        flexGrow: 1,
        padding: '15px',
        // margin: '20px',
        marginRight: '10px',
        marginLeft: '10px',
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
    availability_period: {
        width: "100%",
        display: "table"
    },
    availability_period_left: {
        width: "600px",
        display: "table-cell"
    },
    availability_period_right: {
        display: "table-cell"
    },

}));

export default function Discover() {
    const classes = useStyles();
    const [open] = React.useState(true);

    const [value, setValue] = React.useState('place_name');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date().toLocaleString());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>

            {/*Navbar*/}
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <div component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <Button size="large" onClick={event => window.location.href = '/customer_home'}><Text
                            style={{color: 'white'}}>Home</Text></Button>
                        <Button size="large" onClick={event => window.location.href = '/discover'}><Text
                            style={{color: 'white'}}>Discover</Text></Button>
                        <Button size="large" onClick={event => window.location.href = '/my_account'}><Text
                            style={{color: 'white'}}>My Account</Text></Button>
                        <Button size="large" onClick={event => window.location.href = '/my_listings'}><Text
                            style={{color: 'white'}}>My listings</Text></Button>
                        <Button size="large" onClick={event => window.location.href = '/others'}><Text
                            style={{color: 'white'}}>Others</Text></Button>
                        <Button size="large" onClick={event => window.location.href = '/customer_settings'}><Text
                            style={{color: 'white'}}>Settings</Text></Button>
                    </div>
                    <IconButton color="inherit">
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>

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

                {/*<List>{customerSidebarItems}</List>*/}

                {/* searching fields */}
                {/* adding text field with search button */}
                <Box m={1} pt={0}>
                    <TextField id="outlined-basic" label="Type place name" variant="outlined"
                               InputProps={{
                                   endAdornment: (
                                       <Tooltip title="Click here to find the listing for the specified place."
                                                placement="right">
                                           <InputAdornment>
                                               <IconButton>
                                                   <SearchIcon onClick={event => window.location.href = '/discover'}/>
                                               </IconButton>
                                           </InputAdornment>
                                       </Tooltip>
                                   )
                               }}
                    />
                </Box>
                {/* adding text field with search button */}
                <Box m={1} pt={0}>
                    <TextField id="outlined-basic" label="Type owner name" variant="outlined"
                               InputProps={{
                                   endAdornment: (
                                       <Tooltip title="Click here to find all listings of the specified owner."
                                                placement="right">
                                           <InputAdornment>
                                               <IconButton>
                                                   <SearchIcon onClick={event => window.location.href = '/discover'}/>
                                               </IconButton>
                                           </InputAdornment>
                                       </Tooltip>
                                   )
                               }}
                    />
                </Box>

                {/* sorting */}
                <Box m={2} pt={0}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Sort by:</FormLabel>
                        <RadioGroup aria-label="sorting" name="sorting1" value={value} onChange={handleChange}>
                            <FormControlLabel value="price" control={<Radio/>} label="Price"/>
                            <FormControlLabel value="owner_name" control={<Radio/>} label="Owner Name"/>
                            <FormControlLabel value="place_name" control={<Radio/>} label="Place Name"/>
                            <FormControlLabel value="nr_of_reviews" control={<Radio/>} label="Number of reviews"/>
                        </RadioGroup>
                    </FormControl>
                </Box>

                {/* available places */}
                <Box m={1} pt={0}>
                    <TextField id="outlined-basic" type="number" label="Type nr of places" variant="outlined"
                               InputProps={{
                                   endAdornment: (
                                       <Tooltip
                                           title="Click here to find all listings that can accommodate the needed number of people."
                                           placement="right">
                                           <InputAdornment>
                                               <IconButton>
                                                   <SearchIcon onClick={event => window.location.href = '/discover'}/>
                                               </IconButton>
                                           </InputAdornment>
                                       </Tooltip>
                                   )
                               }}
                    />
                </Box>

                <br/>
                <Box m={2} pt={0}>
                    <div className={classes.availability_period}>
                        <div className={classes.availability_period_left}>
                            <ListItemText primary="Availability period" className={classes.availability_period}/>
                        </div>
                        <div className={classes.availability_period_right}>
                            {/*<MyDatePicker/>*/}
                        </div>
                    </div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                    </MuiPickersUtilsProvider>
                </Box>
            </Drawer>

            {/* the page content */}
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3} direction="column">

                        {/* a card that contains the offer for a listing */}
                        <div className={classes.rootCard}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img src={business_center} width="200" height="200"/>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    Cluj Business Center
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Near Iulius Mall
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    2 vacant spaces
                                                </Typography>
                                                <br></br>
                                                <Typography variant="body2" color="textSecondary">
                                                    29 reviews
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Tooltip title="OWNER: Click here to edit this place" placement="right">
                                                    {/*<Button onClick={event =>  window.location.href='#'}>Register</Button>*/}
                                                    {/*<Link to="/discover">Create reservation</Link>*/}
                                                    {/*<Button variant="contained" size="large" onClick={event =>  window.location.href='#'}><Text style={{color: 'white'}}>Discover</Text></Button>*/}
                                                    <Button variant="outlined" size="large" color="primary"
                                                            onClick={event => window.location.href = '/listing/2'}><Text
                                                        style={{color: 'black'}}>View more details</Text></Button>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">Price: $30.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>

                        {/* a card that contains the offer for a listing */}
                        <div className={classes.rootCard}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img src={cluj_hub} width="200" height="200"/>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    Cluj HUB
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    In the center of Cluj-Napoca
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    9 vacant spaces
                                                </Typography>
                                                <br></br>
                                                <Typography variant="body2" color="textSecondary">
                                                    15 reviews
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Tooltip title="CUSTOMER: Click here to reserve this place"
                                                         placement="right">
                                                    {/*<Button onClick={event =>  window.location.href='#'}>Register</Button>*/}
                                                    {/*<Link to="#">Create reservation</Link>*/}
                                                    <Button variant="outlined" size="large" color="primary"
                                                            onClick={event => window.location.href = '/customer/listing/1'}><Text
                                                        style={{color: 'black'}}>View more details</Text></Button>
                                                    {/*<Button variant="contained" size="large" onClick={event =>  window.location.href='#'}><Text style={{color: 'white'}}>Discover</Text></Button>*/}
                                                </Tooltip>
                                            </Grid>

                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">Price: $10.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>

                        {/* a card that contains the offer for a listing */}
                        <div className={classes.rootCard}>
                            <Paper className={classes.paper} onClick={event => window.location.href = '/listing/1'}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img src={the_office} width="200" height="200"/>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom variant="subtitle1">
                                                    The Office
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    In the center of Cluj-Napoca
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    10 available spaces
                                                </Typography>
                                                <br></br>
                                                <Typography variant="body2" color="textSecondary">
                                                    21 reviews
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Tooltip title="OWNER: Click here to reserve this place"
                                                         placement="right">
                                                    {/*<Button onClick={event =>  window.location.href='#'}>Register</Button>*/}
                                                    {/*<Link to="/discover">Create reservation</Link>*/}
                                                    {/*<Button variant="contained" size="large" onClick={event =>  window.location.href='#'}><Text style={{color: 'white'}}>Discover</Text></Button>*/}
                                                    <Button variant="outlined" size="large" color="primary"
                                                            onClick={event => window.location.href = '/listing/3'}><Text
                                                        style={{color: 'black'}}>View more details</Text></Button>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">Price: $20.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>

                    </Grid>
                </Container>
            </main>
        </div>
    );
}
