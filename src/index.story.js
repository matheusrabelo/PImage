import PImage from '.';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

const srcs = [
    'https://picsum.photos/100/100?image=1025',
    'https://picsum.photos/200/200?image=1025',
    'https://picsum.photos/800/800?image=1025',
    'https://picsum.photos/1200/1200?image=1025',
    'https://picsum.photos/1600/1600?image=1025',
    'https://picsum.photos/1800/1800?image=1025',
];

storiesOf('PImage', module)

    .add('with a single src', () => (
        <PImage srcs={[srcs[5]]}/>
    ))

    .add('with multiple srcs', () => (
        <PImage srcs={srcs} onUpdate={action('Updated')}/>
    ))

;