import { ReactQueryConfigProvider } from "react-query";
import React, { lazy } from "react";

const Recipes = lazy(() => import("./components/Recipes"));
const Recipe = lazy(() => import("./components/Recipe"));

const queryConfig = {
  suspense: true
};

export function App() {
  const [activeRecipe, setActiveRecipe] = React.useState(null);

  return (
  <React.Fragment>
    <h2>Fast Recipes</h2>
    <hr />
    <ReactQueryConfigProvider config={queryConfig}>
        <React.Suspense fallback={<h1> Loading ...</h1>}>
          {  activeRecipe ? (
              <Recipe
                activeRecipe={activeRecipe}
                setActiveRecipe={setActiveRecipe}
              />
            ) : (
              <Recipes setActiveRecipe={setActiveRecipe} />
            )}
        </React.Suspense>
    </ReactQueryConfigProvider>
  </React.Fragment>
  );
}
