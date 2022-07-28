import Header from "./components/header/header.component";
import SearchResults from "./components/search-results/search-results.component"
import RecipeMessage from "./components/recipe/recipe-message.component";
import Recipe from "./components/recipe/recipe.component";
import AddRecipeWindow from "./components/addRecipeWindow/addRecipeWindow.component";
import {useEffect, useState, useCallback} from "react"
import {useSelector} from "react-redux"
function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  const hashChangeHandler = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);
    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    };
  }, [hashChangeHandler]);
  const {showModal} = useSelector(state => state.ui)
  console.log(showModal)
  return (
      <div className="container">
        <Header />
        <SearchResults />
        {hash ? <Recipe recipeId={hash.slice(1)} /> : <RecipeMessage />}
        {showModal && <AddRecipeWindow />}
      </div>
  );
}

export default App;
