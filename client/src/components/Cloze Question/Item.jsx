import { useDrag, useDrop } from "react-dnd";
import { HiSquares2X2 } from "react-icons/hi2";

const Item = ({ item, index, moveItem, removeItem, updateItem }) => {
  const [, ref] = useDrag({
    type: "ITEM",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "ITEM",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
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
        placeholder={`Item ${index + 1}`}
        value={item}
        onChange={(e) => updateItem(index, e.target.value)}
        className="border w-32 rounded-md outline-none px-2 py-1"
      />
      <button
        type="button"
        onClick={() => removeItem(index)}
        className="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default Item;
