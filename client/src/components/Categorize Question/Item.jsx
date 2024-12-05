import React, { useContext } from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { useDrag, useDrop } from "react-dnd";
import { TestContext } from "../../context/TestContext";

const Item = ({ item, index, moveItem, categories }) => {
  const { setTestData, testData } = useContext(TestContext);

  const handleItemChange = (e) => {
    const updatedItems = testData.items.map((itm, i) =>
      i === index ? { ...itm, value: e.target.value } : itm
    );
    setTestData({ ...testData, items: updatedItems });
  };

  const handleCategoryChange = (e) => {
    const updatedItems = testData.items.map((itm, i) =>
      i === index ? { ...itm, category: e.target.value } : itm
    );
    setTestData({ ...testData, items: updatedItems });
  };

  const [, ref] = useDrag({
    type: "ITEM",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "ITEM",
    hover: (item) => {
      if (item.index !== index) {
        moveItem(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="flex items-center gap-4 mb-2"
    >
      <HiSquares2X2
        className="text-gray-500 cursor-grab hover:text-black"
        title="Drag"
      />
      <input
        type="text"
        placeholder={`Item ${index + 1}`}
        value={item.value}
        onChange={handleItemChange}
        className="border w-32 rounded-md outline-none px-2 py-1"
      />
      <select
        value={item.category}
        onChange={handleCategoryChange}
        className="border rounded-md px-2 py-1"
      >
        <option value="">Select Category</option>
        {categories.map((cat, i) => (
          <option key={i} value={cat.value}>
            {cat.value}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={() =>
          setTestData({
            ...testData,
            items: testData.items.filter((_, i) => i !== index),
          })
        }
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default Item;
