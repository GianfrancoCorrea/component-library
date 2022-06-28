import React from 'react';
import NewTabLink from '../index';
import Button from 'src/Button';

export default {
    title      : 'NewTabLink',
    component         : NewTabLink,
        parameters : {
componentSubtitle : 'A NewTabLink opens a link in a new tab when is clicked.',
    },
};

export const Default = () => (
    <NewTabLink
        href="http://www.google.com"
        content={<Button content="Go to Google" />}
    />
);
