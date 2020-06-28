import React from 'react'

class ImageCarousel extends React.Component {
    state = {
        currentImage: 0,
    }
    handleCurrentImage = action => {
        if(action === 'next'){
            if(this.state.currentImage < this.props.images.length - 1){
                this.setState({currentImage: this.state.currentImage + 1})
            }
        } else {
            if(this.state.currentImage > 0){
                this.setState({currentImage: this.state.currentImage - 1})
            }
        }
    }
    render() {
        return (
            <div className='image-carousel'

            >
                <div className='image-carousel-previous' onClick={() => this.handleCurrentImage('previous')}>Previous</div>
                <img src={this.props.images[this.state.currentImage]} alt=""/>
                <div className='image-carousel-next' onClick={() => this.handleCurrentImage('next')}>Next</div>
            </div>
        )
    }
}
export default ImageCarousel