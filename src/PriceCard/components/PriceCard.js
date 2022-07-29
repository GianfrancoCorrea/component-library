import React from 'react';
import PropTypes from 'prop-types';
import useImage from '../helpers/useImage';
import Card from '../../Card/components/Card';

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function PriceCard({ price, token, name, className }) {
    const { loading, error, image } = useImage(`${name}.svg`);
    const alt = `${name} logo`;

    if (error) { return <div>{alt}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return (
        <Card className={className}>
            <embed type="image/svg+xml" height={40} src={image} />
            <div>
                <p>
                    <span>{capitalize(name)}</span>
                    &nbsp;
                    <div><b>{token}</b></div>
                </p>
            </div>
            <div>
                <div>{price || 0}</div>
            </div>
        </Card>
    );
}

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
