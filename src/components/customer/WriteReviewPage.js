import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CustomerNavbar from "./CustomerNavbar";
import CustomerSidebar from "./CustomerSidebar";
import Rating from '@material-ui/lab/Rating';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import the_office from "../../assets/the_office_cropped.jpg";
import Card from "@material-ui/core/Card";

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


export default function WriteReviewPage(props) {
    const classes = useStyles();
    const cards = cardStyles();

    const [review, setReview] = React.useState(props.review);
    const [rating, setRating] = React.useState(props.rating);
    const [submitted, setSubmitted] = React.useState(false);
    const [notReviewed, setNotReviewed] = React.useState(false);
    const [isAdded, setAdded] = React.useState(false);

    const handleClick = () => {
        console.log(review);
        console.log(rating);

        if (review === '') {
            setNotReviewed(true);
        } else {
            setSubmitted(true);
            setAdded(true);
        }
    };
    const handleSubmit = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSubmitted(false);
        setNotReviewed(false);
    };
    const handleChangeReview = (event) => {
        setReview(event.target.value);
    };
    const handleChangeRating = (event) => {
        setRating(event.target.value);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <CustomerNavbar/>
            <CustomerSidebar/>

            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <div className={classes.mainDiv}>
                    Describe your experience at <i> The office</i>
                    <img src={the_office} height='60%' width='100%' alt=''/>

                    <div>
                        Existing reviews:
                    </div>
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

                    { isAdded ?
                        <Card className={cards.cardLayout}>
                            <div><b>Crinela</b></div>
                            <div>{review}</div>
                            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                            <div><i>written just now</i></div>
                        </Card> : null }


                    <div className={classes.addReview}>
                        <br/>
                        Write a review describing your experience:
                        <textarea name="body"
                                  rows='5'
                                  cols='100'
                                  placeholder={"Write your review here..."}
                                  onChange={handleChangeReview}>
                        </textarea>
                    </div>

                    <div className={classes.giveRating}>
                        Give a rating out of 5:
                        <Rating name="half-rating"
                                defaultValue={0}
                                precision={0.5}
                                onChange={handleChangeRating}
                        />
                    </div>

                    <Button outline color="primary" onClick={handleClick}>
                        Submit
                    </Button>


                    <Snackbar open={submitted} autoHideDuration={10000} onClose={handleSubmit}>
                        <Alert onClose={handleSubmit} severity={"success"}>
                            Your feedback was registered successfully!
                        </Alert>
                    </Snackbar>

                    <Snackbar open={notReviewed} autoHideDuration={5000} onClose={handleSubmit}>
                        <Alert onClose={handleSubmit} severity={"error"}>
                            You have to write a review in order to submit it!
                        </Alert>
                    </Snackbar>


                </div>
            </main>
        </div>
    );
}