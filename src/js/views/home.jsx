import React, { useContext, useState } from "react";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";

export const Home = () => {
    // const tienda = getStore(); 
    const {store, actions} = useContext(Context);
    console.log('a',store.characters)
    const characters = store.characters;

    return (
        <div className="container-fluid container-home">

            <div className="container-characters">
                <h1 className="characters-tittle">Characters</h1>



                <div className="row row-characters">
                {
                    characters.map((ele, i)=>{
                        console.log(ele.name)
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>



        </div>
    );
};
