const Input = () => {
    return ( 
        <div className="inputs">
        <input aria-label="food-input" 
        id="food-input"
        placeholder="Enter your ingredient"
        onchange="handleFoodChange()"/>
        <button id="recipe-button" onclick="handleRecipeClick()">
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>

        <button id="cocktail-button" onclick="randomCocktail()">
         <span>Bottoms up? </span><i className="fas fa-cocktail"></i>
      </button>
    </div>
     );
}
 
export default Input;