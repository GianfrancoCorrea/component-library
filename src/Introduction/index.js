import React from 'react';
import PropTypes from 'prop-types';
import {
    Welcome,
    Title,
    IconsContainer,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
} from '../styles';
import useTypingText from '../helpers/useTypingText';

const Introduction = ({ name, descriptions }) => {
    const { output } = useTypingText(
        descriptions,
        100,
        15,
    );

    return (
        <>
            <Welcome>Hello!</Welcome>
            <Title>
                {`I'm ${name},`}
                <br />
                {'a '}
                {output}
            </Title>
            <IconsContainer>
                <GithubIcon />
                <LinkedinIcon />
                <MailIcon />
            </IconsContainer>
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

export default Introduction;
