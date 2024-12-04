import React, { useState } from "react";
import CategoryList from "./CategoryList";
import ItemList from "./ItemList";

const Categorize = () => {
  const [categories, setCategories] = useState([{ id: "cat-1", value: "" }]);
  const [items, setItems] = useState([
    { id: "item-1", value: "", category: "" },
  ]);

  const moveCategory = (draggedIndex, hoverIndex) => {
    const updatedCategories = [...categories];
    const [draggedCategory] = updatedCategories.splice(draggedIndex, 1);
    updatedCategories.splice(hoverIndex, 0, draggedCategory);
    setCategories(updatedCategories);
  };

  const moveItem = (draggedIndex, hoverIndex) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  const addNewQuestion = () => {
    setCategories([{ id: `cat-1`, value: "" }]);
    setItems([{ id: "item-1", value: "", category: "" }]);
  };

  const deleteQuestion = () => {
    setCategories([]);
    setItems([]);
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

      <CategoryList
        categories={categories}
        setCategories={setCategories}
        moveCategory={moveCategory}
      />
      <button
        type="button"
        onClick={() =>
          setCategories([
            ...categories,
            { id: `cat-${categories.length + 1}`, value: "" },
          ])
        }
        className="text-blue-500 mt-2"
      >
        + Add Category
      </button>

      <ItemList
        items={items}
        setItems={setItems}
        moveItem={moveItem}
        categories={categories}
      />
      <button
        type="button"
        onClick={() =>
          setItems([
            ...items,
            { id: `item-${items.length + 1}`, value: "", category: "" },
          ])
        }
        className="text-blue-500 mt-2"
      >
        + Add Item
      </button>
      <div className="flex justify-end mt-4 gap-4">
        <button
          type="button"
          onClick={addNewQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          + New Question
        </button>
        <button
          type="button"
          onClick={deleteQuestion}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete Question
        </button>
      </div>
    </div>
  );
};

export default Categorize;
