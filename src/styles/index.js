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

// Button

const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${variables.spaceNormal} ${variables.spaceLarge};
    background: #38FF58;
    color: #222222;
    text-decoration: none;
    font-weight: 700;
    border-radius: 4px;
    border: 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .3), 0 8px 16px rgba(0, 0, 0, .2);
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, .2), 0 8px 20px rgba(0, 0, 0, .4);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }

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
    Button,
    IconsContainer, GithubIcon,
    LinkedinIcon, MailIcon,
};
