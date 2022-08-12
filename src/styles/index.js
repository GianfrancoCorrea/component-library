import styled from 'styled-components';
import * as variables from './variables';

// Heading

const Heading = styled.div`
    font-size: ${variables.fontSizeNormal};
    line-height: 1;
    font-weight: 900;
`;

const HeadingMedium = styled(Heading)`
    font-size: ${variables.fontSizeMedium};
`;

const HeadingLarge = styled(Heading)`
    font-size: ${variables.fontSizeLarge};
`;

const HeadingXLarge = styled(Heading)`
    font-size: ${variables.fontSizeXLarge};
`;

const HeadingHuge = styled(Heading)`
    font-size: ${variables.fontSizeHuge};
`;

const HeadingHero = styled(Heading)`
    font-size: ${variables.fontSizeHero};
    line-height: .9;
`;

// Text

const Text = styled.p`
    font-family: 'Space Mono', monospace;
    font-size: ${variables.fontSizeNormal};
    word-spacing: -3px;
    line-height: 1.3;
    margin: 0;

    & + &,
    ${Heading} + & {
        margin-top: ${variables.spaceNormal};
    };

`;

// Button

const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${variables.spaceNormal} ${variables.spaceLarge};
    background: #38FF58;
    color: #222222;
    font-size: ${variables.fontSizeMedium};
    text-decoration: none;
    font-weight: 500;
    border-radius: 4px;
    border: 0;
    box-shadow: 0 2px 2px rgba(0, 0, 0, .3), 0 8px 16px rgba(0, 0, 0, .2);
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, .2), 0 8px 20px rgba(0, 0, 0, .4);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
`;

// Form

const Input = styled.input`
    padding: ${variables.spaceNormal};
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 4px;
    transition: all .2s ease-in-out;
    width: 100%;
    box-sizing: border-box;
`;

const TextArea = styled.textarea`
    padding: ${variables.spaceNormal};
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 4px;
    transition: all .2s ease-in-out;
    height: 100px;
    width: 100%;
    box-sizing: border-box;
`;

// Card

const Card = styled.div`
    border-radius: 4px;
    padding: ${variables.spaceNormal};
    background: rgba(255, 255, 255, .075);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1), 0 4px 8px rgba(0, 0, 0, .25);
`;

// Table

const TableHead = styled.th`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    font-weight: 400;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(255, 255, 255, .1);
`;

const TableCell = styled.td`
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    border-bottom: 1px solid rgba(255, 255, 255, .05);
`;

const Table = styled.table`
    border-spacing: 0;
    padding: 0;
    border-collapse: collapse;
    width: 100%;

    ${TableHead},
    ${TableCell} {
        padding: 4px 15px;
    }
`;

export {
    Heading, HeadingMedium, HeadingLarge, HeadingXLarge, HeadingHuge, HeadingHero,
    Text,
    Button,
    Input, TextArea,
    Card,
    Table, TableHead, TableCell,
};
