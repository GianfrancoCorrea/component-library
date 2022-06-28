import React from 'react';
import LoadingSpinner from '../index';

export default {
    title      : 'LoadingSpinner',
    parameters : {
        component         : LoadingSpinner,
        componentSubtitle : 'A LoadingSpinner alerts a user to wait for an activity to complete.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <LoadingSpinner />
    </div>
);

export const Message = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <LoadingSpinner message="We are completing your request" />
    </div>
);
Message.story = {
    parameters: { docs: { storyDescription: 'A LoadingSpinner can have a message.' } },
};

export const SectionLoader = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <LoadingSpinner sectionLoader message="Loading your profile data" />
    </div>
);
SectionLoader.story = {
    parameters: { docs: { storyDescription: 'A LoadingSpinner can have medium margins.' } },
};

export const PageLoader = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <LoadingSpinner pageLoader message="Proccesing your payment" />
    </div>
);
PageLoader.story = {
    parameters: { docs: { storyDescription: 'A LoadingSpinner can have large margins.' } },
};
