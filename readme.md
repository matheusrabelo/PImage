# &lt;PImage /&gt;
[![npm version](https://badge.fury.io/js/pimage.svg)](https://badge.fury.io/js/pimage)
[![Build Status](https://travis-ci.org/matheusrabelo/PImage.svg?branch=master)](https://travis-ci.org/matheusrabelo/PImage)

The image component for the next generation.

## [Demo](https://matheusrabelo.github.io/PImage/stories)

## About
**PImage** is a React **P**rogressive **Image** loader component. 

Why you need this? Because you can have a image with multiple sources.

While your website is completing from loading, your user will get better and better images.

All with a configureless setup.

## Install
```bash
$ npm install pimage
```

## Usage
```jsx
const lowQuality = 'http://lorempixel.com/200/200/animals/6';
const medQuality = 'http://lorempixel.com/800/800/animals/6';
const highQuality = 'http://lorempixel.com/1600/1600/animals/6';

<PImage srcs={[lowQuality, medQuality, highQuality]}/>
```

## Roadmap
[ ] Add support to srcset

## Contributions
Stars and contributions are welcome!

## License
MIT

## Author
Matheus Freire Rabelo
