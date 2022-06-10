import React from "react";
import { Card } from "../component/Card.jsx";
import "../../styles/home.css";

export const Home = () => (
    <div className="container-fluid container-home">

        <div className="container-characters">
            <h1 className="characters-tittle">Characters</h1>

            <div className="row row-characters">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

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
