import React from 'react';
import styled from 'styled-components';
import { spaceNormal } from '../../styles/variables';
import PropTypes from 'prop-types';
import { HeadingMedium } from '../../styles';

const StyledCard = styled.div`
    border-radius: 4px;
    padding: ${spaceNormal};
    background: #ffffff;
`;

function Card(props) {
    const {
        children, title, className,
    } = props;

    return (
        <StyledCard className={className}>
            { title && (
                <HeadingMedium content={title} />
            )}
            { children }
        </StyledCard>
    );
}

Card.defaultProps = {
    children  : '',
    title     : '',
    className : '',
};

Card.propTypes = {
    /**
    Card content
    */
    children  : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Card title
    */
    title     : PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
    Custom className
    */
    className : PropTypes.string,
};

export default Card;
