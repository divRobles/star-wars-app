import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/Card.css'
import { Context } from '../store/appContext';





export const CardPlanets = ({  name, population, terrain, climate ,orbiltal_period , rotation_period, diameter }) => {
    const { store, actions } = useContext(Context);
    const planet = store.planet;





    return (
        <div className="card">

            <img className="img-character" alt="" src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400"></img>

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">

                </p>

                <div className="row row-icons-card">
                    <div className="col-9">
                        <Link to="/Planets">

                            <div href="#" className="btn btn-learn-more" onClick={() => actions.getPlanet({ name: name, population: population, terrain: terrain, climate: climate, orbiltal_period: orbiltal_period, rotation_period: rotation_period, diameter: diameter })}>
                                Learn more
                            </div>
                        </Link>
                    </div>

                    <div className="col-3">
                        <Link to="/demo">
                            <div className="btn btn-go">
                                Go
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}