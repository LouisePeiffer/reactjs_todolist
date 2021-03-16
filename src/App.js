import React, { useState } from 'react';
import List from './components/List.js'
import "./App.css"

export default function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = e => {
    // console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  }

  const addItemToList = () => {
    updateItemList([...itemList, {item: currentItem, key: Date.now()}])
    console.log("list items", itemList );
    setCurrentItem("");
  }

  const enterBtn = (e) => {
    if (e.keyCode === 13) {
      console.log("Coucou");
      updateItemList([...itemList, {item: currentItem, key: Date.now()}])
      console.log("list items", itemList );
      setCurrentItem("");
    }
  }

  const clearButton = () => {
    updateItemList([])
  }

    return (
        <div className="Wrapper"> 
          <div className="Input-wrapper">
            <h1>Que faire?</h1>
            <input value={currentItem} onChange={onChangeHandler} onKeyUp={enterBtn}/>
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
          <button onClick={clearButton}>Clear All</button>
        </div>
    )
}