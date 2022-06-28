import React from 'react';
import FeedbackMessage from '../index';
import Button from 'src/Button';

export default {
    title      : 'FeedbackMessage',
    component         : FeedbackMessage,
        parameters : {
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
Types.parameters =  { docs: { description: { story:  'FeedbackMessages can have different types to show different kind of information (info, danger/error, warning and success).' } } };

export const ExtraContent = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            extraContent={<Button content="Button" />}
        />
    </div>
);
ExtraContent.parameters =  { docs: { description: { story:  'FeedbackMessages can have en extra block of info besides the message.' } } };

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
Alignment.parameters =  { docs: { description: { story:  'FeedbackMessages can align its elements at the left, center or right.' } } };

export const WithIcon = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            icon="star"
        />
    </div>
);
WithIcon.parameters =  { docs: { description: { story:  'FeedbackMessages can have an icon.' } } };

export const CloseIcon = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            closeIcon
        />
    </div>
);
CloseIcon.parameters =  { docs: { description: { story:  'FeedbackMessages can have a close icon.' } } };

export const Compact = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien, accumsan a nisi et, tincidunt posuere tellus."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum, pellentesque elementum arcu. Duis consequat urna in urna commodo, a porta est pretium. Nullam blandit ultrices justo nec pretium."
            compact
        />
    </div>
);
Compact.parameters =  { docs: { description: { story:  'FeedbackMessages can be smaller.' } } };

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
WithColumns.parameters =  { docs: { description: { story:  'FeedbackMessages can show its elements in columns.' } } };

export const InlineBlock = () => (
    <div style={{ padding: '40px' }}>
        <FeedbackMessage
            title="Mauris nisi sapien."
            message="Nullam eget nibh dolor. Vivamus nisi orci, venenatis ac magna bibendum."
            inlineBlock
        />
    </div>
);
InlineBlock.parameters =  { docs: { description: { story:  'FeedbackMessages can take only its content width.' } } };
