import React, { useState } from 'react';
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
} from '../styles';

const Avatar = ({ avatar, name, description }) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
        <AvatarContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={avatar} alt={name} />
            <Title>{name}</Title>
            <IconsContainer>
                <GithubIcon />
                <VerticalDivider />
                <LinkedinIcon />
                <VerticalDivider />
                <MailIcon />
            </IconsContainer>
            {isHover && <Subtitle>{description}</Subtitle>}
        </AvatarContainer>
    );
};
Avatar.defaultProps = {
    avatar      : 'https://avatars0.githubusercontent.com/u/17098281?s=460&v=4',
    name        : 'John Doe',
    description : 'I am a web developer',
};
Avatar.propTypes = {
    avatar      : PropTypes.string,
    name        : PropTypes.string,
    description : PropTypes.string,
};

export default Avatar;
