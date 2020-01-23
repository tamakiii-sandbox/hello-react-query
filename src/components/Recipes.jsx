import React from "react";
import { useQuery, prefetchQuery } from "react-query";
import Button from "./Button";
import { fetchRecipes, fetchRecipe } from "../queries";

export default function Recipes({ setActiveRecipe }) {
  const { data, isFetching } = useQuery("Recipes", fetchRecipes);

  /**
   * Traditionally, this would have been done in the useEffect() Hook like this:
   */
  // const [data, setData] = useState([])
  //
  // useEffect(() => {
  //   fetch('https://api-url/recipes')
  //       .then(response => response.json())
  //       .then(data => {
  //         setData(data); // save recipes in state
  //       });
  // }, [])

  return (
    <div>
      <h1>Recipes List
      { isFetching
        ? "Loading"
        : null
      }
        </h1>
      {data.map(Recipe => (
        <p key={Recipe.title}>
          <Button
            onClick={() => {
              // Prefetch the Recipe query
              prefetchQuery(["Recipe", { id: Recipe.id }], fetchRecipe);
              setActiveRecipe(Recipe.id);
            }}
          >
            Load
          </Button>{" "}
          {Recipe.title}
        </p>
      ))}
    </div>
  );
}
