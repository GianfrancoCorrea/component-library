import React from 'react';
// import PropTypes from 'prop-types';
import Avatar from './Avatar';
import styled from 'styled-components';
import Background from './Background';

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
function Intro(props) {
    return (
        <HeroContainer>
            <Background>
                <Avatar {...props} />
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
