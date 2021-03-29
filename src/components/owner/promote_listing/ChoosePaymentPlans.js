import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OwnerNavbar from "../OwnerNavbar";
import Button from "@material-ui/core/Button";
import PaymentPlan from "./PaymentPlan"
import OwnerSidebar from "../OwnerSidebar";

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
    listingName: {
        color: '#47525E',
        marginTop: '1%',
        marginLeft: '2%',
        marginBottom: '1%'
    },
    choosePaymentPlan: {
        color: 'white',
        backgroundColor: '#969FAA',
        textAlign: 'center',
        marginLeft: '4%',
        marginRight: '4%'
    },
    nextButton:{
        backgroundColor: '#47525E',
        color: 'white',
        height: '100px',
        width: '300px',
        fontSize: '30px',
        textTransform: 'capitalize',
    },
    nextButtonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4%',
    },
}));

export default function ChoosePaymentPlans() {
    const classes = useStyles();
    const [isPlan1Selected, setPlan1Selected] = useState(false);
    const [isPlan2Selected, setPlan2Selected] = useState(false);

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
                {/*<div className="wallpaper">*/}
                {/*    <img src={home_img} width="100%"/>*/}
                {/*</div>*/}

                <div className={classes.listingName}>
                    Cluj Hub Offices
                </div>

                <div className={classes.choosePaymentPlan}>
                    Choose a payment plan
                </div>


                {/*{paymentPlans}*/}
                <div  onClick={() => {
                    setPlan1Selected(isPlan1Selected => !isPlan1Selected);
                    setPlan2Selected(false);
                        }}>
                    <PaymentPlan
                    isSelected={isPlan1Selected}
                    title="Standard" features={[
                    "3.99 Euros",
                    "-7 days of promoting in the listings",
                    "-3 automatic renewances of the listing"]}/>
                </div>
                {/*<PaymentPlan onClick={() => setIsPlan2Selected(isPlan2Selected => !isPlan2Selected)}*/}
                {/*             isSelected={isPlan2Selected}*/}

                <div  onClick={() => {
                    setPlan2Selected(isPlan2Selected => !isPlan2Selected);
                    setPlan1Selected(false);
                    }}>
                <PaymentPlan
                    isSelected={isPlan2Selected}
                    title="Pro" features={[
                    "7.98 Euros",
                    "-9 automatic renewances of the listing",
                    "-3 automatic renewances of the listing",
                    "-7 days of first page promoting"]}/>
                </div>

                <div className={classes.nextButtonContainer}>
                    <Button onClick={() =>  window.location.href='/choose_payment_mechanism'} disabled={!isPlan1Selected && !isPlan2Selected} variant="contained" className={classes.nextButton}>Next</Button>
                </div>

            </main>
        </div>
    );
}
