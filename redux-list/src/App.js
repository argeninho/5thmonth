import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearList } from "./redux/actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };

  const handleClearList = () => {
    dispatch(clearList());
  };

  return (
    <div>
      <h1>Список</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Добавить список</button>
      <button onClick={handleClearList}>Удалить весь список</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
