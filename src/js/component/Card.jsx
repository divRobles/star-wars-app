import React, { useContext } from "react";
import '../../styles/Card.css'





export const Card = ({ name }) => {
  console.log(name)
   return (
    <div className="card">

      <img className="img-character" alt="" src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400"></img>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </p>

        <div className="row row-icons-card">
          <div className="col-9">
            <a href="#" className="btn btn-learn-more">
              Learn more
            </a>
          </div>

          <div className="col-3">
            <a href="#" className="btn btn-go">
              Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}