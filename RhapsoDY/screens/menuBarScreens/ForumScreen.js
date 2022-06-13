import React, { useState } from 'react';
import { View, Text} from 'react-native';

function App() {

  //statehook - 'usestate'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

// Helper functions

function addItem(){

  if(!newItem) { //prevent users from entering empty queries
    alert("Enter your request!");
    return;
  }

  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem
  };

  setItems(oldList => [...oldList, item]);
  setNewItem("");
}

function deleteItem(id) {
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

  return (
    <div className="App">
      <h1>Discussion panel</h1>

      <input
       type="text"
       placeholder="Add your design request..."
       value={newItem}
       onChange= {e => setNewItem(e.target.value)}
       />

       <button onClick={() => addItem()}>Publish</button>

       <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>Delete</button> </li>
          )
        })}
       </ul>
    </div>
  );
};

export default App;
    