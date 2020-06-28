import React from 'react'
import ViewFoodDescription from './inventory/ViewFoodDescription.js'
import ViewFoodNutrition from './inventory/ViewFoodNutrition.js'
import ViewFoodIngredients from './inventory/ViewFoodIngredients.js'

class ViewModal extends React.Component {
    renderSwitch = option => {
        switch(option){
            case 'food-description':
                return <ViewFoodDescription productInfo={this.props.productInfo} />
            case 'food-nutrition':
                return <ViewFoodNutrition productInfo={this.props.productInfo} /> 
            case 'foot-ingredients':
                return <ViewFoodIngredients productInfo={this.props.productInfo}/>
        }
    }
    render() {
        return (
            <div className='view-modal'>
                <button onClick={() => this.props.handleModalView("hide")}>HIDE</button>
                <div className='view-modal-body'>
                    {this.renderSwitch(this.props.modalOption)}
                </div>
            </div>
        )
    }
}
export default ViewModal