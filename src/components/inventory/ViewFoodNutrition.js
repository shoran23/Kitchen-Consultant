import React from 'react'
import FormParagraphColumn from '../form_components/FormParagramColumn'

class NutrientFact extends React.Component {
    render() {
        return (
            <div className=''>
                <div className='form-title'>{this.props.nutrient.title}</div>
                <div className='form-row'>
                    < FormParagraphColumn 
                        label='Amount'
                        paragraph={this.props.nutrient.amount}
                    />
                    < FormParagraphColumn 
                        label='Unit'
                        paragraph={this.props.nutrient.unit}
                    />
                    < FormParagraphColumn 
                        label='Percent of Daily Needs'
                        paragraph={this.props.nutrient.percentOfDailyNeeds}
                    />
                </div>
            </div>
        )
    }
}

class ViewFoodNutrition extends React.Component {
    render() {
        console.log(this.props.productInfo)
        return (
            <div className='inventory-item-view-nutrition'>
                <div className='inventory-item-view-nutrition-title'>{this.props.productInfo.title} Nutrition Facts</div>
                {this.props.productInfo.nutrition ?
                    <div className='inventory-item-view-nutrition-body'>
                        {this.props.productInfo.nutrition.nutrients.map((nutrient,index) => (
                            <NutrientFact 
                                key={index}
                                nutrient={nutrient}
                            />
                        ))}
                    </div>
                :
                    <div></div>
                }
            </div>
        )
    }
}
export default ViewFoodNutrition 