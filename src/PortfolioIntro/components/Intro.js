import React, { forwardRef, useCallback, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Background from './Background';
import {
    MouseIcon, Title, HeroContainer, MouseIconContainer, MouseText, CardContainer,
} from '../styles';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Divider from '../../Divider';

/* eslint-disable */
const Wrapper = forwardRef(({ ref2 }, ref) => {
    const gianImg = 'https://avatars.githubusercontent.com/u/46355516?v=4';
    const [isSticky, setIsSticky] = React.useState(false);
    const handleMouseMove = useCallback(
        () => {
            if (ref2.current.isSticky && !isSticky) {
                setIsSticky(true);
            }
            if (!ref2.current.isSticky && isSticky) {
                setIsSticky(false);
            }
        },
        /* eslint-enable */
        [isSticky, ref2],
    );

    useEffect(
        () => {
            const refCurrent = ref.current;
            refCurrent?.container?.current.addEventListener('scroll', handleMouseMove, { passive: true });
            return () => {
                refCurrent?.container?.current?.removeEventListener('scroll', handleMouseMove);
            };
        },
        [ref, handleMouseMove],
    );

    return (
        <CardContainer>
            <Avatar isSticky={isSticky} avatar={gianImg} name="Gianfranco Correa" />
        </CardContainer>
    );
});

function Intro() {
    const ref = useRef();
    const ref2 = useRef();

    return (
        <HeroContainer>

            <Parallax pages={4} ref={ref}>
                <Background />
                <ParallaxLayer offset={0} speed={-5} style={{ display: 'block' }}>
                    <MouseIconContainer>
                        <MouseText>
                            Scroll down
                        </MouseText>
                        <MouseIcon />
                    </MouseIconContainer>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={1} sticky={{ start: 0.3, end: 3 }} style={{ zIndex: 3 }} ref={ref2}>
                    <Wrapper ref={ref} ref2={ref2} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0}
                    style={{
                        display         : 'flex',
                        justifyContent  : 'center',
                        alignItems      : 'center',
                        backgroundColor : '#ff6d6d',
                        color           : 'white',
                        zIndex          : 1,
                    }}
                    // sticky={{ start: 1.3, end: 1.7 }}
                />
                <ParallaxLayer
                    offset={1}
                    speed={0}
                    style={{
                        display        : 'flex',
                        flexDirection  : 'column',
                        justifyContent : 'center',
                        alignItems     : 'center',
                        zIndex         : 2,
                    }}
                    // sticky={{ start: 1.3, end: 1.7 }}
                >
                    <Title>Building to scale</Title>
                    <Divider />
                    <img src="https://awv3node-homepage.surge.sh/build/assets/bash.svg" width={700} alt="bash" />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={1}
                    style={{
                        display         : 'flex',
                        justifyContent  : 'center',
                        alignItems      : 'center',
                        backgroundColor : '#ff6d6d',
                        color           : 'white',
                    }}
                >
                    <Title>Scroll up</Title>
                </ParallaxLayer>

            </Parallax>
        </HeroContainer>
    );
}
/*
Intro.defaultProps = {

};

Intro.propTypes = {

}; */

export default Intro;
