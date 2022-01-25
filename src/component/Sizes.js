import React, { useState } from "react";
import { sizes } from "./../data";

const Sizes = () => {
  const [changeColor, setChangeColor] = useState(false);

  const handleColor = (change) => {
    let body = document.querySelector(".sizes");
    if (change === false) {
      setChangeColor(change);
      return;
    }

    body.filter((item) => item.classList.add("clickedColor"));
    setChangeColor(change);
  };

  return (
    <>
      <div className="arrow-next">
        <i class="fas fa-chevron-right"></i>
      </div>

      {sizes.map((singleSize) => {
        const { id, size } = singleSize;

        return (
          <>
            <div
              key={id}
              className="sizes"
              onClick={() => handleColor(changeColor)}
            >
              <span className="size">{size.toUpperCase()}</span>
            </div>
          </>
        );
      })}

      <div className="arrow-prev">
        <i class="fas fa-chevron-left"></i>
      </div>
    </>
  );
};

export default Sizes;
