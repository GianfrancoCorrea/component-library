import styled from 'styled-components';
import { Github, Linkedin, Mail } from '@styled-icons/feather';
import { Mouse } from '@styled-icons/bootstrap/Mouse';

const AvatarContainer = styled.div`
img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
}
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
max-width: 300px;
background-color: #2F2F2F;
border-radius: 5px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
padding: 20px;
margin: 20px;
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
transition: all 0.3s ease-in-out;
&:hover {
transform: scale(1.1);
color: #fd82aa;
}
`;
const LinkedinIcon = styled(Linkedin)`
color: white;
width: 30px;
transition: all 0.3s ease-in-out;
&:hover {
transform: scale(1.1);
color: #fd82aa;
}
`;
const MailIcon = styled(Mail)`
color: white;
width: 30px;
transition: all 0.3s ease-in-out;
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

export { AvatarContainer, Title, Subtitle, IconsContainer, GithubIcon, LinkedinIcon, MailIcon, VerticalDivider, MouseIcon };
