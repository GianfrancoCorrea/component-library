import React from 'react';
import Introduction from '../../Introduction';
import IconsWrapper from './IconsWrapper';

function Intro() {
    return (
        <>
            <IconsWrapper />
            <Introduction
                name="Gianfranco"
                descriptions={['web developer', 'crypto enthusiast']}
            />
        </>
    );
}

export default Intro;
