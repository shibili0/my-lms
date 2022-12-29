import React from "react";

function Imagecard2({
  card2Title,
  card2color,
  card2content1,
  card2content2,
  hardlevel,
  ...props
}) {
  return (
    <div className="cards">
      <div style={{ width: "18rem" }} className="card cardComp2 rounded">
        <div
          className="cardTitleParent rounded-top"
          style={{ backgroundColor: card2color }}
        >
          <h5
            variant="top"
            className="card2title rounded-top"
            style={{ padding: "5px" }}
          >
            {card2Title}
          </h5>
        </div>
        <div class="card-body card2contentParent">
          <div className="card2content">
            <p class="card-text card2text" style={{ fontSize: "20px" }}>
              {card2content1}
            </p>
            <p
              class="card-text card2text"
              style={{ color: hardlevel, fontSize: "20px" }}
            >
              {card2content2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imagecard2;
