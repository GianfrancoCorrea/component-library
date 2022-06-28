import React from 'react';
import Input from '../index';

export default {
    title      : 'Input',
    parameters : {
        component         : Input,
        componentSubtitle : 'An Input is a field used to get an answer from a user.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Input label="Name" />
        </div>
    </div>
);

export const UXHelpers = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Input
                label="Password"
                labelHint="Must be at least 8 characters"
                type="password"
            />
            <Input
                label="Password"
                extraContent="Must be at least 8 characters"
                type="password"
            />
            <Input
                label="Password"
                placeholder="Must be at least 8 characters"
                type="password"
            />
        </div>
    </div>
);
UXHelpers.story = {
    parameters: { docs: { storyDescription: 'An Input can show relevant information for the user in a form of label hint, extra content or placeholder' } },
};

export const Required = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Input
                label="Username"
                required
            />
        </div>
    </div>
);
Required.story = {
    parameters: { docs: { storyDescription: 'An Input can be required' } },
};

export const ErrorStatus = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Input
                label="Email"
                type="email"
                value="user@mail.com"
                required
                showError
                errorMessage="There is already an user with this email"
            />
        </div>
    </div>
);
ErrorStatus.story = {
    parameters: { docs: { storyDescription: 'An Input can have an error status' } },
};

export const WithIcon = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Input
                label="Username"
                icon="user"
                iconPosition="left"
            />
            <Input
                label="Find your perfect destination"
                placeholder="Search by hotel name, city or country"
                icon="search"
                iconPosition="right"
            />
        </div>
    </div>
);
WithIcon.story = {
    parameters: { docs: { storyDescription: 'An Input can show an icon inside it' } },
};

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <div style={{ maxWidth: '500px' }}>
            <Input
                label="Company"
                disabled
            />
        </div>
    </div>
);
Disabled.story = {
    parameters: { docs: { storyDescription: 'An Input can have a disabled status' } },
};

