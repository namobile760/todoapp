// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import ToDoLIsts from "./ToDoLIsts";

function App() {
  // input data Get
  const [inputItem, setInputItem] = useState("");

  // state update with click on button
  const [Item, setItem] = useState([]);

  // input data get
  const inputEventHandler = (e) => {
    setInputItem(e.target.value);
  };

  // onput date update current value + old value
  const addItemList = () => {
    setItem((oldItems) => {
      return [...oldItems, inputItem];
    });
    setInputItem("");
  };

  const deleteItem = (id) => {
    // console.log("delete");

    setItem((oldItems) => {
      return oldItems.filter((arryElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add an Item"
          onChange={inputEventHandler}
          value={inputItem}
        />
        <button onClick={addItemList}> + </button>

        <ol>
          {Item.map((inputAllItem, index) => {
            return (
              <ToDoLIsts
                text={inputAllItem}
                key={index}
                id={index}
                onSelect={deleteItem}
              />
            );
          })}
          {/* {Item.map((inputAllItem) => {
            <ToDoLIsts text={inputAllItem} />;
          })} */}
        </ol>
      </div>
    </div>
  );
}

export default App;
