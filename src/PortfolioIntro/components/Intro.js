import React from 'react';
// import PropTypes from 'prop-types';
import Avatar from './Avatar';
import {
    MouseIcon, HeroContainer, MouseIconContainer, MouseText,
} from '../styles';

function Intro() {
    const gianImg = 'https://avatars.githubusercontent.com/u/46355516?v=4';

    return (
        <HeroContainer>

            {/* <Background /> */}
            <MouseIconContainer>
                <MouseText>
                    Scroll down
                </MouseText>
                <MouseIcon />
            </MouseIconContainer>

            <Avatar avatar={gianImg} name="Gianfranco Correa" />

            {/*  <Title>Building to scale</Title>
            <Divider />
            <img src="https://awv3node-homepage.surge.sh/build/assets/bash.svg" width={700} alt="bash" /> */}

        </HeroContainer>
    );
}
/*
Intro.defaultProps = {

};

Intro.propTypes = {

}; */

export default Intro;
