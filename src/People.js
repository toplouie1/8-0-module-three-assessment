import React, { Component } from "react";

export default class People extends Component {
	constructor() {
		super();
		this.state = {
			allPerson: [],
			currentPerson: "",
			name: "",
			age: "",
			gender: "",
			notFound: null,
			display: false,
		};
	}
	fetchLocation = () => {
		fetch("https://ghibliapi.herokuapp.com/people")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					allPerson: data,
				});
			});
	};
	componentDidMount = () => {
		this.fetchLocation();
	};
	theInputed = (e) => {
		this.setState({
			currentPerson: e.target.value,
		});
	};

	submission = (e) => {
		const { allPerson, currentPerson } = this.state;
		e.preventDefault();
		for (let each of allPerson) {
			if (each.name.includes(currentPerson)) {
				this.setState({
					name: each.name,
					age: each.age,
					gender: each.gender,
				});
			} else {
				this.setState({
					notFound: "Not Found",
				});
			}
		}
	};

	render() {
		return (
			<div>
				<h1>Search for a Person</h1>
				<form className="people" onClick={this.submission}>
					<input
						onInput={this.theInputed}
						type="text"
						value={this.state.currentPerson}
						placeholder="Find Your Person"
					/>
					<button type="submit">Submit</button>
					<div>Name:{this.state.name}</div>
					<div>Age:{this.state.age}</div>
					<div>Gender:{this.state.gender}</div>
					<div>{this.state.notFound}</div>
				</form>
			</div>
		);
	}
}
