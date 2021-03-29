import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import {useGoogleMaps} from "react-hook-google-maps";
import CustomerNavbar from "./CustomerNavbar";
import CustomerSidebar from "./CustomerSidebar";
import Text from "recharts/lib/component/Text";
import Tooltip from "@material-ui/core/Tooltip";
import FollowSpace from "./FollowSpace";
import ChatCustomer from "./Chat"


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
    mainButtonDiv: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '4%',
        padding: '30px'
    },
}));

export default function CustomerListingDetails(props) {
    const classes = useStyles();

    const totalSpacesListElements = [];
    props.totalSpaces.map(currentSpace => totalSpacesListElements.push(<li
        className={classes.detailsContent}>{currentSpace}</li>));

    const {ref, map, google} = useGoogleMaps(
        "AIzaSyCGZVT5WOLMKMpPqwO-X5xXa6agplsk1gI", // Horatiu: Asta e API Key-ul meu de la Google. Nu stiu cand(daca?) expira. Daca e cazul sa expire pana la predare, ii arat cuiva din echipa cum sa faca rost de unul.
        {
            center: {lat: props.mapLatitude, lng: props.mapLongitude},
            zoom: props.zoom,
        },
    );

    const markerPositions = {lat: props.mapLatitude, lng: props.mapLongitude};

    if (map) {
        new google.maps.Marker({position: markerPositions, map});
    }

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
                    {props.title}
                </div>

                <div className={classes.marginLeftAndRight} style={{display: "flex", justifyContent: "center"}}>
                    <img alt="header" className={classes.image} src={props.image}/>
                </div>

                <div className={classes.marginLeftAndRight} style={{display: "flex", marginTop: "1%"}}>
                    <div style={{width: "60%"}}>
                        <div>
                            Details
                        </div>

                        <div className={classes.detailsContent}>
                            {/*In central Cluj-Napoca, I offer 3 office spaces to freelancers that wish for have a quiet workplace where they can stay motivated. Cluj Hub is a renown popular office space that has been in place since 2005. It hosted many events over the years and many people have chosen to work here instead of from home thanks to the central location and relaxing atmopshere.*/}
                            {props.details}
                        </div>
                    </div>

                    <div style={{width: "40%", paddingLeft: "5%"}}>
                        <div>
                            Total spaces
                        </div>
                        <div>
                            <ul style={{margin: "0px"}}> {totalSpacesListElements} </ul>
                        </div>
                    </div>
                </div>

                <div className={classes.marginLeftAndRight} style={{marginTop: "2%"}}>
                    Our Location
                </div>

                <div className={classes.marginLeftAndRight}
                     style={{display: "flex", justifyContent: "center", marginTop: "1%", marginBottom: "5%"}}>
                    <div ref={ref} style={{height: 500, width: "90%"}}>
                    </div>
                </div>

                <div className={classes.mainButtonDiv}>
                    <div className={classes.buttonForReservation}>
                        <Tooltip title="Click here to reserve this place" placement="right">
                            <Button variant="outlined" size="large" color="primary"
                                    onClick={event => window.location.href = '/customer_request_reservation'}>
                                <Text style={{color: 'black'}}>Request a reservation</Text>
                            </Button>
                        </Tooltip>
                    </div>

                    <FollowSpace/>

                    <div className={classes.buttonForReservation}>
                            <Button variant="outlined" size="large" color="primary" onClick={event =>  window.location.href='/chat_customer'}>
                                <Text style={{color: 'black'}}>Contact the owner</Text>
                            </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}


