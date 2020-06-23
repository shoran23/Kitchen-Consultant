import React from 'react';
import Header from './components/Header.js'
import './App.css';
import './css/header.css'
import './css/inventory.css'
import Navigation from './components/Navigation.js'

const spoonacularBaseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/"

class App extends React.Component {
  state = {
    loggedIn: false
  }
  render() {
    return (
      <div className="App">
        <Header 
          loggedIn={this.state.loggedIn}
        />
        {this.state.showNav ?
          <Navigation 
              spoonacularBaseURL={spoonacularBaseURL}
              showNav={this.state.showNav}
          />
        :
            <div></div>    
        }
      </div>
    );
  }
}
export default App;
