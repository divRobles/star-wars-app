import React, { useContext, useState } from "react";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Home = () => {
    // const tienda = getStore(); 
    const {store, actions} = useContext(Context);
    const characters = store.characters;
    const planets = store.planets;
    const characterProperties = store.characterProperties;
    console.log(characterProperties)

    return (
        <div className="container-fluid container-home">

            <div className="container-characters">
                <h1 className="characters-tittle">Characters</h1>



                <div className="row row-characters">
                {
                    characters.map((ele, i)=>{
                        // console.log(ele.name)
                        let card = 
                        <Card key= {i}  name = {ele.name}
                        />
                        return card;
                    })
                }

                </div>
            </div>

            <div className="container-planets">
                <h1 className="planets-tittle">Planets</h1>

                <div className="row row-planets">
                {
                    planets.map((ele, i)=>{
                        // console.log(ele.name)
                        let card = 
                        <Card key= {i}  name = {ele.name}
                        />
                        return card;
                    })
                }

                </div>
            </div>



        </div>
    );
};
