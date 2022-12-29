import React from "react";

function Imagecard1({ textContent, imgSrc, ...props }) {
  return (
    <div className="cardStyle1">
      <div class="card" style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top cardImage" alt="..." />
        <div class="card-body cardText">
          <p class="card-text cardText" style={{fontSize:"18px", fontWeight:"400"}}>
          {textContent}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Imagecard1;
