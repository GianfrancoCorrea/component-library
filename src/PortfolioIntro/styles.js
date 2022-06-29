import styled from 'styled-components';
import { Github, Linkedin, Mail } from '@styled-icons/feather';

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
background-color: #fafafa;
border-radius: 5px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
padding: 20px;
margin: 20px;
`;

const Title = styled.h1`
 font-size: 1.5em;
 text-align: center;
 color: palevioletred;
 `;
const Subtitle = styled.h2`
font-size: 1em;
text-align: center;
color: palevioletred;
animation: fadeIn 0.5s ease-in-out;
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
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
color: palevioletred;
width: 30px;
transition: all 0.3s ease-in-out;
&:hover {
transform: scale(1.1);
}
`;
const LinkedinIcon = styled(Linkedin)`
color: palevioletred;
width: 30px;
transition: all 0.3s ease-in-out;
&:hover {
transform: scale(1.1);
}
`;
const MailIcon = styled(Mail)`
color: palevioletred;
width: 30px;
transition: all 0.3s ease-in-out;
&:hover {
transform: scale(1.1);
}
`;

const VerticalDivider = styled.div`
width: 1px;
height: 100%;
background-color: #f0f0f0;
margin: 0 10px;
`;

export { AvatarContainer, Title, Subtitle, IconsContainer, GithubIcon, LinkedinIcon, MailIcon, VerticalDivider };
