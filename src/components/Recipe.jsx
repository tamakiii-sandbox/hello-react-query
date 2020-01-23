import React from "react";
import { useQuery } from "react-query";
import Button from "./Button";
import { fetchRecipe } from "../queries";

export default function Recipe({ activeRecipe, setActiveRecipe }) {
  const { data, isFetching } = useQuery(
    ["recipe", { id: activeRecipe }],
    fetchRecipe
  );

  return (
    <React.Fragment>
      <Button onClick={() => setActiveRecipe(null)}>Back</Button>
      <h1>
        ID: {activeRecipe} {isFetching ? "Loading Recipe" : null}
      </h1>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Content: {data.content}</p>
        </div>
      ) : null}
      <br />
      <br />
    </React.Fragment>
  );
}
