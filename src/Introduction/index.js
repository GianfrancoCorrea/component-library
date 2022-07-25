import React from 'react';
import PropTypes from 'prop-types';
import {
    SectionContainer,
    SectionWrapper,
    Welcome,
    Title,
    IconsContainer,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
} from '../styles';
import useTypingText from '../helpers/useTypingText';

const Introduction = ({ name, descriptions }) => {
    const { word } = useTypingText(
        descriptions,
        100,
        15,
    );

    return (
        <SectionContainer>
            <SectionWrapper>
                <Welcome>Hello!</Welcome>
                <Title>
                    {`I'm ${name},`}
                    <br />
                    {'a '}
                    {word}
                </Title>
                <IconsContainer>
                    <GithubIcon />
                    <LinkedinIcon />
                    <MailIcon />
                </IconsContainer>
            </SectionWrapper>
        </SectionContainer>
    );
};
Introduction.defaultProps = {
    name: 'John Doe',
};
Introduction.propTypes = {
    name         : PropTypes.string,
    descriptions : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Introduction;
