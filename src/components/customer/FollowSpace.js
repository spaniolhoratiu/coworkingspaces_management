import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Text from "recharts/lib/component/Text";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    buttonDiv: {
        alignItems: 'center',
    },
}));

export default function SimpleModal() {
    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { all_events, upcoming_events, new_available_period, changes_from_owner, discount_codes } = state;

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">What news would you like to see?</h2>

            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={all_events} onChange={handleChange} name="all_events" />
                        }
                        label="All Events"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={upcoming_events} onChange={handleChange} name="upcoming_events" />
                        }
                        label="Upcoming Events"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={new_available_period} onChange={handleChange} name="new_available_period" />
                        }
                        label="New Available Period"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={changes_from_owner} onChange={handleChange} name="changes_from_owner" />
                        }
                        label="Changes from Owner"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={discount_codes} onChange={handleChange} name="discount_codes" />
                        }
                        label="Discount Codes"
                    />
                </FormGroup>
            </FormControl>

            <br/><br/>

            <div className={classes.buttonDiv}>
                <Tooltip title="Click here to follow this place" placement="right">
                    <Button variant="outlined" size="large" color="primary" onClick={handleClose}>
                        <Text style={{color: 'black'}}>Submit</Text>
                    </Button>
                </Tooltip>
            </div>
        </div>
    );

    return (
        <div>
            <div className={classes.buttonDiv}>
                <Tooltip title="Click here to follow this place" placement="right">
                    <Button variant="outlined" size="large" color="primary" onClick={handleOpen}>
                        <Text style={{color: 'black'}}>Follow</Text>
                    </Button>
                </Tooltip>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}


