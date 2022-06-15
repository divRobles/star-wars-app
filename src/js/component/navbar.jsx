import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BtnFav } from "./BtnFav.jsx";
import '../../styles/navbar.css'
import { Context } from '../store/appContext';



export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const favorites = store.favorites;

	return (
		<nav className="navbar container-navbar mb-3">
			<div className="row navbar-row">
				<div className="col-2 col-enlace-inicio">
					<Link to="/">
						<div className="container-img-nav"></div>
					</Link>


				</div>


				<BtnFav favoritos={favorites}></BtnFav>

			</div>
		</nav>
	);
};
