import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Avatar from './Avatar';
import {
    MouseIcon, HeroContainer, MouseIconContainer, MouseText,
} from '../styles';
import { useSpring, animated, config } from '@react-spring/web';
import './styles.less';
import styled from 'styled-components';
import { Bitcoin } from '@styled-icons/simple-icons';
import iconList from '../helpers/iconList';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}%,${y / 10}%,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}%,${y / 8 - 230}%,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}%,${y / 6 - 200}%,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}%,${y / 3.5}%,0)`;

const IconsContainer = styled.div`
position: absolute;
  width: 700px;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .card1 {
    top: 10%;
    left: 10%;
}
.card2 {
    top: 10%;
    left: 50%;
}
.card3 {
    top: 50%;
    left: 10%;
}
.card4 {
    top: 50%;
    left: 90%;
}
    .card5 {
        top: 90%;
        left: 50%;
    }
`;

const IconDiv = styled(animated.div)`
position: absolute;
opacity: .7;
:hover {
    opacity: 1;
}
transition: opacity 0.15s ease-in;
svg {
width: 35px;
height: 35px;
}
`;

const getLeft = (index, length) => `${(((index + 1) / length) * 100) - 10}%`;

function IconsHandler() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    return (
        <IconsContainer className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            {/* TODO: get random top|left of a mesh */}
            {iconList.tecnologies.map((item, index) => (
                <IconDiv
                    style={{
                        transform : props.xy.to((x, y) => `translate3d(${x / 10}%,${y / 10}%,0)`),
                        top       : '0%',
                        left      : getLeft(index, iconList.tecnologies.length),
                    }}
                >
                    <item.icon icon={item.icon} color={item.color} />
                </IconDiv>
            ))}
            {iconList.tools.map((item, index) => (
                <IconDiv
                    style={{
                        transform : props.xy.to((x, y) => `translate3d(${x / 10}%,${y / 10}%,0)`),
                        top       : '10%',
                        left      : getLeft(index, iconList.tools.length),
                    }}
                >
                    <item.icon icon={item.icon} color={item.color} />
                </IconDiv>
            ))}
            {iconList.cryptocurrencies.map((item, index) => (
                <IconDiv
                    style={{
                        transform : props.xy.to((x, y) => `translate3d(${x / 10}%,${y / 10}%,0)`),
                        top       : '20%',
                        left      : getLeft(index, iconList.cryptocurrencies.length),
                    }}
                >
                    <item.icon icon={item.icon} color={item.color} />
                </IconDiv>
            ))}
        </IconsContainer>
    );
}
function Intro() {
    const gianImg = 'https://avatars.githubusercontent.com/u/46355516?v=4';

    return (
        <HeroContainer>
            <IconsHandler />
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
