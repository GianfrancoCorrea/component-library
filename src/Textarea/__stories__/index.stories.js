import React from 'react';
import Textarea from '../index';

export default {
    title      : 'Textarea',
    component         : Textarea,
        parameters : {
componentSubtitle : 'An Textarea is a field used to get a long answer from a user.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Textarea label="Comments" />
        </div>
    </div>
);

export const UXHelpers = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Textarea
                label="Review"
                labelHint="Help other users with your experience"
            />
            <Textarea
                label="Review"
                extraContent="Help other users with your experience"
            />
            <Textarea
                label="Review"
                placeholder="Help other users with your experience"
            />
        </div>
    </div>
);
UXHelpers.parameters =  { docs: { description: { story:  'A Textarea can show relevant information for the user in a form of label hint, extra content or placeholder' } } };

export const LenghtLimits = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Textarea
                label="Share your travel experience"
                minLength={100}
            />
            <Textarea
                label="Share your travel experience"
                maxLength={500}
            />
            <Textarea
                label="Share your travel experience"
                minLength={100}
                maxLength={500}
            />
        </div>
    </div>
);
LenghtLimits.parameters =  { docs: { description: { story:  'A Textarea can have a minimum or maximum amount of characters.' } } };

export const Required = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Textarea
                label="Describe yourself"
                required
            />
        </div>
    </div>
);
Required.parameters =  { docs: { description: { story:  'A Textarea can be required' } } };

export const ErrorStatus = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Textarea
                label="Describe yourself"
                required
                showError
                errorMessage="You can't leave this field empty"
            />
        </div>
    </div>
);
ErrorStatus.parameters =  { docs: { description: { story:  'A Textarea can have an error status' } } };

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Textarea
                label="Comments"
                disabled
            />
        </div>
    </div>
);
Disabled.parameters =  { docs: { description: { story:  'A Textarea can have a disabled status' } } };
