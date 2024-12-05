import React, { useContext } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { useDrag, useDrop } from "react-dnd";
import { TestContext } from "../../context/TestContext"; 

const Category = ({ category, index, moveCategory }) => {
  const { setTestData, testData } = useContext(TestContext);

  const handleCategoryChange = (e) => {
    const updatedCategories = testData.categories.map((cat, i) =>
      i === index ? { ...cat, value: e.target.value } : cat
    );
    setTestData({ ...testData, categories: updatedCategories });
  };

  const [, ref] = useDrag({
    type: "CATEGORY",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "CATEGORY",
    hover: (item) => {
      if (item.index !== index) {
        moveCategory(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="flex items-center gap-2 mb-2"
    >
      <HiSquares2X2
        className="text-gray-500 cursor-grab hover:text-black"
        title="Drag"
      />
      <input
        type="text"
        placeholder={`Category ${index + 1}`}
        value={category.value}
        onChange={handleCategoryChange}
        className="border w-32 rounded-md outline-none px-2 py-1"
      />
      <button
        type="button"
        onClick={() =>
          setTestData({
            ...testData,
            categories: testData.categories.filter((_, i) => i !== index),
          })
        }
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default Category;
