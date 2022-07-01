import React from 'react';
import PriceCard from '../index';

export default {
    title      : 'portfolio/PriceCard',
    component  : PriceCard,
    viewMode   : 'docs',
    parameters : {
        componentSubtitle: 'Portfolio PriceCard',
    },
};

export const Default = () => (
    <div style={{ background: '#f4f4f4', padding: '40px', display: 'flex' }}>
        <PriceCard
            name="bitcoin"
            token="BTC"
            price={1.0}
        />
        <PriceCard
            name="ethereum"
            token="ETH"
            price={1.0}
        />
        <PriceCard
            name="litecoin"
            token="LTC"
            price={1.0}
        />
    </div>
);

