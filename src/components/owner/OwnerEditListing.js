import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OwnerNavbar from "../owner/OwnerNavbar";
import OwnerSidebar from "../owner/OwnerSidebar";
import TextField from "@material-ui/core/TextField";
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

export default function OwnerEditListing(props) {
    const classes = useStyles();

    const [title, setTitle] = useState(props.title);
    const [details, setDetails] = useState(props.details);
    const [image, setImage] = useState({ preview: props.image, raw: props.image });
    const [totalSpaces, setTotalSpaces] = useState(props.totalSpaces);
    const [mapLatitude, setMapLatitude] = useState(props.mapLatitude);
    const [mapLongitude, setMapLongitude] = useState(props.mapLongitude);
    const [zoom, setZoom] = useState(props.zoom);

    const checkMarkIcon = <FcCheckmark/>;

    const [titleIcon, setTitleIcon] = useState(checkMarkIcon);
    const [detailsIcon, setDetailsIcon] = useState(checkMarkIcon);
    const [totalSpacesIcon, setTotalSpacesIcon] = useState(checkMarkIcon);
    const [mapLatitudeIcon, setMapLatitudeIcon] = useState(checkMarkIcon);
    const [mapLongitudeIcon, setMapLongitudeIcon] = useState(checkMarkIcon);
    const [zoomIcon, setZoomIcon] = useState(checkMarkIcon);

    // const textOnlyRegex = /^[a-zA-Z ]*$/;
    const numbersOnlyRegex = /^[1-9]\d*$/;
    const longitudeLatitudeRegex = /^\d*\.?\d*$/;

    function validateTitle()
    {
        if(title !== "")
        {
            setTitleIcon(checkMarkIcon);
            return true;
        }
        else
        {
            setTitleIcon(null);
            return false;
        }
    }

    function validateDetails()
    {
        if(details !== "")
        {
            setDetailsIcon(checkMarkIcon);
            return true;
        }
        else
        {
            setDetailsIcon(null);
            return false;
        }
    }

    function validateTotalSpaces()
    {
        if(totalSpaces !== "")
        {
            setTotalSpacesIcon(checkMarkIcon);
            return true;
        }
        else
        {
            setTotalSpacesIcon(null);
            return false;
        }
    }

    function validateMapLatitude()
    {
        if(longitudeLatitudeRegex.test(mapLatitude) === true)
        {
            setMapLatitudeIcon(checkMarkIcon);
            return true;
        }
        else
        {
            setMapLatitudeIcon(null);
            return false;
        }
    }

    function validateMapLongitude()
    {
        if(longitudeLatitudeRegex.test(mapLongitude) === true)
        {
            setMapLongitudeIcon(checkMarkIcon);
            return true;
        }
        else
        {
            setMapLongitudeIcon(null);
            return false;
        }
    }

    function validateZoom()
    {
        if(numbersOnlyRegex.test(zoom) === true)
        {
            setZoomIcon(checkMarkIcon);
            return true;
        }
        else
        {
            setZoomIcon(null);
            return false;
        }
    }

    const uploadPhoto = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

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
                        Edit Listing
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
                            value={details}
                            onChange={e => { setDetails(e.target.value) } }
                            onBlur = { validateDetails }
                            style={{backgroundColor: "#FFFFFF"}}
                            InputProps={{
                                endAdornment: detailsIcon
                            }}
                        />
                    </div>

                    <div className={classes.formChild}>
                        <label>Total Spaces:</label>
                        <TextField
                            className={classes.inputs}
                            multiline={true}
                            fullWidth={true}
                            rows={3}
                            name="Total Spaces"
                            placeholder="Total spaces your listing offers."
                            autoComplete="off"
                            variant="outlined"
                            value={totalSpaces}
                            onChange={e => { setTotalSpaces(e.target.value) } }
                            onBlur = { validateTotalSpaces }
                            style={{backgroundColor: "#FFFFFF"}}
                            InputProps={{
                                endAdornment: totalSpacesIcon
                            }}
                        />
                    </div>


                    <div className={classes.formChild}>
                        <label>Map Latitude:</label>
                        <TextField
                            className={classes.inputs}
                            fullWidth={true}
                            name="Latitude"
                            placeholder="Latitude of your listing location."
                            autoComplete="off"
                            variant="outlined"
                            value={mapLatitude}
                            onChange={e => setMapLatitude(e.target.value) }
                            onBlur={ validateMapLatitude }
                            style={{backgroundColor: "#FFFFFF"}}
                            InputProps={{
                                endAdornment: mapLatitudeIcon
                            }}
                        />
                    </div>

                    <div className={classes.formChild}>
                        <label>Map Longitude:</label>
                        <TextField
                            className={classes.inputs}
                            fullWidth={true}
                            name="Longitude"
                            placeholder="Longitude of your listing location."
                            autoComplete="off"
                            variant="outlined"
                            value={mapLongitude}
                            onChange={e => setMapLongitude(e.target.value) }
                            onBlur={ validateMapLongitude }
                            style={{backgroundColor: "#FFFFFF"}}
                            InputProps={{
                                endAdornment: mapLongitudeIcon
                            }}
                        />
                    </div>

                    <div className={classes.formChild}>
                        <label>Map Zoom:</label>
                        <TextField
                            className={classes.inputs}
                            fullWidth={true}
                            name="Zoom"
                            placeholder="Zoom of your listing location."
                            autoComplete="off"
                            variant="outlined"
                            value={zoom}
                            onChange={e => setZoom(e.target.value) }
                            onBlur={ validateZoom }
                            style={{backgroundColor: "#FFFFFF"}}
                            InputProps={{
                                endAdornment: zoomIcon
                            }}
                        />
                    </div>

                    <div className={classes.formChild}>
                        <label>Photo:</label>
                        <label htmlFor="upload-button">
                            {image.preview ? (
                                <img src={image.preview} alt="dummy" style={{width: "100%",  height: "auto", maxHeight:"800px"}}  />
                            ) : (
                                // <Button>Upload</Button>
                                <div style={{backgroundColor: "white", border: "1px solid grey", borderRadius:"10px", textAlign:"center", width:"10%"}}>Click to upload a photo!</div>
                            )}
                        </label>

                        <input
                            type="file"
                            id="upload-button"
                            style={{ display: "none" }}
                            onChange={uploadPhoto}
                        />
                    </div>



                    <div className={classes.createButtonContainer}>
                        <Button onClick={() =>  window.location.href='/edit_listing_successfully'}
                                disabled={titleIcon === null ||
                                detailsIcon === null ||
                                totalSpacesIcon === null ||
                                mapLatitudeIcon === null ||
                                mapLongitudeIcon === null ||
                                zoomIcon === null}
                                variant="contained"
                                className={classes.createButton}>Confirm</Button>
                    </div>


                </form>
                <a title="online chat icon png PNG image with transparent background@toppng.com" href="https://toppng.com/online-chat-icon-png-PNG-free-PNG-Images_129463" target="_blank">online chat icon png PNG image with transparent background@toppng.com</a>


            </main>
        </div>
    );
}