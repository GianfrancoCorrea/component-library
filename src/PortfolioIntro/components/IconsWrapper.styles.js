import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const IconsBackground = styled(animated.div)`
position: absolute;
width: 100%;
height: 100%;
`;

export const IconDiv = styled(animated.div)`
position: absolute;
opacity: 1;
:hover {
    opacity: 0.7;
}
transition: opacity 0.15s ease-in;
svg {
    width: 35px;
    height: 35px;
    color: #444b58;
    transition: all 0.15s ease-in;
    &:hover {
        ${props => props.color && `
            color: ${props.color};
            transform: scale(1.1);
        `}
    }
}   
`;
