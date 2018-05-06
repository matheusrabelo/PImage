import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import PImage from '.';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('PImage', () => {
    const srcs = [
        'http://lorempixel.com/100/100/animals/8',
        'http://lorempixel.com/200/200/animals/8',
        'http://lorempixel.com/800/800/animals/8',
        'http://lorempixel.com/1200/1200/animals/8',
        'http://lorempixel.com/1600/1600/animals/8',
        'http://lorempixel.com/1800/1800/animals/8',
    ];

    it('should render with a single src', () => {
        const wrapper = shallow(<PImage srcs={[srcs[5]]}/>);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render with multiple srcs', () => {
        const wrapper = shallow(<PImage srcs={srcs}/>);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
