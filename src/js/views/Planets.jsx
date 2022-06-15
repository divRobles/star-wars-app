import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import '../../styles/Characters.css'



export const Planets = () => {
    const { store, actions } = useContext(Context);
    const selectPlanet = store.selectPlanet;

    return (
        <div className="container-pg-planets">
            <div className="row row-fotoYDescripcion">
                <div className="col-6">
                <img className="img-character" alt="" src="https://www.brickfanatics.com/wp-content/uploads/LEGO-Star-Wars-The-Skywalker-Saga-Coruscant-featured.jpg"></img>
                </div>
                <div className="col-6">
                    <h1>{selectPlanet.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non mollitia earum, sapiente, fugiat tempore repellendus doloribus labore rem ex facere perspiciatis ipsam laboriosam ipsa eius vero. Inventore, doloremque impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae maxime doloribus nostrum corporis! Saepe, dignissimos unde in provident reprehenderit debitis mollitia quo accusamus officiis blanditiis? Expedita blanditiis dolorum rem?</p>
                   
                </div>
            </div>

            <div className="row row-caracteristicas">
                <div className="col-2">
                    <h3>Name</h3>
                    <p>{selectPlanet.name}</p>
                </div>
                <div className="col-2">
                    <h3>Population</h3>
                    <p>{selectPlanet.population}</p>
                </div>
                <div className="col-2">
                    <h3>Terrain</h3>
                    <p>{selectPlanet.terrain}</p>
                </div>
                <div className="col-2">
                    <h3>Climate</h3>
                    <p>{selectPlanet.climate}</p>
                </div>
                <div className="col-2">
                    <h3>Diameter</h3>
                    <p>{selectPlanet.diameter}</p>
                </div>
                <div className="col-2">
                    <h3>Rotation Period</h3>
                    <p>{selectPlanet.rotation_period}</p>
                </div>
            </div>
            <div className="row">
                <div className="elance"><a href={`https://www.google.com/search?q=${selectPlanet.name}`}>Enlace + info</a></div>
            </div>
        </div>
    );
}