import React from "react";
import { sizes } from "./../data";

const Sizes = () => {
  return (
    <>
      <div className="arrow-next">
        <i class="fas fa-chevron-right"></i>
      </div>

      {sizes.map((singleSize) => {
        const { id, size } = singleSize;

        return (
          <>
            <div key={id} className="colors">
              <span className="color">{size}</span>
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
