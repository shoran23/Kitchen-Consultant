import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Inventory_Home from './inventory/Inventory_Home.js'
import Recipes_Home from './recipes/Recipes_Home.js'
import Budget_Home from './budget/Budget_Home.js'

class Navigator extends React.Component {
    state = {
        showNav: true
    }
    handleNav = state => {
        this.setState({showNav: state})
    }
    render() {
        return (
            <div className='navigation'> 
                <Router>
                    {this.state.showNav ?
                        <nav className='navigation'>
                            <ul>
                                <li><Link onClick={() => this.handleNav(false)} to="/inventory_home">Inventory</Link></li>
                                <li><Link onClick={() => this.handleNav(false)} to="/recipe_home">Recipes</Link></li>
                                <li><Link onClick={() => this.handleNav(false)} to="/budget_home">Budget</Link></li>    
                            </ul>
                        </nav>
                    :
                        <Switch>
                            <Route path="/inventory_home">
                                <Inventory_Home 
                                    spoonacularBaseURL={this.props.spoonacularBaseURL}
                                    handleNav={this.handleNav}
                                    handleModalView={this.props.handleModalView}
                                    handleChange={this.props.handleChange}
                                    // inventory states and functions
                                    searchString={this.props.searchString}
                                    searchResults={this.props.searchResults}
                                    searchResultsNum={this.props.searchResultsNum}
                                    productInfo={this.props.productInfo}
                                    searchAPIForGroceryProduct={this.props.searchAPIForGroceryProduct}
                                    searchApiForProductInfo={this.props.searchApiForProductInfo}
                                />
                            </Route>
                            <Route path="/recipe_home"><Recipes_Home /></Route>
                            <Route path="/budget_home"><Budget_Home /></Route>
                        </Switch>
                    }
                </Router>
            </div>
        )
    }
}
export default Navigator