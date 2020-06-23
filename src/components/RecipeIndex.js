import React from 'react'

class RecipeIndex extends React.Component {
    getRecipes = () => {
        fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
                "x-rapidapi-key": "b23d5fc7acmsh72f6c5cdd0d0545p1c4890jsndc70e71ceed2"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
        })
        .catch(err => {
            console.log(err);
        });
    }
    render() {
        return (
            <div className='recipe-index'>
                Recipes
            </div>
        )
    }
    componentDidMount() {
        this.getRecipes()
    }
}
export default RecipeIndex