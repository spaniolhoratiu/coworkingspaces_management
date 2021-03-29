import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OwnerNavbar from "../owner/OwnerNavbar";
import OwnerSidebar from "../owner/OwnerSidebar";
import MyListingsPicture1 from "../../assets/mylistings_picture_1.jpg"
import MyListingsPicture2 from "../../assets/mylistings_picture_2.jpg"
import MyListingsPicture3 from "../../assets/mylistings_picture_3.jpg"
import OwnerListing from "./OwnerListing";

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
    pageTitle: {
        color: '#47525E',
        marginTop: '1%',
        marginLeft: '2%',
        marginBottom: '1%'
    },
}));

export default function OwnerMyListings() {
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

                <div className={classes.pageTitle}>
                    My listings
                </div>


                <OwnerListing
                    image={MyListingsPicture2}
                    title="Cluj Business Center Offices"
                    attributes={[ "Cluj-Napoca",
                    "Near Iulius Mall",
                    "20+ offices",
                    "From 25$/8h"]}
                    seeMoreLink="/listing/2"
                />

                <OwnerListing
                    image={MyListingsPicture1}
                    title="Cluj Hub Offices"
                    attributes={[ "Cluj-Napoca",
                        "Rare finding",
                        "4.96/5 stars",
                        "Only 2 vacant spaces left"]}
                    seeMoreLink="/listing/1"
                />

                <OwnerListing
                    image={MyListingsPicture3}
                    title="The Office Cluj-Napoca"
                    attributes={[ "Cluj-Napoca",
                        "Very central",
                        "Business building",
                        "Contact for price"]}
                    seeMoreLink="/listing/3"
                />



            </main>
        </div>
    );
}
