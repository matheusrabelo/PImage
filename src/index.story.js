import PImage from '.';
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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

    .add('with some styles', () => {
        const Card = styled.div`
            width: 400px;
            box-shadow: 0px 0px 33px 7px rgba(0,0,0,0.48);
            border-radius: 5px;
            img {
                border-radius: 5px 5px 0 0;
            }
        `;
        const Title = styled.div`
            text-align: center;
            padding-bottom: 5px;
        `;
        return (
            <Card>
                <PImage
                    srcs={srcs}
                    onUpdate={action('Updated')}/>
                <Title>Funny Dog</Title>
            </Card>
        );
    })

;