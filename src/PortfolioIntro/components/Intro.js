import React from 'react';
// import PropTypes from 'prop-types';
import Avatar from './Avatar';
import styled from 'styled-components';
import Background from './Background';
import { MouseIcon } from '../styles';

const HeroContainer = styled.div`
    position: relative;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`;
const MouseIconContainer = styled.div`
display: contents;
width: 100%;
height: 100%;
text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
svg {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
`;
const MouseText = styled.span`
font-family: 'Rubik', sans-serif;
font-size: 1.2em;
text-align: center;
color: white;
margin-bottom: 5px;
`;

function Intro(props) {
    const gianImg = 'https://avatars.githubusercontent.com/u/46355516?v=4';
    return (
        <HeroContainer>
            <Background>
                <Avatar {...props} avatar={gianImg} name="Gianfranco Correa" />

                <MouseIconContainer>
                    <MouseText>
                        Scroll down
                    </MouseText>
                    <MouseIcon />
                </MouseIconContainer>
            </Background>
        </HeroContainer>
    );
}
/*
Intro.defaultProps = {

};

Intro.propTypes = {

}; */

export default Intro;
