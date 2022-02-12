import React, { useState } from "react";
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];  
console.log(allCategories);

function App() {
  const [menuItems, setManuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);        // empty is used for restart

  const filterItems = (category) => {
    if (category === 'all') {
      setManuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setManuItems(newItems)
  }

  return (
    <ma>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </ma>
  );
}

export default App;
