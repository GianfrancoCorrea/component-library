import styled from 'styled-components';
import { Github } from '@styled-icons/feather/Github';
import { Linkedin } from '@styled-icons/feather/Linkedin';
import { Mail } from '@styled-icons/feather/Mail';

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
    flex-wrap: wrap;
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
    Welcome, Title, IconsContainer, GithubIcon,
    LinkedinIcon, MailIcon,
};
