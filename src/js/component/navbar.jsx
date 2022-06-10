import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.css'

export const Navbar = () => {
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
