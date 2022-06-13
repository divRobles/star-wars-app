import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import { Context } from '../store/appContext';


export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const favorites = store.favorites;
	// const [namee, setNamee] = useState("")
	if(favorites){
		let name = favorites.name;
		console.log(typeof favorites.name);
		// setNamee(name)
	}




	return (
		<nav className="navbar container-navbar mb-3">
			<div className="row navbar-row">
				<div className="col-2 col-enlace-inicio">
					<Link to="/">
						<div className="container-img-nav"></div>
					</Link>


				</div>
				<div className="col-10 col-enlace-demo">
					<div className="ml-auto">

						<div className="btn-group">
							<button type="button" className="btn dropdown-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Action
							</button>
							<ul className="dropdown-menu">

								
								<li><div className="dropdown-item" href="#">{name}</div></li>
								{console.log(name)}
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
								<li><a className="dropdown-item" href="#">Separated link</a></li>
							</ul>
						</div>

					</div>

				</div>
			</div>
		</nav>
	);
};
