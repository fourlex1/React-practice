import { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    setItems([...items, inputValue]);
    setInputValue("");
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;