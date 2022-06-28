import React from 'react';
import CheckboxGroup from '../index';

export default {
    title      : 'CheckboxGroup',
    parameters : {
        component         : CheckboxGroup,
        componentSubtitle : 'A CheckboxGroup is a group of Checkboxes.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <CheckboxGroup
            label="Shopping list"
            options={[
                { label: 'Tomatoes' },
                { label: 'Apples' },
                { label: 'Water' },
                { label: 'Beer' },
                { label: 'Oil' },
                { label: 'Biscuits' },
            ]}
        />
    </div>
);

export const Required = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <CheckboxGroup
            label="Shopping list"
            options={[
                { label: 'Tomatoes' },
                { label: 'Apples' },
                { label: 'Water' },
                { label: 'Beer' },
                { label: 'Oil' },
                { label: 'Biscuits' },
            ]}
            required
        />
    </div>
);
Required.story = {
    parameters: { docs: { storyDescription: 'A CheckboxGruop can be required.' } },
};

export const ErrorStatus = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <CheckboxGroup
            label="Shopping list"
            options={[
                { label: 'Tomatoes', defaultChecked: true },
                { label: 'Apples', defaultChecked: true },
                { label: 'Water' },
                { label: 'Beer', defaultChecked: true },
                { label: 'Oil' },
                { label: 'Biscuits', defaultChecked: true },
            ]}
            required
            showError
            errorMessage="You don't have the list completed"
        />
    </div>
);
ErrorStatus.story = {
    parameters: { docs: { storyDescription: 'A CheckboxGruop can be required.' } },
};

export const Disabled = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <CheckboxGroup
            label="Shopping list"
            options={[
                { label: 'Tomatoes' },
                { label: 'Apples' },
                { label: 'Water' },
                { label: 'Beer' },
                { label: 'Oil' },
                { label: 'Biscuits' },
            ]}
            disabled
        />
    </div>
);
Disabled.story = {
    parameters: { docs: { storyDescription: 'A CheckboxGruop can be disabled.' } },
};
