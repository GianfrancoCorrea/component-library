import styled from 'styled-components';

const CardDiv = styled.div`
border-radius: 5px;
padding: 2em;
margin: 1em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
transition: all 0.3s ease-in-out;
max-width: 10em;
`;
const TextMuted = styled.span`
color: #6c757d;
font-size: 0.8em;
margin-top: 0.5em;
`;

export { CardDiv, TextMuted };
