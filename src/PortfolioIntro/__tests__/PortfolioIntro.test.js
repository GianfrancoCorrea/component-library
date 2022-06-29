import React from 'react';
import { mount, shallow } from 'enzyme';
import Intro from '../index';

describe('Intro Unit Test', () => {
    let props;
    let shallowedIntro;

    const getIntro = () => {
        if (!shallowedIntro) {
            shallowedIntro = shallow(<Intro {...props} />);
        }
        return shallowedIntro;
    };

    const mountedIntro = () => mount(<Intro {...props} />);

    beforeEach(() => {
        props = {
            avatar      : 'https://avatars0.githubusercontent.com/u/17098281?s=460&v=4',
            name        : 'John Doe',
            description : 'I am a web developer',
        };
        shallowedIntro = undefined;
    });

    test('should match snapshot', () => {
        const intro = mountedIntro();
        expect(intro).toMatchSnapshot();
    });
    test('should render Intro component', () => {
        const intro = getIntro();
        expect(intro.length).toBe(1);
    });
    test('should render Intro component with Avatar', () => {
        const intro = mountedIntro();
        expect(intro.find('Avatar').length).toBe(1);
    });
});
