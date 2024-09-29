import React from 'react'

const  Dropdown =() =>{
  return (
    <div>
      <div className="dropdown">
          <ul className="dropdown-list" style={{ position: 'absolute' }}>
            <li>Fruit & Vegetables</li>
            <li>Meat & Seafood</li>
            <li>Bakery & Bread</li>
            <li>Dairy & Eggs</li>
            <li>Deli & Prepared Food</li>
          </ul>
        </div>
    </div>
  );
};

export default Dropdown
