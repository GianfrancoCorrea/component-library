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
    <Styled.Title>title text</Styled.Title>
);

export const WithSubtitle = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Styled.Title>title text</Styled.Title>
        <Styled.Subtitle>Subtitle text</Styled.Subtitle>
    </div>
);

