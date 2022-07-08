import React from 'react';
import PropTypes from 'prop-types';
import {
    AvatarContainer,
    Title,
    Subtitle,
    IconsContainer,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    VerticalDivider,
    ImgContainer,
} from '../styles';
import useTypingText from '../helpers/useTypingText';

const Avatar = ({ avatar, name, isSticky, subject, descriptions }) => {
    const { word } = useTypingText(
        descriptions,
        100,
        15,
    );

    return (
        <AvatarContainer isSticky={isSticky}>
            <ImgContainer isSticky={isSticky}>
                <img src={avatar} alt={name} />
                <Title>{name}</Title>
            </ImgContainer>
            {!isSticky && (
                <Subtitle>
                    {subject}
                    &nbsp;
                    {word}
                </Subtitle>
            )}

            <IconsContainer>
                <GithubIcon />
                <VerticalDivider />
                <LinkedinIcon />
                <VerticalDivider />
                <MailIcon />
            </IconsContainer>
        </AvatarContainer>
    );
};
Avatar.defaultProps = {
    avatar       : 'https://avatars0.githubusercontent.com/u/17098281?s=460&v=4',
    name         : 'John Doe',
    isSticky     : false,
    subject      : 'I\'m a',
    descriptions : [
        'web developer',
        'crypto enthusiast',
    ],
};
Avatar.propTypes = {
    avatar       : PropTypes.string,
    name         : PropTypes.string,
    isSticky     : PropTypes.bool,
    subject      : PropTypes.string,
    descriptions : PropTypes.arrayOf(PropTypes.string),
};

export default Avatar;
