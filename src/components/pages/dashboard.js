import React from "react";
import Imagecard1 from "../imagecard1";
import Navbar from "../navbar";
import SearchBar from "../searchBar";
import Heading from "../heading"
import Topnav from "../topnav";
function Dashboard() {
    const cardValues = [
        { imageUrl: require("../images/java.jpeg"), content: "Java Course" },
        { imageUrl: require("../images/python.jpg"), content: "Python Course" },
      ];
      const inProgress= [
        { imageUrl: require("../images/java.jpeg"), content: "Java Course" },
    
      ];
  return (
    <div>
        <Topnav />
      <Navbar />
      <SearchBar />
      <Heading title="In Progress" />
      <div>
        <div className="cards">
          {inProgress.map((card) => (
            <Imagecard1 imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
      </div>
      <Heading title="Recommended" />
      <div>
        <div className="cards">
          {cardValues.map((card) => (
            <Imagecard1 imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
