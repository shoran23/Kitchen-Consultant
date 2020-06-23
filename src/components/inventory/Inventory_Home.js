import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Search from "./Search.js";

class Inventory_Home extends React.Component {
    state = {
        searchString: "",
        searchResults: {},
        searchResultsNum: 10,
        productInfo: {}
    }

    searchAPIForGroceryProduct = (searchNumber,searchItem) => {
        fetch(`${this.props.spoonacularBaseURL}/food/products/search?offset=0&number=${searchNumber}&query=${searchItem}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "b23d5fc7acmsh72f6c5cdd0d0545p1c4890jsndc70e71ceed2"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.setState({searchResults: resJson})
            console.log(resJson)
        })
        .catch(err => console.log(err))
    }

    searchApiForProductInfo = id => {
        fetch(`${this.props.spoonacularBaseURL}/food/products/${id}`, {
            "methods" : "GET",
            "headers" : {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "b23d5fc7acmsh72f6c5cdd0d0545p1c4890jsndc70e71ceed2"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.setState({productInfo: resJson})
            console.log(resJson)
        })
        .catch(err => console.log(err))
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        console.log('State: ',this.state.searchResults)
        return(
            <div className='inventory'>
                <Router>
                    <nav className='inventory-navigation'>
                        <div className='inventory-title'>Inventory</div>
                        <ul className='inventory-navigation-list'>
                            <li className='inventory-navigation-list-item'><Link to="/inventory/search">Product Search</Link></li>
                            <li className='inventory-navigation-list-item'><Link to="/inventory/add">Add Purchased Items</Link></li>
                            <li className='inventory-navigation-list-item'><Link to="/inventory/refrigerator">Refrigerator</Link></li>
                            <li className='inventory-navigation-list-item'><Link to="/inventory/pantry">Pantry</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/inventory/search">
                            <Search
                                searchString={this.state.searchString}
                                handleChange={this.handleChange}

                                searchAPIForGroceryProduct={this.searchAPIForGroceryProduct}
                                searchResultsNum={this.state.searchResultsNum}
                                searchResults={this.state.searchResults}

                                searchApiForProductInfo={this.searchApiForProductInfo}
                                productInfo={this.state.productInfo}
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Inventory_Home