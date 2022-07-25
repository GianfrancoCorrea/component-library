import styled from 'styled-components';
import { Github } from '@styled-icons/feather/Github';
import { Linkedin } from '@styled-icons/feather/Linkedin';
import { Mail } from '@styled-icons/feather/Mail';

const SectionContainer = styled.div`
display: flex;
justify-content: center;
width: 100vw;
position: relative;
padding: 60px 0;
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
const SectionWrapper = styled.div`
    width: 100vw;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 0 20px;
    text-align: left;
`;

const Welcome = styled.div`
    font-weight: 500;
    font-size: 30px;
`;

const Title = styled.div`

margin-top: 40px;
 font-size: 90px;
font-weight: 900;
line-height: .9;
 `;

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-top: 60px;
    svg {
        width: 30px;
        transition: all 0.1s ease-in-out;
        cursor: pointer;
        color: currentColor;
        &:hover {
            transform: scale(1.1);
        }
    }
    `;
const GithubIcon = styled(Github)`
&:hover {
color: #38FF58;
}
`;
const LinkedinIcon = styled(Linkedin)`
&:hover {
color: #38FF58;
}
`;
const MailIcon = styled(Mail)`
&:hover {
color: #38FF58;
}
`;

export {
    SectionContainer, SectionWrapper, Welcome, Title, IconsContainer, GithubIcon,
    LinkedinIcon, MailIcon,
};
