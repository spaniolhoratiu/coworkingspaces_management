import React, { useState } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
    listingStyle: {
        display: "flex",
        border: '1px solid black',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '2%',
        marginBottom: '2%',
        padding: '1%',
    },
    button:{
        backgroundColor: '#47525E',
        color: 'white',
        height: '100px',
        width: '300px',
        fontSize: '30px',
        textTransform: 'capitalize',
    },
    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ul: {
        color: '#8190A5',
        fontSize: '20px',
    },
    li: {
        marginTop: '10px',
        marginBottom:'10px',
    },
    spacebetween: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    image: {
        maxWidth: '800px',
        maxHeight: '400px',
        height: '100%',
        width: '100%',
    },
}));

export default function OwnerListing(props) {
    const classes = useStyles();

    let attributesListElements = [];
    props.attributes.map((currentAttribute) => attributesListElements.push(<li className={classes.li}>{currentAttribute}</li>));

    return (
        <div className={classes.listingStyle}>

            <div style={{backgroundColor: "blue"}}>
                <a href={props.seeMoreLink}>
                    <img className={classes.image} alt="Listing" src={props.image} />
                </a>
            </div>

            <div className={classes.spacebetween}>
                <div style={{marginLeft: '20px'}} >
                    <a style={{textDecoration: 'none', color:'#47525E'}} href={props.seeMoreLink}>
                        {props.title}
                    </a>
                    <ul className={classes.ul}>
                        {attributesListElements}
                    </ul>
                </div>

                <div className={classes.buttonContainer}>
                    <Button onClick={() =>  window.location.href=props.seeMoreLink }  variant="contained" className={classes.button}>See More</Button>
                </div>
            </div>

        </div>
    );
}
