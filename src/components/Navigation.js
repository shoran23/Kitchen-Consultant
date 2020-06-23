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
    render() {
        return (
            <div className='navigation'>
                <Router>
                    <nav className='navigation'>
                        <ul>
                            <li><Link to="/inventory_home">Inventory</Link></li>
                            <li><Link to="/recipe_home">Recipes</Link></li>
                            <li><Link to="/budget_home">Budget</Link></li>    
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/inventory_home">
                            <Inventory_Home 
                                spoonacularBaseURL={this.props.spoonacularBaseURL}
                            />
                        </Route>
                        <Route path="/recipe_home"><Recipes_Home /></Route>
                        <Route path="/budget_home"><Budget_Home /></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Navigator