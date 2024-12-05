import React, { useContext } from "react";
import { TestContext } from "../../context/TestContext";
import Item from "./Item";

const Cloze = () => {
  const { testData, setTestData } = useContext(TestContext);

  const handleUnderlineWord = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText && !testData.items.includes(selectedText)) {
      setTestData({
        ...testData,
        items: [...testData.items, selectedText],
      });
    }
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...testData.items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setTestData({ ...testData, items: updatedItems });
  };

  const removeItem = (index) => {
    const updatedItems = testData.items.filter((_, i) => i !== index);
    setTestData({ ...testData, items: updatedItems });
  };

  const updateItem = (index, value) => {
    const updatedItems = testData.items.map((item, i) =>
      i === index ? value : item
    );
    setTestData({ ...testData, items: updatedItems });
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
          value={testData.sentence}
          onChange={(e) =>
            setTestData({ ...testData, sentence: e.target.value })
          }
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
        {testData.items.map((item, index) => (
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
