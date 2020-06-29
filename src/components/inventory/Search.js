import React from 'react'
import FormInputColumn from '../form_components/FormInputColumn.js'
import FormInputRow from '../form_components/FormInputRow.js'

class SearchItem extends React.Component {
    handleGetDescription = id => {
        this.props.searchApiForProductInfo(id)
        this.props.handleModalView('food-description')
    }
    handleGetNutrition = id => {
        this.props.searchApiForProductInfo(id)
        this.props.handleModalView('food-nutrition')   
    }
    handleGetIngredients = id => {
        this.props.searchApiForProductInfo(id)
        this.props.handleModalView('add-to-inventory')
    }
    render() {
        return(
            <div className='inventory-search-item'>
                <div className='inventory-search-item-name'>{this.props.title}</div>
                <button 
                    className='inventory-search-item-details'
                    onClick={() => this.handleGetDescription(this.props.id)}
                >
                    Description
                </button>
                <button
                    className='inventory-search-item-nutrition'
                    onClick={() => this.handleGetNutrition(this.props.id)}
                >
                    Nutrition
                </button>
                <button
                    className='inventory-search-item-ingridents'
                    onClick={() => this.handleGetIngredients(this.props.id)}
                >
                    Ingredients
                </button>
                <button
                    className='inventory-search-item-add'
                >
                    Add to Inventory
                </button>
            </div>
        )
    }
}
class Search extends React.Component {
    render() {
        return(
            <div className='inventory-search'>
                <div className='form-column' id='inventory-search'>
                    <div className='form-column'>
                        <div className='form-row'>
                            <FormInputColumn 
                                type='text'
                                label='Search for Grocery Products'
                                name='searchString'
                                id='searchString'
                                value={this.props.searchString}
                                onChange={this.props.handleChange}
                            />
                            <button className='inventory-search-button' onClick={() => this.props.searchAPIForGroceryProduct(this.props.searchResultsNum,this.props.searchString)}>
                                Search
                            </button>
                        </div>
                        <FormInputRow 
                            type='number'
                            label='Number of Results'
                            name='searchResultsNum'
                            id='searchResultsNum'
                            value={this.props.searchResultsNum}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className='inventory-search-results'>
                        {this.props.searchResults.products ?
                            <div className='inventory-search-results-valid'>
                                {this.props.searchResults.products.map((result,index) => (
                                    <SearchItem 
                                        key={result.id}
                                        title={result.title}
                                        id={result.id}
                                        handleChange={this.props.handleChange}
                                        searchApiForProductInfo={this.props.searchApiForProductInfo}
                                        handleModalView={this.props.handleModalView}
                                    />
                                ))}
                                <button 
                                    className='inventory-search-results-number'
                                    onClick={() => this.props.searchAPIForGroceryProduct(this.props.searchResults.totalProducts,this.props.searchString)}
                                >
                                    View All Available Products ({this.props.searchResults.totalProducts})
                                </button>
                            </div>
                        :
                            <div className='inventory-search-results-invalid'>
                                No Search Results
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Search