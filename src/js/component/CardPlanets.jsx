import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Card.css'
import { Context } from '../store/appContext';





export const CardPlanets = ({  name, population, terrain, climate ,orbiltal_period , rotation_period, diameter, id }) => {
    const { store, actions } = useContext(Context);
    const planet = store.planet;





    return (
        <div className="card">

            <img className="img-character" alt="" src="https://www.brickfanatics.com/wp-content/uploads/LEGO-Star-Wars-The-Skywalker-Saga-Coruscant-featured.jpg"></img>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Population: {population} <br></br>
                    Terrain: {terrain} <br></br>
                    Climate: {climate}
        </p>

                <div className="row row-icons-card">
                    <div className="col-9">
                        <Link to={`/Planets/${id}`}>

                            <div href="#" className="btn btn-learn-more" onClick={() => actions.getPlanet({ name: name, population: population, terrain: terrain, climate: climate, orbiltal_period: orbiltal_period, rotation_period: rotation_period, diameter: diameter })}>
                                Learn more
                            </div>
                        </Link>
                    </div>

                    <div className="col-3">

                        <div className="btn btn-go" onClick={() => actions.favorites({ name, id })}>
                            Fav
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}