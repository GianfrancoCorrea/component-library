import React from 'react';
import Radio from '../index';

export default {
    title      : 'Radio',
    component         : Radio,
        parameters : {
componentSubtitle : 'A Radio allows a user to select one value from a set of options.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Radio
            label="Gender"
            options={[
                {
                    value   : 'male',
                    content : 'Male',
                },
                {
                    value   : 'female',
                    content : 'Female',
                },
                {
                    value   : 'other',
                    content : 'Other',
                },
            ]}
            name="gender"
        />
    </div>
);

export const Required = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Radio
            label="T-shirt size"
            options={[
                {
                    value   : 'xs',
                    content : 'X Small',
                },
                {
                    value   : 's',
                    content : 'Small',
                },
                {
                    value   : 'm',
                    content : 'Medium',
                },
                {
                    value   : 'l',
                    content : 'Large',
                },
                {
                    value   : 'xl',
                    content : 'X Large',
                },
            ]}
            name="tshirt-size"
            required
        />
    </div>
);
Required.parameters =  { docs: { description: { story:  'A Radio can be required.' } } };

export const ErrorStatus = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Radio
            label="Credit Card"
            options={[
                {
                    value   : 'visa',
                    content : 'Visa',
                },
                {
                    value   : 'mastercard',
                    content : 'Mastercard',
                },
                {
                    value   : 'amex',
                    content : 'American Express',
                },
                {
                    value   : 'discover',
                    content : 'Discover',
                },
            ]}
            name="credit-card"
            required
            showError
            errorMessage="You must select one credit card"
        />
    </div>
);
ErrorStatus.parameters =  { docs: { description: { story:  'A Radio can have an error status.' } } };

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Radio
            label="Favourite Star Wars faction"
            options={[
                {
                    value   : 'republic',
                    content : 'Galactic Republic',
                },
                {
                    value   : 'first-order',
                    content : 'First Order',
                },
                {
                    value   : 'empire',
                    content : 'Galactic Empire',
                },
                {
                    value   : 'jedi',
                    content : 'Jedi Order',
                },
            ]}
            name="star-wars-faction"
            disabled
        />
    </div>
);
Disabled.parameters =  { docs: { description: { story:  'A Radio can have an error status.' } } };
