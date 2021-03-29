import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// https://newoldmax.github.io/react-material-ui-form-validator/
export default class CreditCardDetailsForm extends React.Component {
    state = {
        formData: {
            teamName: '',
            description: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    render() {
        const { formData } = this.state;

        return (
            // if all fields are valid, then navigate to other page
            <ValidatorForm ref="form" onSubmit={event =>  window.location.href='/team_details'}>
                <TextValidator
                    label="Team Name"
                    onChange={this.handleChange}
                    name="teamName"
                    value={formData.teamName}
                    validators={['required', 'matchRegexp:^[a-zA-Z_ ]*$']}
                    errorMessages={['this field is required', 'should be only letters in name']}
                />
                <br />
                <TextValidator
                    label="Team Description"
                    onChange={this.handleChange}
                    name="description"
                    value={formData.description}
                    validators={['required', 'matchRegexp:^[a-zA-Z_ ]*$']}
                    errorMessages={['this field is required', 'should be only letters in name']}
                />
                <br/>
                <Button color="primary" variant="contained" type="submit">
                    Create Team
                </Button>
            </ValidatorForm>
        );
    }
}
