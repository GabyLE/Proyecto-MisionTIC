import React, { useState } from "react";
import SidebarComponent from "../sidebar/SidebarComponent";
import './headerStyles.css';


function HeaderComponent(props) {

	let currentUser = props.currentUser;
	// Manejo estado de sidebar
	const [estadoSidebar, setEstadoSidebar] = useState(false);
	// rutina que abre sidebar
	const abrirSidebar = () => {
		estadoSidebar(true);
	}

	const cerrarSidebar = () => {
		setEstadoSidebar(false);
	}
	return (

		<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<div class="container-fluid">
				{/* sidebar trigger */}
				{/* <button class="btn btn-primary" onclick="toggle()">
						<i class="fas fa-angle-double-left"></i>
					</button> */}
				{/* sidebar trigger */}
				<button class="btn btn-primary" onClick={abrirSidebar}>
					<i class="fas fa-angle-double-left"></i>
				</button>
				<a class="navbar-brand fw-bold me-2" href="#"><i class="fa-solid fa-quidditch"></i>Quidditch Store</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">

						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								<i class="icon ion-md-person"></i>
								{currentUser}
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="#">Cerrar sesión</a></li>

							</ul>
						</li>

					</ul>

				</div>
				<SidebarComponent open={estadoSidebar} cerrar={cerrarSidebar}/>
			</div>
		</nav>
	);
}

// const toggle = () => {
//     document.getElementById("sidebar-wrapper").classList.toggle("toggled");
// };

export default HeaderComponent;