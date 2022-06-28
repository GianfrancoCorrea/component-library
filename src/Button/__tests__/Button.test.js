import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('Button Unit Test', () => {
    let props;
    let shallowedButton;

    const getButton = () => {
        if (!shallowedButton) {
            shallowedButton = shallow(<Button {...props} />);
        }
        return shallowedButton;
    };

    beforeEach(() => {
        props = {};
        shallowedButton = undefined;
    });

    test('Component should render without crashing', () => {
        expect(getButton()).toBeDefined();
    });

    test('Component should render correctly', () => {
        expect(getButton()).toMatchSnapshot();
    });
});
