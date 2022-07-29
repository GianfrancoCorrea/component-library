import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    HeadingHero,
    HeadingMedium,
    IconsContainer,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
} from '../styles';
import useTypingText from '../helpers/useTypingText';

const StyledHeadingMedium = styled(HeadingMedium)`
    font-weight: normal;
    margin-bottom: 20px;
`;

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
                {output}
            </HeadingHero>
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
