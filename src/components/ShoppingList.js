import React, {useState} from "react";

import Filter from "./Filter";
import Items from "./Items";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)

  function handleChange(e){
    setSelectedCategory(e.target.value);
  }
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleChange}/>
      <Items filteredItems={filteredItems}/>
      
    </div>
  );
}

export default ShoppingList;
