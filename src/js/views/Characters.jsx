import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import '../../styles/Characters.css'



export const Characters = () => {
    const { store, actions } = useContext(Context);
    const select = store.select;
    const characters = store.characters;
    const charactersProperties = store.charactersProperties;

    return (
        <div className="container-pg-characters">
            <div className="row row-fotoYDescripcion">
                <div className="col-6">
                    <img className="img-character" alt="" src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400"></img>
                </div>
                <div className="col-6">
                    <h1>{select.name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non mollitia earum, sapiente, fugiat tempore repellendus doloribus labore rem ex facere perspiciatis ipsam laboriosam ipsa eius vero. Inventore, doloremque impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae maxime doloribus nostrum corporis! Saepe, dignissimos unde in provident reprehenderit debitis mollitia quo accusamus officiis blanditiis? Expedita blanditiis dolorum rem?</p>

                </div>
            </div>
            <div className="row row-caracteristicas">
                <div className="col-2">
                    <h3>Name</h3>
                    <p>{select.name}</p>
                </div>
                <div className="col-2">
                    <h3>Gender</h3>
                    <p>{select.gender}</p>
                </div>
                <div className="col-2">
                    <h3>Hair Color</h3>
                    <p>{select.hairColor}</p>
                </div>
                <div className="col-2">
                    <h3>Eyes Color</h3>
                    <p>{select.eyeColor}</p>
                </div>
                <div className="col-2">
                    <h3>Height</h3>
                    <p>{select.height}</p>
                </div>
                <div className="col-2">
                    <h3>Skin Color</h3>
                    <p>{select.skinColor}</p>
                </div>
            </div>
            <div className="row">
                <div className="elance"><a href={`https://www.google.com/search?q=${select.name}`}>Enlace + info</a></div>
            </div>
        </div>
    );
}