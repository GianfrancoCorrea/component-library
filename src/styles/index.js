import styled from 'styled-components';
import * as variables from './variables';
import { Github } from '@styled-icons/feather/Github';
import { Linkedin } from '@styled-icons/feather/Linkedin';
import { Mail } from '@styled-icons/feather/Mail';

// Heading

const Heading = styled.div`
    font-size: ${variables.fontSizeNormal};
    line-height: 1;
    font-weight: 900;
`;

const HeadingMedium = styled(Heading)`
    font-size: ${variables.fontSizeMedium};
`;

const HeadingLarge = styled(Heading)`
    font-size: ${variables.fontSizeLarge};
`;

const HeadingXLarge = styled(Heading)`
    font-size: ${variables.fontSizeXLarge};
`;

const HeadingHuge = styled(Heading)`
    font-size: ${variables.fontSizeHuge};
`;

const HeadingHero = styled(Heading)`
    font-size: ${variables.fontSizeHero};
    line-height: .9;
`;

// Text

const Text = styled.p`
    font-size: ${variables.fontSizeNormal};
    line-height: 1.4;
    margin: 0;

    & + &,
    ${Heading} + & {
        margin-top: ${variables.spaceNormal};
    };

`;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 60px;
    svg {
        width: 30px;
        transition: all 0.1s ease-in-out;
        cursor: pointer;
        color: currentColor;
        &:hover {
            transform: scale(1.1);
        }
    }
    `;
const GithubIcon = styled(Github)`
&:hover {
color: #38FF58;
}
`;
const LinkedinIcon = styled(Linkedin)`
&:hover {
color: #38FF58;
}
`;
const MailIcon = styled(Mail)`
&:hover {
color: #38FF58;
}
`;

export {
    Heading, HeadingMedium, HeadingLarge, HeadingXLarge, HeadingHuge, HeadingHero,
    Text,
    IconsContainer, GithubIcon,
    LinkedinIcon, MailIcon,
};
