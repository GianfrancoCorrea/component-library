import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useImage from '../helpers/useImage';
import { Card, HeadingMedium } from '../../styles';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function PriceCard({ price, token, name, className }) {
    const { loading, error, image } = useImage(`${name}.svg`);
    const alt = `${name} logo`;

    if (error) { return <div>{alt}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return (
        <StyledPriceCard className={className}>
            <embed type="image/svg+xml" height={40} src={image} />
            <ExchangeName>{capitalize(name)}</ExchangeName>
            <ExchangeCode>{token}</ExchangeCode>
            <ExchangePrice>{price || 0}</ExchangePrice>
        </StyledPriceCard>
    );
}

const StyledPriceCard = styled(Card)`
    text-align: center;
    min-width: 140px;
`;

const ExchangeName = styled.div`
    margin-bottom: 10px;
    font-size: 18px;
    margin: 15px 0 5px;
    line-height: 1;
`;

const ExchangeCode = styled.span`
    background: rgba(255, 255, 255, .2);
    color: rgba(255, 255, 255, .5);
    padding: 0 10px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    letter-spacing: 1px;
    font-size: 70%;
`;

const ExchangePrice = styled(HeadingMedium)`
    color: hsl(110, 100%, 70%);
    margin-top: 20px;
`;

PriceCard.defaultProps = {
    className: '',
};

PriceCard.propTypes = {
    price     : PropTypes.number.isRequired,
    name      : PropTypes.string.isRequired,
    token     : PropTypes.string.isRequired,
    className : PropTypes.string,
};

export default PriceCard;
