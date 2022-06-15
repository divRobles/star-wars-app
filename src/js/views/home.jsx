import React, { useContext, useState } from "react";
import { Card } from "../component/Card.jsx";
import { CardPlanets } from "../component/CardPlanets.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Home = () => {


    const {store, actions} = useContext(Context);
    const characters = store.characters;
    const planets = store.planets;
    const charactersProperties = store.charactersProperties;


    return (
        <div className="container-fluid container-home">

            <div className="container-characters">
                <h1 className="characters-tittle">Characters</h1>



                <div className="row row-characters">
                {
                    charactersProperties.map((ele, i)=>{
                        let card = 
                        <Card key= {i} id ={i}  name = {ele.name} gender = {ele.gender} hairColor= {ele.hair_color} eyeColor = {ele.eye_color} height = {ele.height} skinColor = {ele.skin_color}
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
                        let card = 
                        <CardPlanets key= {i} id={i+10} name = {ele.name} population = {ele.population} terrain = {ele.terrain} climate = {ele.climate} orbiltal_period = {ele.orbiltal_period} rotation_period = {ele.rotation_period} diameter = {ele.diameter}
                        />
                        return card;
                    })
                }


                </div>
            </div>



        </div>
    );
};
