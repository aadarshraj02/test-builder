import React from "react";
import Item from "./Item";

const ItemList = ({ items, setItems, moveItem, categories }) => {
  return (
    <div>
      <h3 className="text-lg my-2 font-semibold">Items</h3>
      {items.map((item, index) => (
        <Item
          key={item.id}
          item={item}
          index={index}
          moveItem={moveItem}
          setItems={setItems}
          categories={categories}
        />
      ))}
    </div>
  );
};

export default ItemList;
