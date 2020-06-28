import React from 'react';
import Header from './components/Header.js'
import './App.css';
import './css/header.css'
import './css/inventory.css'
import Navigation from './components/Navigation.js'
import ViewModal from './components/ViewModal.js'

const spoonacularBaseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"

class App extends React.Component {
    state = {
        // main app states
        loggedIn: false,
        viewModal: false,
        modalOption: '',
        // inventory states
        searchString: "",
        searchResults: {},
        searchResultsNum: 10,
        productInfo: {},
    }
    /* Handle Views *************************************************************************************************************/
    handleModalView = render => {
        if(render === 'hide'){
            this.setState({viewModal: false})
        } else {
            this.setState({viewModal: true})
        }
        this.setState({modalOption: render})
    }
    /* Inventory Functions *******************************************************************************************************/
    searchAPIForGroceryProduct = (searchNumber,searchItem) => {
        fetch(`${spoonacularBaseURL}/food/products/search?offset=0&number=${searchNumber}&query=${searchItem}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "b23d5fc7acmsh72f6c5cdd0d0545p1c4890jsndc70e71ceed2"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.setState({searchResults: resJson})
        })
        .catch(err => console.log(err))
    }
    searchApiForProductInfo = id => {
        fetch(`${spoonacularBaseURL}/food/products/${id}`, {
            "methods" : "GET",
            "headers" : {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "b23d5fc7acmsh72f6c5cdd0d0545p1c4890jsndc70e71ceed2"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.setState({productInfo: resJson})
        })
        .catch(err => console.log(err))
    }
    /* State Handling *********************************************************************************/
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    render() {
        return (
            <div className="App">
                <div className='app-view'>
                    <Header 
                        loggedIn={this.state.loggedIn}
                    />
                    <Navigation 
                        handleModalView={this.handleModalView}
                        handleChange={this.handleChange}
                        // inventory states and functions
                        searchString={this.state.searchString}
                        searchResults={this.state.searchResults}
                        searchResultsNum={this.state.searchResultsNum}
                        productInfo={this.state.productInfo}
                        searchAPIForGroceryProduct={this.searchAPIForGroceryProduct}
                        searchApiForProductInfo={this.searchApiForProductInfo}
                   />
            </div>
                {this.state.viewModal ?
                    <ViewModal 
                        handleModalView={this.handleModalView}
                        productInfo={this.state.productInfo}
                        searchResults={this.state.searchResults}
                        modalOption={this.state.modalOption}
                    />
                :
                    <div></div>
                }
            </div>
        );
    }
}
export default App;
