// import React, { useState } from 'react';
import './List.css';

export default function List({itemList,updateItemList, currentItem, setCurrentItem}) {
    const deleteItem = key => {
        const newList = itemList.filter((itemObj) => {
            return itemObj.key !== key;
        }); 
        updateItemList(newList);
    };

    const editBtn = () => {
        
    }

    const checkBtn = () => {

    }

    return (
        <div>
            {itemList.map(itemObj => {
            return (
                <div key={itemObj.key} className="item">
                    <p>{itemObj.item}</p>
                    <button onClick={() => deleteItem(itemObj.key)}>x</button>
                    <button onClick={editBtn}>Edit</button>
                    <button onClick={checkBtn}>Check</button>
                </div>
            );
            })}
        </div>
    );
}
