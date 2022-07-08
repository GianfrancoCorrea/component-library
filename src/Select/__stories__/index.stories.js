import React from 'react';
import Select from '../index';

export default {
    title      : 'styled/Select',
    component  : Select,
    parameters : {
        componentSubtitle: 'A Select allows a user to select a value from a series of options.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Select
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
            />
        </div>
    </div>
);

export const UXHelpers = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Select
                label="Car brand"
                labelHint="Choose your favorite"
                options={[
                    {
                        value   : 'ford',
                        content : 'Ford',
                    },
                    {
                        value   : 'chevrolet',
                        content : 'Chevrolet',
                    },
                    {
                        value   : 'ferrari',
                        content : 'Ferrari',
                    },
                    {
                        value   : 'fiat',
                        content : 'Fiat',
                    },
                ]}
            />
            <Select
                label="Car brand"
                extraContent="Choose your favorite"
                options={[
                    {
                        value   : 'ford',
                        content : 'Ford',
                    },
                    {
                        value   : 'chevrolet',
                        content : 'Chevrolet',
                    },
                    {
                        value   : 'ferrari',
                        content : 'Ferrari',
                    },
                    {
                        value   : 'fiat',
                        content : 'Fiat',
                    },
                ]}
            />
        </div>
    </div>
);
UXHelpers.parameters = { docs: { description: { story: 'A Select can show relevant information for the user in a form of label hint or extra content.' } } };

export const Required = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Select
                label="Favourite color"
                required
                options={[
                    {
                        value   : '',
                        content : '-- Select an option --',
                    },
                    {
                        value   : 'red',
                        content : 'Red',
                    },
                    {
                        value   : 'blue',
                        content : 'Blue',
                    },
                    {
                        value   : 'green',
                        content : 'Green',
                    },
                    {
                        value   : 'orange',
                        content : 'Orange',
                    },
                ]}
            />
        </div>
    </div>
);
Required.parameters = { docs: { description: { story: 'A Select can be required.' } } };

export const ErrorStatus = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Select
                label="Favourite color"
                required
                showError
                errorMessage="This field is required"
                options={[
                    {
                        value   : '',
                        content : '-- Select an option --',
                    },
                    {
                        value   : 'red',
                        content : 'Red',
                    },
                    {
                        value   : 'blue',
                        content : 'Blue',
                    },
                    {
                        value   : 'green',
                        content : 'Green',
                    },
                    {
                        value   : 'orange',
                        content : 'Orange',
                    },
                ]}
            />
        </div>
    </div>
);
ErrorStatus.parameters = { docs: { description: { story: 'A Select can have an error status.' } } };

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Select
                label="Favourite animal"
                disabled
                options={[
                    {
                        value   : 'dog',
                        content : 'Dog',
                    },
                    {
                        value   : 'cat',
                        content : 'Cat',
                    },
                    {
                        value   : 'bird',
                        content : 'Bird',
                    },
                ]}
            />
        </div>
    </div>
);
Disabled.parameters = { docs: { description: { story: 'A Select can have a disabled status.' } } };
