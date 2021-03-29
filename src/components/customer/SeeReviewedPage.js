import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomerNavbar from "./CustomerNavbar";
import CustomerSidebar from "./CustomerSidebar";
import Card from "@material-ui/core/Card";
import Rating from '@material-ui/lab/Rating';
import the_office from "../../assets/the_office_cropped.jpg";

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
    }
}));

const cardStyles = makeStyles(() => ({
    cardLayout: {
        fontSize: '19px',
        marginBottom: '10px'
    }
}));

export default function SeeReviewedPage(props) {
    const classes = useStyles();
    const cards = cardStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <CustomerNavbar/>
            <CustomerSidebar/>

            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <div className={classes.mainDiv}>
                    Reviews for <i>The office</i>
                    <img src={the_office} height='60%' width='100%' alt=''/>

                    <Card className={cards.cardLayout}>
                        <div><b>Gigi Becali</b></div>
                        <div>A very big space, wide variety to choose from. Very nice! 11/10, would recommend, would come again!</div>
                        <Rating name="half-rating-read" defaultValue={5.0} precision={0.5} readOnly />
                        <div><i>written on 23/03/2019</i></div>
                    </Card>

                    <Card className={cards.cardLayout}>
                        <div><b>Ion Ionescu</b></div>
                        <div>Did not like the receptionist, dirty place, would not recommend!</div>
                        <Rating name="half-rating-read" defaultValue={1.5} precision={0.5} readOnly />
                        <div><i>written 5 days ago</i></div>
                    </Card>

                    <Card className={cards.cardLayout}>
                        <div><b>Crinela</b></div>
                        <div>{props.review}</div>
                        <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
                        <div><i>written just now</i></div>
                    </Card>
                </div>
            </main>
        </div>
    );
}