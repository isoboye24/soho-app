import React from "react";
import { frame } from "./../data";
import LikeShare from "./Like-share";
import Colors from "./Colors";
import Sizes from "./Sizes";

const AllProducts = () => {
  return (
    <>
      <div className="container">
        <div className="products">
          {frame.map((product) => {
            const { id, image, like, share, stockStatus, price, clothName } =
              product;
            return (
              <>
                <div key={id} className="single-product">
                  <div className="frame">
                    <img src={image} alt={clothName} className="img" />
                    <div className="frame-content">
                      <div className="cloth-price">
                        {stockStatus === "Out of stock" ? (
                          ""
                        ) : (
                          <div className="price">${price}</div>
                        )}

                        {stockStatus === "Out of stock" ? (
                          ""
                        ) : (
                          <div className="cloth-name">{clothName}</div>
                        )}
                      </div>

                      {stockStatus === "Out of stock" ? (
                        ""
                      ) : (
                        <div className="like-share-space">
                          <LikeShare like={like} share={share} />
                        </div>
                      )}
                    </div>

                    {stockStatus === "Out of stock" ? (
                      <div className="overlay">
                        <div className="out-of-stock">Out of stock</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {stockStatus === "Out of stock" ? (
                    ""
                  ) : (
                    <div className="colors-sizes">
                      <div className="color-section">
                        <Colors />
                      </div>

                      <div className="sizes-section">
                        <Sizes />
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
