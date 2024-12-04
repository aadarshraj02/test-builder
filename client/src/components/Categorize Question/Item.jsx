import React from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { useDrag, useDrop } from "react-dnd";

const Item = ({ item, index, moveItem, setItems, categories }) => {
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
        onChange={(e) => {
          setItems((prev) =>
            prev.map((itm, i) =>
              i === index ? { ...itm, value: e.target.value } : itm
            )
          );
        }}
        className="border w-32 rounded-md outline-none px-2 py-1"
      />
      <select
        value={item.category}
        onChange={(e) => {
          setItems((prev) =>
            prev.map((itm, i) =>
              i === index ? { ...itm, category: e.target.value } : itm
            )
          );
        }}
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
        onClick={() => setItems((prev) => prev.filter((_, i) => i !== index))}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default Item;
