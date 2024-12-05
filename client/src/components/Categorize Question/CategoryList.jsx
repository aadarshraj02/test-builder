import React from "react";
import Category from "./Category";

const CategoryList = ({ categories, moveCategory }) => {
  return (
    <div>
      <h3 className="text-lg my-2 font-semibold">Categories</h3>
      {categories.map((category, index) => (
        <Category
          key={category.id}
          category={category}
          index={index}
          moveCategory={moveCategory}
        />
      ))}
    </div>
  );
};

export default CategoryList;
