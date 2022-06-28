import React from 'react';
import CheckboxGroup from '../index';

export default {
    title      : 'CheckboxGroup',
    component         : CheckboxGroup,
        parameters : {
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
Required.parameters =  { docs: { description: { story:  'A CheckboxGruop can be required.' } } };

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
ErrorStatus.parameters =  { docs: { description: { story:  'A CheckboxGruop can be required.' } } };

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
Disabled.parameters =  { docs: { description: { story:  'A CheckboxGruop can be disabled.' } } };
