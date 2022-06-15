import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Card.css'
import { Context } from '../store/appContext';





export const Card = ({ name, gender, hairColor, eyeColor, height, skinColor, id }) => {
  const {store, actions} = useContext(Context);
  const characters = store.characters;
  const favorites = store.favorites;

   return (
    <div className="card" key= {id}>

      <img className="img-character" alt="" src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400"></img>

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Gender: {gender} <br></br>
          Eyes Color: {eyeColor} <br></br>
          Hair color: {hairColor}
        </p>

        <div className="row row-icons-card">
          <div className="col-9">
          <Link to={`/Characters/${id}`}>

            <div href="#" className="btn btn-learn-more" onClick={()=> actions.getCharacter({name: name, gender: gender, hairColor: hairColor, eyeColor: eyeColor, height: height, skinColor: skinColor}) }>
              Learn more
            </div>
					</Link>
          </div>

          <div className="col-3">

            <div className="btn btn-go" onClick={()=> actions.favorites({name, id})}>
              Fav
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}