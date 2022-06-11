import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";



export const Characters = ({ name, gender, hairColor, eyeColor }) => {
    const { store, actions } = useContext(Context);
    const charactersProperties = store.charactersProperties;
    console.log("hola", charactersProperties)
    return (
        <div className="container-pg-characters">
            <div className="row fotoYDescripcionPersonaje">
                <div className="col-6">
                <img className="img-character" alt="" src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400"></img>
                </div>
                <div className="col-6">
                    {/* <h1>{charactersProperties.properties.name}</h1> */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non mollitia earum, sapiente, fugiat tempore repellendus doloribus labore rem ex facere perspiciatis ipsam laboriosam ipsa eius vero. Inventore, doloremque impedit?</p>
                </div>
            </div>
        </div>
    );
}