import "./App.css";
import { Link } from "react-router-dom";
import Location from "./Location";
import Movies from "./Movies";
import People from "./People";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<nav>
				<Link to="/">
					<img
						className="pet-logo"
						src="https://i.pinimg.com/originals/af/fb/c9/affbc96be98edecba473e0e630069b3b.png"
						alt="pet logo"
					/>
				</Link>
				<Link to="/movies">Movies</Link>
				<Link to="/people">People</Link>
				<Link to="/locations">Locations</Link>
			</nav>
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/movies" component={Movies} />
					<Route path="/people" component={People} />
					<Route path="/locations" component={Location} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
