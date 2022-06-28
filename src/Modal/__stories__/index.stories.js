import React from 'react';
import Modal from '../index';
import Button from 'src/Button';

export default {
    title      : 'Modal',
    parameters : {
        component         : Modal,
        componentSubtitle : 'A Modal displays content that temporarily blocks interactions with the main view of a site.',
    },
};

const modalTrigger = <Button content="Click to open" />;
const modalTitle = 'Modal title';
const modalContent = 'Modal content';
const modalFooter = 'Modal footer';

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Modal
            title={modalTitle}
            content={modalContent}
            trigger={modalTrigger}
            footer={modalFooter}
        />
    </div>
);

export const WithoutTitle = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Modal
            content={modalContent}
            trigger={modalTrigger}
        />
    </div>
);
WithoutTitle.story = {
    parameters: { docs: { storyDescription: 'The title prop is not required, you can build a Modal without it.' } },
};

export const WithFooter = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Modal
            title={modalTitle}
            content={modalContent}
            trigger={modalTrigger}
            footer={modalFooter}
        />
    </div>
);
WithFooter.story = {
    parameters: { docs: { storyDescription: 'You can display a footer with any element you want inside it.' } },
};

export const Sizes = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Modal
            title={modalTitle}
            content={modalContent}
            trigger={<Button content="Open tiny modal" />}
            size="tiny"
        />
        <br />
        <br />
        <Modal
            title={modalTitle}
            content={modalContent}
            trigger={<Button content="Open small modal" />}
            size="small"
        />
        <br />
        <br />
        <Modal
            title={modalTitle}
            content={modalContent}
            trigger={<Button content="Open normal modal" />}
        />
        <br />
        <br />
        <Modal
            title={modalTitle}
            content={modalContent}
            trigger={<Button content="Open large modal" />}
            size="large"
        />
    </div>
);
Sizes.story = {
    parameters: { docs: { storyDescription: 'The Modal could be display in 4 different sizes (large, normal, small or tiny).' } },
};

export const WithoutCloseIcon = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Modal
            title={modalTitle}
            content={modalContent}
            closeIcon={false}
            trigger={modalTrigger}
        />
    </div>
);
WithoutCloseIcon.story = {
    parameters: { docs: { storyDescription: 'You can hide the close icon on the header. The Modal could be closed anyways pressing the Esc key or clicking the overlay.' } },
};

export const AvoidExternalClose = () => (
    <div style={{ background: '#f4f4f4', padding: '40px' }}>
        <Modal
            title={modalTitle}
            content={modalContent}
            trigger={modalTrigger}
            footer={(
                <span>
                    Click to close
                </span>
            )}
            avoidExternalClose
        />
    </div>
);
AvoidExternalClose.story = {
    parameters: { docs: { storyDescription: 'You can remove the option to close the modal troughth the Esc key, clicking on close icon or overlay.' } },
};
