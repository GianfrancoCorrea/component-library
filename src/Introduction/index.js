import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeadingHero, HeadingMedium } from '../styles';
import useTypingText from '../helpers/useTypingText';
import { Github } from '@styled-icons/simple-icons/Github';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { MailWithCircle } from '@styled-icons/entypo-social/MailWithCircle';

const Introduction = ({ name, descriptions }) => {
    const { output } = useTypingText(
        descriptions,
        100,
        15,
    );

    return (
        <>
            <StyledHeadingMedium>Hello!</StyledHeadingMedium>
            <HeadingHero>
                {`I'm ${name},`}
                <br />
                {'a '}
                <IntroDescription>{output}</IntroDescription>
            </HeadingHero>
            <IntroductionLinksWrapper>
                <IntroductionLink href="https://github.com/GianfrancoCorrea" target="_blank">
                    <Github />
                </IntroductionLink>
                <IntroductionLink href="https://www.linkedin.com/in/gianfranco-correa/" target="_blank">
                    <LinkedinWithCircle />
                </IntroductionLink>
                <IntroductionLink href="mailto:" target="_blank">
                    <MailWithCircle />
                </IntroductionLink>
            </IntroductionLinksWrapper>
        </>
    );
};

Introduction.defaultProps = {
    name: 'John Doe',
};
Introduction.propTypes = {
    name         : PropTypes.string,
    descriptions : PropTypes.arrayOf(PropTypes.string).isRequired,
};

const StyledHeadingMedium = styled(HeadingMedium)`
    font-weight: normal;
    margin-bottom: 20px;
`;

const IntroDescription = styled.span`
    font-family: 'Space Mono', monospace;
    letter-spacing: -7px;
    word-spacing: -25px;
    font-weight: 700;
    font-style: italic;
    font-size: 110%;
`;

const IntroductionLinksWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 40px;
`;

const IntroductionLink = styled.a`
    color: currentColor;
    text-decoration: none;
    position: relative;
    z-index: 1;

    &:hover {
        color: #38FF58;
        cursor: pointer;

        svg {
            transform: scale(1.1);
        }

    }

    svg {
        height: 36px;
        transition: all .2s ease-in-out;
    }
`;

export default Introduction;

