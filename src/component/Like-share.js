import React from "react";

const LikeShare = ({ like, share }) => {
  return (
    <>
      <div className="like-share">
        <div className="share">
          <img src={share} alt="share" />
        </div>
        <div className="like">
          <img src={like} alt="like" />
        </div>
      </div>
    </>
  );
};

export default LikeShare;
