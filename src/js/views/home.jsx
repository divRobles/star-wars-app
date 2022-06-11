import React, { useContext, useState } from "react";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Home = () => {
    // const tienda = getStore(); 
    const {store, actions} = useContext(Context);
    const characters = store.characters;
    const planets = store.planets;
    const charactersProperties = store.charactersProperties;

    // console.log(characters);
    console.log(charactersProperties);


    console.log(charactersProperties.length)
    return (
        <div className="container-fluid container-home">

            <div className="container-characters">
                <h1 className="characters-tittle">Characters</h1>



                <div className="row row-characters">
                {
                    charactersProperties.map((ele, i)=>{
                        let card = 
                        <Card key= {i}  name = {ele.properties.name} gender = {ele.properties.gender} hairColor= {ele.properties.hair_color} eyeColor = {ele.properties.eye_color}
                        />
                        return card;
                    })
                }
                {/* {
                    characters.map((ele, i)=>{
                        // console.log(ele.name)
                        let card = 
                        <Card key= {i}  name = {ele.name}
                        />
                        return card;
                    })
                } */}

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
