import React from 'react';
import PropTypes from 'prop-types';

class PImage extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
        };
    }

    componentDidMount() {
        if (document.readyState === 'complete') {
            this.updateImage();
        }
        document.addEventListener('readystatechange', event => {
            if (event.target.readyState === 'complete') {
                this.updateImage();
            }
        });
    }

    updateImage() {
        const { currentIndex } = this.state;
        const { srcs } = this.props;
        if (currentIndex < srcs.length - 1) {
            const image = new Image();
            image.src = srcs[currentIndex];
            image.onload = () => {
                this.setState({ currentIndex: currentIndex + 1 });
            };
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.onUpdate) {
            this.props.onUpdate(prevProps, prevState);
        }
        this.updateImage();
    }

    render() {
        return (
            <img
                style={{width:'100%', heigth: '100%'}}
                src={this.props.srcs[this.state.currentIndex]}/>
        );
    }
}

PImage.propTypes = {
    srcs: PropTypes.array.isRequired,
    onUpdate: PropTypes.func,
};

export default PImage;
