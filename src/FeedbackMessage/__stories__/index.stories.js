import React from 'react';
import FeedbackMessage from '../index';
import Button from 'src/Button';

export default {
    title      : 'FeedbackMessage',
    parameters : {
        component         : FeedbackMessage,
        componentSubtitle : 'A FeedbackMessage displays information that explains nearby content.',
    },
};

export const Default = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
        />
    </div>
);

export const Types = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            type="info"
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
        />
        <br />
        <br />
        <FeedbackMessage
            type="error"
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
        />
        <br />
        <br />
        <FeedbackMessage
            type="warning"
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
        />
        <br />
        <br />
        <FeedbackMessage
            type="success"
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
        />
    </div>
);
Types.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can have different types to show different kind of information (info, danger/error, warning and success).' } },
};

export const ExtraContent = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            extraContent={<Button content="Button" />}
        />
    </div>
);
ExtraContent.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can have en extra block of info besides the message.' } },
};

export const Alignment = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="FeedbackMessage left aligment"
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            extraContent={<Button content="Button" />}
            align="left"
        />
        <br />
        <br />
        <FeedbackMessage
            title="FeedbackMessage left aligment"
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            extraContent={<Button content="Button" />}
            align="center"
        />
        <br />
        <br />
        <FeedbackMessage
            title="FeedbackMessage left aligment"
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            extraContent={<Button content="Button" />}
            align="right"
        />
    </div>
);
Alignment.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can align its elements at the left, center or right.' } },
};

export const WithIcon = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            icon="star"
        />
    </div>
);
WithIcon.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can have an icon.' } },
};

export const CloseIcon = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            closeIcon
        />
    </div>
);
CloseIcon.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can have a close icon.' } },
};

export const Compact = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            compact
        />
    </div>
);
Compact.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can be smaller.' } },
};

export const WithColumns = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            icon="star"
            withColumns
        />
    </div>
);
WithColumns.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can show its elements in columns.' } },
};

export const InlineBlock = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum."
            inlineBlock
        />
    </div>
);
InlineBlock.story = {
    parameters: { docs: { storyDescription: 'FeedbackMessages can take only its content width.' } },
};
