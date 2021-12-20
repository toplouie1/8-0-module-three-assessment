import React, { Component } from "react";

export default class Movies extends Component {
	constructor() {
		super();
		this.state = {
			allMovies: [],
			currentTitle: null,
		};
	}
	fetchLocation = () => {
		fetch("https://ghibliapi.herokuapp.com/films")
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					allMovies: data,
				});
			});
	};
	componentDidMount = () => {
		this.fetchLocation();
	};
	handleDropdownChange = (e) => {
		this.setState({
			currentTitle: e.target.value,
			display: true,
		});
	};
	render() {
		let mappingOver = this.state.allMovies.map((each) => {
			return <option>{each.title}</option>;
		});
		let clickedSelect = this.state.allMovies.find((each) => {
			return each.title === this.state.currentTitle;
		});

		return (
			<div>
				<h1>Select a Movie </h1>
				<select
					value={this.state.currentTitle}
					onChange={this.handleDropdownChange}
				>
					<option></option>
					{mappingOver}
				</select>
				<div className="movies">
					{this.state.currentTitle && (
						<div>
							<h1>Title:{clickedSelect?.title}</h1>
							<div>Release Date:{clickedSelect?.release_date}</div>
							<div>Description:{clickedSelect?.description}</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}
