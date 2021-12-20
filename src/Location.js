import React, { Component } from "react";

export default class Location extends Component {
	constructor() {
		super();
		this.state = {
			allLocations: [],
			display: true,
		};
	}
	fetchLocation = () => {
		fetch("https://ghibliapi.herokuapp.com/locations")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					allLocations: data,
				});
			});
	};
	hideLocation = () => {
		this.setState({
			display: false,
		});
	};
	componentDidMount = () => {
		this.fetchLocation();
	};
	render() {
		let allLoco = this.state.allLocations.map((each) => {
			return (
				<div>
					<ul>
						<li>Name:{each.name}</li>
					</ul>
					<div>Climate{each.climate}</div>
					<div>Terrain{each.terrain}</div>
				</div>
			);
		});

		return (
			<div>
				<h1>List of Locations</h1>
				{this.state.display && (
					<button onClick={this.hideLocation}>Show Locations</button>
				)}
				{!this.state.display && (
					<button onClick={this.fetchLocation}>Hide Locations</button>
				)}
				<div className="locations">{this.state.display ? null : allLoco}</div>
			</div>
		);
	}
}
