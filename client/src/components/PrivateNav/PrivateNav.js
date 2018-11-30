import React from "react";
import "../../styles/PrivateNav.css";
import { Col, Row, Container } from "../Grid";

const PrivateNav = props =>
<div>
	<nav id="private-nav">
		<ul className="nav nav-tabs">
			<li onClick={() => props.handlePageChange("Dashboard")}
				className = {props.currentPage === "Dashboard" ? "active" : ""}>
				<a><span className="fa fa-line-chart"></span> Dashboard</a>
			</li>
			
			<li onClick={() => props.handlePageChange("Customers")}
				className = {props.currentPage === "Customers" ? "active" : ""}>
				<a><span className="fa fa-users"></span> Customers</a>
			</li>
			
			<li onClick={() => props.handlePageChange("Products")}
				className = {props.currentPage === "Products" ? "active" : ""}>
				<a><span  className="fa fa-database"></span> Products</a>
			</li>
			
			<li onClick={() => props.handlePageChange("Sales")}
				className = {props.currentPage === "Sales" ? "active" : ""} >
				<a><span className="fa fa-money"></span> Sales</a>
			</li>
			
			<li onClick={() => props.handlePageChange("Schedule")}
				className = {props.currentPage === "Schedule" ? "active" : ""} >
				<a><span className="fa fa-calendar"></span> Schedule</a>
			</li>
			
			<li className="pull-right" 
				onClick={() => {
				console.log('clearing local storage');
				localStorage.clear();
				console.log('cleared');
				window.location.replace('/login');}}>
				<a><span className="fa fa-sign-out"></span> Log Out</a>
			</li> 	

			<li id='username' className="pull-right"><span>Signed in as { localStorage.getItem('username')}</span>
			</li>	

		</ul>
	</nav>
</div>
export default PrivateNav;
