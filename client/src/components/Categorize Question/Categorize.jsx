import React, { useContext } from "react";
import { TestContext } from "../../context/TestContext";
import CategoryList from "./CategoryList";
import ItemList from "./ItemList";

const Categorize = () => {
  const { testData, setTestData } = useContext(TestContext);
  const { categories, items } = testData;

  const moveCategory = (draggedIndex, hoverIndex) => {
    const updatedCategories = [...categories];
    const [draggedCategory] = updatedCategories.splice(draggedIndex, 1);
    updatedCategories.splice(hoverIndex, 0, draggedCategory);
    setTestData({ ...testData, categories: updatedCategories });
  };

  const moveItem = (draggedIndex, hoverIndex) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setTestData({ ...testData, items: updatedItems });
  };

  const addNewQuestion = () => {
    setTestData({
      ...testData,
      categories: [{ id: `cat-1`, value: "" }],
      items: [{ id: "item-1", value: "", category: "" }],
    });
  };

  const deleteQuestion = () => {
    setTestData({ ...testData, categories: [], items: [] });
  };

  return (
    <div className="min-h-[50vh] border p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">QUESTION 1</h2>
        <input
          type="number"
          placeholder="Points?"
          className="border rounded-lg px-3 py-2 w-24 outline-none"
        />
      </div>

      <div className="my-3 flex justify-between items-center">
        <input
          type="text"
          placeholder="Description (optional)"
          className="outline-none border px-2 py-1 rounded-sm w-[30vw]"
        />
        <p className="text-sm text-blue-600">categorize</p>
      </div>

      <CategoryList categories={categories} moveCategory={moveCategory} />
      <button
        type="button"
        onClick={() =>
          setTestData({
            ...testData,
            categories: [
              ...categories,
              { id: `cat-${categories.length + 1}`, value: "" },
            ],
          })
        }
        className="text-blue-500 mt-2"
      >
        + Add Category
      </button>

      <ItemList items={items} moveItem={moveItem} categories={categories} />
      <button
        type="button"
        onClick={() =>
          setTestData({
            ...testData,
            items: [
              ...items,
              { id: `item-${items.length + 1}`, value: "", category: "" },
            ],
          })
        }
        className="text-blue-500 mt-2"
      >
        + Add Item
      </button>
    </div>
  );
};

export default Categorize;
