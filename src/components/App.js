import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode, setMode] = useState(false)
  const appClass = mode ? "App dark" : "App light"
  function handleClick(){
    setMode(mode => !mode)
  }
  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
