import React from "react";
import Card from "./components/Card";
import GermanyImage from "./images/germany.png";
import UsImage from "./images/us.png";
import BrasiliaImage from "./images/brazil.png";
import IcelandImage from "./images/iceland.png";
import AfghanistanImage from "./images/afghanistan.png";
import IslandImage from "./images/islands.png";
import AlbaniaImage from "./images/albania.png";
import AlgeriaImage from "./images/algeria.png";

function App() {
  return (
    <div className="Country-cards-wrap">
      <div className="cards-wrap">
        <Card
          image={<img className="cardImage" src={GermanyImage} />}
          name="Germany"
          population="81.770.900"
          region="Europe"
          capital="Berlin"
        />
        <Card
          image={<img className="cardImage" src={UsImage} />}
          name="U.S.A"
          population="323.947.000"
          region="Americas"
          capital="Washington DC"
        />
        <Card
          image={<img className="cardImage" src={BrasiliaImage} />}
          name="Brazil"
          population="206.135.893"
          region="Americas"
          capital="Brasilia"
        />
        <Card
          image={<img className="cardImage" src={IcelandImage} />}
          name="Iceland"
          population="334.300"
          region="Europe"
          capital="Beykjavik"
        />
      </div>
      <div className="cards-wrap">
        <Card
          image={<img className="cardImage" src={AfghanistanImage} />}
          name="Afghanistan"
          population="27.657.145"
          region="Europe"
          capital="Kabul"
        />
        <Card
          image={<img className="cardImage" src={IslandImage} />}
          name="Aland islands"
          population="28.875"
          region="Europe"
          capital="Mariehamn"
        />
        <Card
          image={<img className="cardImage" src={AlbaniaImage} />}
          name="Albania"
          population="2.886.026"
          region="Europe"
          capital="Tirana"
        />
        <Card
          image={<img className="cardImage" src={AlgeriaImage} />}
          name="Algeria"
          population="40.400.000"
          region="Europe"
          capital="Algiers"
        />
      </div>
    </div>
  );
}

export default App;
