import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PImage from '.';

const srcs = [
    'http://lorempixel.com/100/100/animals/8',
    'http://lorempixel.com/200/200/animals/8',
    'http://lorempixel.com/800/800/animals/8',
    'http://lorempixel.com/1200/1200/animals/8',
    'http://lorempixel.com/1600/1600/animals/8',
    'http://lorempixel.com/1800/1800/animals/8',
];

storiesOf('PImage', module)

    .add('with a single src', () => (
        <PImage srcs={[srcs[5]]}/>
    ))

    .add('with multiple srcs', () => (
        <PImage srcs={srcs} onUpdate={action('Updated')}/>
    ))

;