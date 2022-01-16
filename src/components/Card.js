import React from "react";
import '../style.css';

const Card = (props) => {
  return(
    <>
      <div className="card">
        <div clasNames="card-image">
          {props.image}
        </div>
        <div className="card-text">            
          <h2 className="card-title">{props.name}</h2>
          <p className="card-p">Population: <span>{props.population}</span></p>
          <p className="card-p">Region: <span>{props.region}</span></p>
          <p className="card-p">Capital: <span>{props.capital}</span></p>
        </div>
      </div>
    </>
  )
}


export default Card;