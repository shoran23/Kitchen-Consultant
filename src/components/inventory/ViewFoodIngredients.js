import React from 'react'

class ViewFoodIngredients extends React.Component {
    render() {
        return ( 
            <div className='inventory-item-view-ingredients'>
                <div className='inventory-item-view-ingredients-title'>{this.props.itemTitle}</div>
                <div className='inventory-item-view-ingredients-body'>
                    Food Ingredients
                </div>
            </div>
        )
    }
}
export default ViewFoodIngredients