import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomerNavbar from "./CustomerNavbar";
import CustomerSidebar from "./CustomerSidebar";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonBase from "@material-ui/core/ButtonBase";

import the_office from '../../assets/the_office.jpg'
import cluj_hub from '../../assets/mylistings_picture_1.jpg'
import business_center from '../../assets/business_center.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minWidth: 275
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        fontFamily: 'Franklin Gothic',
        fontSize: '30px',
        color: '#47525E',
    },
    mainDiv: {
        width: '1000px',
        margin: '0 auto'
    },
    listingCard: {
        width: '300px',
        height: '310px',
        margin: '30px'
    },
    listingsToBeReviewed: {
        display: 'flex'
    }
}));

export default function CustomerMyReservations() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <CustomerNavbar/>
            <CustomerSidebar/>

            <main className={classes.content}>

                <div className={classes.appBarSpacer}/>

                <div className={classes.mainDiv}>
                    Completed Reservations
                        <div className={classes.listingsToBeReviewed}>
                            <Card className={classes.listingCard}>
                                <CardContent>
                                    Cluj Hub
                                </CardContent>
                                <ButtonBase className={classes.image}>
                                    <img src={cluj_hub} width="300" height="200"/>
                                </ButtonBase>
                                <CardActions>
                                    <Button size="small" fullWidth="300" disabled={true}>Rated 4/5</Button>
                                </CardActions>
                            </Card>

                            <Card className={classes.listingCard}>
                                <CardContent>
                                    The office
                                </CardContent>
                                <ButtonBase className={classes.image}>
                                    <img src={the_office}
                                         width="300"
                                         height="200"
                                         onClick={() => window.location.href='/write_review'}/>
                                </ButtonBase>
                                <CardActions>
                                    <Button onClick={() => window.location.href='/write_review'}
                                            size="small"
                                            fullWidth="300">Give feedback</Button>
                                </CardActions>
                            </Card>
                        </div>

                    Upcoming Reservations
                    <div className={classes.listingsToBeReviewed}>
                        <Card className={classes.listingCard}>
                            <CardContent>
                                Business Center
                            </CardContent>
                            <ButtonBase className={classes.image}>
                                <img src={business_center} width="300" height="200"/>
                            </ButtonBase>
                        </Card>
                    </div>

                </div>

            </main>
        </div>
    );
}


