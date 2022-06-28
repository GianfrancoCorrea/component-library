import React from 'react';
import { mount, shallow } from 'enzyme';
import Accordion from '../index';

describe('Accordion Unit Test', () => {
    let props;
    let shallowedAccordion;

    const getAccordion = () => {
        if (!shallowedAccordion) {
            shallowedAccordion = shallow(<Accordion {...props} />);
        }
        return shallowedAccordion;
    };

    const mountedAccordion = () => mount(<Accordion {...props} />);

    beforeEach(() => {
        props = {
            header    : '',
            content   : '',
            open      : false,
            className : '',
            disabled  : false,
        };
        shallowedAccordion = undefined;
    });
    test('Component should render without crashing', () => {
        expect(getAccordion()).toBeDefined();
    });
    test('Component should render correctly', () => {
        expect(mountedAccordion()).toMatchSnapshot();
    });
    test('Should exists accordion-closed class when open is FALSE', () => {
        const wrapper = getAccordion();
        expect(wrapper.find('.accordion-closed').exists()).toBe(true);
    });
    test('Should exists accordion-open class when click in header-wrapper', () => {
        const wrapper = mountedAccordion();
        wrapper.find('.accordion-header-wrapper').simulate('click');
        expect(wrapper.find('.accordion-open').exists()).toBe(true);
    });
    test('Should exists accordion-disabled and accordion-closed class when disabled prop is TRUE', () => {
        props = {
            ...props,
            disabled: true,
        };
        const wrapper = getAccordion();
        expect(wrapper.find('.accordion-disabled').exists()).toBe(true);
        expect(wrapper.find('.accordion-closed').exists()).toBe(true);
    });
});
