import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';

describe('Card Unit Test', () => {
    let props;
    let shallowedCard;

    const getCard = () => {
        if (!shallowedCard) {
            shallowedCard = shallow(<Card {...props} />);
        }
        return shallowedCard;
    };

    beforeEach(() => {
        props = {
            children: 'Panel Card content',
        };
        shallowedCard = undefined;
    });

    test('Component should render without crashing', () => {
        expect(getCard()).toBeDefined();
    });

    test('Component should render correctly', () => {
        expect(getCard()).toMatchSnapshot();
    });
});
