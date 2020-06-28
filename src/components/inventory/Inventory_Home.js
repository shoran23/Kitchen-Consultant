import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import Search from "./Search.js";

class Inventory_Home extends React.Component {
    render() {
        return(
            <div className='inventory'>
                <Router>
                    <nav className='inventory-navigation'>
                        <button onClick={() => this.props.handleNav(true)}>Back</button>
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
                                handleChange={this.props.handleChange}
                                handleModalView={this.props.handleModalView}
                                // inventory states and functions
                                searchString={this.props.searchString}
                                searchResults={this.props.searchResults}
                                searchResultsNum={this.props.searchResultsNum}
                                productInfo={this.props.productInfo}
                                searchAPIForGroceryProduct={this.props.searchAPIForGroceryProduct}
                                searchApiForProductInfo={this.props.searchApiForProductInfo}
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Inventory_Home