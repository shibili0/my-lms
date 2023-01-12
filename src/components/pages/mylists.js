import React from 'react'
import Navbar from '../navbar'
import SearchBar from '../searchBar'
import Imagecard2 from '../imagecard2';
import Heading from "../heading"
import Topnav from '../topnav';
function Mylists() {
    const card2Values = [  
        {
          card2color: "#B7305E",
          card2Title: "Fundementals of Java",
          card2content1: "2 Hours",
          card2content2: "Basic",
          hardlevel:'#21CC70'
        },
        {
          card2color: "#F13073",
          card2Title: "Object Oriented Design in Java",
          card2content1: "2 Hours",
          card2content2: "Intermediate",
          hardlevel:"#E55A28"
        },
        {
          card2color: "#225383",
          card2Title: "JDBC - Connecting to Database from Java",
          card2content1: "2 Hours",
          card2content2: "Basic",
          hardlevel:'#21CC70'
        },
      ];
      const webDev = [
        {
          card2color: "#7348D3",
          card2Title: "Web Fundementals",
          card2content1: "2 Hours",
          card2content2: "Basic",
          hardlevel:'#21CC70'
        },
        {
          card2color: "#E9D956",
          card2Title: "Responsive Design",
          card2content1: "2 Hours",
          card2content2: "Intermediate",
          hardlevel: "#E55A28"
        },
        {
          card2color: "#4990D9",
          card2Title: "Web Packs",
          card2content1: "2 Hours",
          card2content2: "Basic",
          hardlevel:'#21CC70'
        },
        {
          card2color: "#3ED382",
          card2Title: "Advanced Layouts In Web",
          card2content1: "2 Hours",
          card2content2: "Advanced",
          hardlevel:"#EF115E"
        },
      ];
  return (
    <div>
        <Topnav />
        <Navbar/>
        <SearchBar />
        <Heading title="Favourites"/>
        <div className="cards2">
        {card2Values.map((card2) => (
          <Imagecard2
            card2color={card2.card2color}
            card2Title={card2.card2Title}
            card2content1={card2.card2content1}
            card2content2={card2.card2content2}
            hardlevel={card2.hardlevel}
          />
        ))}
      </div>
      <Heading title="Good Web Training"/>
      <div className="cards2">
        {webDev.map((card2) => (
          <Imagecard2
            card2color={card2.card2color}
            card2Title={card2.card2Title}
            card2content1={card2.card2content1}
            card2content2={card2.card2content2}
            hardlevel={card2.hardlevel}
          />
        ))}
      </div>
    </div>
  )
}

export default Mylists