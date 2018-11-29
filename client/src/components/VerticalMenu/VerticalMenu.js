import React from "react";
import "../../styles/VerticalMenu.css";
import { Col, Row, Container } from "../Grid";

const VerticalMenu = props =>
<div>
	<nav className="navbar" id="private-nav">
			<div className="navbar">
				<ul className="nav nav-tabs">
					<li onClick={() => props.handlePageChange("Dashboard")}
						className = {props.currentPage === "Dashboard" ? "active" : ""}>
						<a>Dashboard<span style={{'fontSize':'16px'}} className="fa fa-line-chart"></span></a>
					</li>
					
					<li onClick={() => props.handlePageChange("Customers")}
						className = {props.currentPage === "Customers" ? "active" : ""}>
						<a>Customers<span style={{'fontSize':'16px'}} className="fa fa-users"></span></a>
					</li>
					
					<li  onClick={() => props.handlePageChange("Products")}
						className = {props.currentPage === "Products" ? "active" : ""}>
							<a>Products<span style={{'fontSize':'16px'}}  className="fa fa-database"></span></a>
					</li>
					
					<li onClick={() => props.handlePageChange("Sales")}
						className = {props.currentPage === "Sales" ? "active" : ""} >
							<a>Sales<span style={{'fontSize':'16px'}} className="fa fa-money"></span></a>
					</li>
					
					<li onClick={() => props.handlePageChange("Schedule")}
						className = {props.currentPage === "Schedule" ? "active" : ""} >
							<a>Schedule<span style={{'fontSize':'16px'}} className="fa fa-calendar"></span></a>
					</li>
					
					<li onClick={() => {
						console.log('clearing local storage');
						localStorage.clear();
						console.log('cleared');
						window.location.replace('/login');}}>
						<a>Log Out<span style={{'fontSize':'16px'}} className="fa fa-sign-out"></span></a>
					</li> 	

					<li id='username'><span>Signed in as { localStorage.getItem('username')}</span>
					</li>				
				</ul>
			</div>
	</nav>
</div>
export default VerticalMenu;
