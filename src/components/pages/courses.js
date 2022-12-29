import React from 'react'
import Navbar from '../navbar'
import Imagecard1 from '../imagecard1';
import Heading from "../heading"
import SearchBar from '../searchBar'
import Topnav from '../topnav';
function Courses() {
    const design= [
        { imageUrl: require("../images/java.jpeg"), content: "Java Course" },
    
      ];
      const cardValues = [
        
        { imageUrl: require("../images/python.jpg"), content: "Python Course" },
        { imageUrl: require("../images/java.jpeg"), content: "Java Course" },
        { imageUrl: require("../images/react.jpeg"), content: "React Course" },
      ];
  return (
    <div>
        <Topnav />
        <Navbar/>
        <SearchBar />
        <Heading title="Programming" />
        <div>
        <div className="cards">
          {design.map((card) => (
            <Imagecard1 imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
        <Heading title="Design" />
      </div>
      <div>
        <div className="cards">
          {cardValues.map((card) => (
            <Imagecard1 imgSrc={card.imageUrl} textContent={card.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses