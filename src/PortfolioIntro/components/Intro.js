import React from 'react';
// import PropTypes from 'prop-types';
import Avatar from '../../Avatar';
import IconsWrapper from './IconsWrapper';
import {
    MouseIcon, HeroContainer, MouseIconContainer, MouseText,
} from '../../styles';

const CallToScroll = () => (
    <MouseIconContainer>
        <MouseText>
            Scroll down
        </MouseText>
        <MouseIcon />
    </MouseIconContainer>
);
function Intro() {
    const gianImg = 'https://avatars.githubusercontent.com/u/46355516?v=4';

    return (
        <HeroContainer>
            <IconsWrapper />
            <Avatar avatar={gianImg} name="Gianfranco Correa" />
            <CallToScroll />
        </HeroContainer>
    );
}
/*
Intro.defaultProps = {

};

Intro.propTypes = {

}; */

export default Intro;
