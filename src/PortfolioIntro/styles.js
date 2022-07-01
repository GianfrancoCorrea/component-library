import styled from 'styled-components';
import { Github, Linkedin, Mail } from '@styled-icons/feather';
import { Mouse } from '@styled-icons/bootstrap/Mouse';

const AvatarContainer = styled.div`
img {
    max-width: 100px;
    max-height: 100px;
    ${props => props.isSticky && `
    max-width: 80px;
    max-height: 80px;
    transform: scale(0.8);
    `}
    border-radius: 50%;
    border: 2px solid #fff;
}
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
max-width: 350px;
max-height: 300px;
background-color: #2F2F2F;
border-radius: 5px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
padding: 20px;
${props => props.isSticky && `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100vw;
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 80px;
    padding-left: 2em;
    transition: all 0.2s ease-in-out;
    // transition-delay: 0.1s;
`}
animation: fadeIn 0.5s ease-in-out;
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
span {
    font-family: 'Rubik', sans-serif;
}
`;

const Title = styled.h1`
font-family: 'Rubik', sans-serif;

 font-size: 1.5em;
 text-align: center;
 color: white;
 margin-bottom: 0;
 `;
const Subtitle = styled.h2`
font-family: 'Rubik', sans-serif;
font-weight: 400;
display: flex;
font-size: 18px;
 text-align: center;
 color: white;
 margin-bottom: 1.5em;
 -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;
const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 300px;
    height: 30px
    `;
const GithubIcon = styled(Github)`
color: white;
width: 30px;
transition: all 0.1s ease-in-out;
cursor: pointer;
&:hover {
transform: scale(1.1);
color: #fd82aa;
}
`;
const LinkedinIcon = styled(Linkedin)`
color: white;
width: 30px;
transition: all 0.1s ease-in-out;
cursor: pointer;
&:hover {
transform: scale(1.1);
color: #fd82aa;
}
`;
const MailIcon = styled(Mail)`
color: white;
width: 30px;
transition: all 0.1s ease-in-out;
cursor: pointer;
&:hover {
transform: scale(1.1);
color: #fd82aa;
}
`;

const MouseIcon = styled(Mouse)`
color: white;
width: 30px;
`;

const VerticalDivider = styled.div`
width: 1px;
height: 100%;
background-color: #2F2F2F;
margin: 0 10px;
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.isSticky && `
    flex-direction: row;
`}
    align-items: center;
    width: 100%;
    height: 100%;
    `;

const HeroContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    min-height: 700px;
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`;
const MouseIconContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
position: absolute;
bottom: 50px;
text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
svg {
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
}
`;
const MouseText = styled.span`
font-family: 'Rubik', sans-serif;
font-size: 1.3em;
text-align: center;
color: white;
margin-bottom: 5px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export {
    AvatarContainer, Title, Subtitle, IconsContainer, GithubIcon,
    LinkedinIcon, MailIcon, VerticalDivider, MouseIcon, ImgContainer,
    HeroContainer, MouseIconContainer, MouseText, CardContainer,
};
