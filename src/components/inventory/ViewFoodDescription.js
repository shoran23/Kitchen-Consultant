import React from 'react'
import FormParagraphColumn from '../form_components/FormParagramColumn.js'
import ImageCarousel from '../form_components/ImageCarousel.js'

class ViewFoodDescription extends React.Component {
    render() {
        return ( 
            <div className='inventory-item-view-description'>
                <div className='inventory-item-view-description-title'>{this.props.productInfo.title}</div>
                {this.props.productInfo.images ?
                    <ImageCarousel
                        images={this.props.productInfo.images}
                    />
                :
                    <div></div>
                }
                <FormParagraphColumn 
                    label=""
                    paragraph={this.props.productInfo.description}
                />
            </div>
        )
    }
}
export default ViewFoodDescription