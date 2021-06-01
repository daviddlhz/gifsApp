import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Akame"]);

  return (
    <Fragment>
      <h2>Gif App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, i) => (
          <GifGrid key={i} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};
