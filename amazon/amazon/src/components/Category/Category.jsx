import React from "react";
import { CategoryInfos } from "./CategoryFullinfos.jsx";
import CategoryCard from "./CategoryCard.jsx";
import classes from "../Category/Category.module.css";
function Category() {
  return (
    <section className={classes.category_container}>
      {CategoryInfos.map((infos) => {
        return <CategoryCard key={infos.name} data={infos} />;
      })}
    </section>
  );
}

export default Category;
