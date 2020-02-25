import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={movie.img.src} alt={movie.img.alt} />
      <div className="card-body">
        <h2 className="card-title">{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p>{`Distributor: ${movie.distributor}`}</p>
        </li>
        <li className="list-group-item">
          <p>{`Amount: ${movie.amount}`}</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
