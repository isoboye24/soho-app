import React from "react";
import { colors } from "./../data";

const Colors = () => {
  return (
    <>
      <div className="arrow-next">
        <i class="fas fa-chevron-right"></i>
      </div>

      {colors.map((color) => {
        const { id, buttonColor } = color;

        return (
          <>
            <div key={id} className="colors">
              <div
                className="color"
                style={{ backgroundColor: `${buttonColor}` }}
              ></div>
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

export default Colors;
