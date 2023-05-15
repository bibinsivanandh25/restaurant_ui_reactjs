import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuItems">
      <div className="app__menuItems-head">
        <div className="app__menuItems_name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuItems-dash" />
        <div className="app__menuItems_price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuItems_sub">
        <p className="p_opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
