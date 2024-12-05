import React, { useState } from "react";
import Item from "./Item";

const Cloze = () => {
  const [sentence, setSentence] = useState("");

  const [items, setItems] = useState([]);

  const handleUnderlineWord = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText && !items.includes(selectedText)) {
      setItems([...items, selectedText]);
    }
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index, value) => {
    setItems(items.map((item, i) => (i === index ? value : item)));
  };

  return (
    <div className="min-h-[50vh] border p-5 my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">QUESTION</h2>
        <input
          type="number"
          placeholder="Points?"
          className="border rounded-lg px-3 py-2 w-24 outline-none"
        />
      </div>
      <div className="my-3">
        <label className="block mb-2 font-medium text-zinc-600">Preview:</label>
        <input
          type="text"
          placeholder="Type your sentence here..."
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          className="outline-none border px-2 py-1 rounded-sm w-full text-zinc-600"
        />
        <button
          onClick={handleUnderlineWord}
          className="mt-2 text-blue-500 underline"
        >
          Underline Selected Word
        </button>
      </div>
      <div className="my-4">
        <h3 className="font-semibold">Items:</h3>
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            index={index}
            moveItem={moveItem}
            removeItem={removeItem}
            updateItem={updateItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Cloze;
