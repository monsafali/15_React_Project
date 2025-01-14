import React, { useState } from "react";
import items from "../data";

function Menu() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const filteredItems = items.filter((item) => item.category === category);
      setMenuItems(filteredItems);
    }
  };

  return (
    <div className="px-4">
      {/* Category Buttons */}
      <div className="flex justify-evenly mb-5">
        <button onClick={() => filterItems("all")}>All</button>
        <button onClick={() => filterItems("breakfast")}>Breakfast</button>
        <button onClick={() => filterItems("lunch")}>Lunch</button>
        <button onClick={() => filterItems("shakes")}>Shakes</button>
      </div>

      {/* Menu Items with Flexbox */}
      <div className="flex   flex-wrap justify-evenly gap-6">
        {menuItems.map((item) => {
          const { id, title, price, img, desc } = item;
          return (
            <div
              key={id}
              className="lg:w-[45%] sm:w-full   flex  gap-4 border-b pb-4"
            >
              <img
                className="w-36 h-28 border border-yellow-400 object-cover"
                src={img}
                alt={title}
              />
              <div>
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold">{title}</h1>
                  <p className="text-yellow-500">${price}</p>
                </div>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
