import React from 'react';
import Title from '../index';

export default {
    title      : 'Title',
    parameters : {
        component         : Title,
        componentSubtitle : 'A Title displays a text more important than the normal one.',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Title
            size="large"
            content="Title"
        />
    </div>
);

export const Sizes = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Title
            size="small"
            content="Title small"
        />
        <Title
            size="normal"
            content="Title normal"
        />
        <Title
            size="medium"
            content="Title medium"
        />
        <Title
            size="large"
            content="Title large"
        />
        <Title
            size="xlarge"
            content="Title xlarge"
        />
        <Title
            size="huge"
            content="Title huge"
        />
        <Title
            size="extra"
            content="Title extra"
        />
    </div>
);
Sizes.story = {
    parameters: { docs: { storyDescription: 'You can display Title in 7 different sizes (small, normal, medium, large, xlarge, huge and extra)' } },
};

export const HeadingTags = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Title
            renderAs="h1"
            content="Rendered as h1"
        />
        <Title
            renderAs="h2"
            content="Rendered as h2"
        />
        <Title
            renderAs="h3"
            content="Rendered as h3"
        />
        <Title
            renderAs="h4"
            content="Rendered as h4"
        />
        <Title
            renderAs="h5"
            content="Rendered as h5"
        />
        <Title
            renderAs="h6"
            content="Rendered as h6"
        />
    </div>
);
HeadingTags.story = {
    parameters: { docs: { storyDescription: 'You can render Title as h1/h6 tags' } },
};
