import React from 'react';
import * as Styled from '../index';

export default {
    title      : 'Styled/Texts',
    component  : Styled.Title,
    viewMode   : 'Canvas',
    parameters : {
        componentSubtitle: 'Styled-components Texts',
    },
};

export const Title = () => (
    <Styled.Heading>title text</Styled.Heading>
);

export const WithSubtitle = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Styled.Heading>title text</Styled.Heading>
        <Styled.Subtitle>Subtitle text</Styled.Subtitle>
    </div>
);

