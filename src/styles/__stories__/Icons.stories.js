import React from 'react';
import * as Styled from '../index';

export default {
    title      : 'Styled/Icons',
    component  : Styled.Title,
    viewMode   : 'Canvas',
    parameters : {
        componentSubtitle: 'Styled-components Icons',
    },
};

export const IconsContainer = () => (
    <Styled.IconsContainer>
        <Styled.GithubIcon />
        <Styled.VerticalDivider />
        <Styled.LinkedinIcon />
        <Styled.VerticalDivider />
        <Styled.MailIcon />
    </Styled.IconsContainer>
);
