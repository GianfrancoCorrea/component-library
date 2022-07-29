import React from 'react';
import * as Styled from '../index';

export default {
    title      : 'Styled/Icons',
    component  : Styled.Heading,
    viewMode   : 'Canvas',
    parameters : {
        componentSubtitle: 'Styled-components Icons',
    },
};

export const IconsContainer = () => (
    <Styled.IconsContainer>
        <Styled.GithubIcon />
        <Styled.LinkedinIcon />
        <Styled.MailIcon />
    </Styled.IconsContainer>
);
