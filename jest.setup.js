/* eslint-disable import/no-extraneous-dependencies */
import { configure as configEnzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from '@testing-library/react'

configure({ testIdAttribute: 'data-test-id' })
configEnzyme({ adapter: new Adapter() });

window.scrollTo = () => {};
window.matchMedia =
  window.matchMedia ||
  function () {
      return {
          matches: false,
          addListener() {},
          removeListener() {},
      };
  };
