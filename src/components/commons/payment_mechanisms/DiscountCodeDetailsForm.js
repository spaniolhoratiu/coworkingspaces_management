import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// https://newoldmax.github.io/react-material-ui-form-validator/
export default class CreditCardDetailsForm extends React.Component {
    state = {
        formData: {
            discountCode: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    // handleSubmit = () => {
    //     this.setState({ submitted: true }, () => {
    //         setTimeout(() => this.setState({ submitted: false }), 5000);
    //     });
    // }

    render() {
        const { formData } = this.state;

        return (
            // if all fields are valid, then navigate to other page
            <ValidatorForm ref="form" onSubmit={event =>  window.location.href='/successful_payment'}>
                <TextValidator
                    label="Discount Code"
                    onChange={this.handleChange}
                    name="discountCode"
                    value={formData.discountCode}
                    validators={['required', 'minNumber:10000000000000']}
                    errorMessages={['this field is required', 'invalid number']}
                />
                <br />
                <Button color="primary" variant="contained" type="submit">
                    Finalize Payment
                </Button>
            </ValidatorForm>
        );
    }
}
