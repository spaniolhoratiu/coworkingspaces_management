import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// https://newoldmax.github.io/react-material-ui-form-validator/
export default class CreditCardDetailsForm extends React.Component {
    state = {
        formData: {
            cardholderName: '',
            cardNumber: '',
            expMonth: '',
            expYear: '',
            cardCVC: '',
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
                    label="Cardholder Name"
                    onChange={this.handleChange}
                    name="cardholderName"
                    value={formData.cardholderName}
                    validators={['required', 'matchRegexp:^[a-zA-Z_ ]*$']}
                    errorMessages={['this field is required', 'should be only letters in name']}
                />
                <br />
                <TextValidator
                    label="Card Number"
                    onChange={this.handleChange}
                    name="cardNumber"
                    value={formData.cardNumber}
                    validators={['required', 'minNumber:10000000000000']}
                    errorMessages={['this field is required', 'invalid number']}
                />
                <br />
                <TextValidator
                    label="Expiration Month"
                    onChange={this.handleChange}
                    name="expMonth"
                    value={formData.expMonth}
                    validators={['required', 'minNumber:1', 'maxNumber:12']}
                    errorMessages={['this field is required', 'invalid month (must be 1-12)', 'invalid month (must be 1-12)']}
                />
                <br />
                <TextValidator
                    label="Expiration Year"
                    onChange={this.handleChange}
                    name="expYear"
                    value={formData.expYear}
                    validators={['required', 'minNumber:2020', 'maxNumber:2060']}
                    errorMessages={['this field is required', 'invalid year', 'invalid year']}
                />
                <br />
                <TextValidator
                    label="Card CVC"
                    onChange={this.handleChange}
                    name="cardCVC"
                    value={formData.cardCVC}
                    validators={['required', 'minNumber:100', 'maxNumber:1000']}
                    errorMessages={['this field is required', 'invalid CVC number', 'invalid CVC number']}
                />
                <br />
                <Button color="primary" variant="contained" type="submit">
                    Finalize Payment
                </Button>
            </ValidatorForm>
        );
    }
}
