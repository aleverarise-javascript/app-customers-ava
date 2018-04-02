import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import './App.css';
import './index.css';


class App extends Component {

	renderHome= () => <HomeContainer />;
	renderCustomerContainer = () => <h1>renderCustomerContainer</h1>;
	renderCustomerListContainer = () => <h1>renderCustomerListContainer</h1>;
	renderCustomerNewContainer = () => <h1>renderCustomerNewContainer</h1>;

	render() {
		return (
			<div className="App">
				<Router>
					<div>
						<Route exact path="/customers" component={CustomersContainer} />
						<Route exact path="/" component={HomeContainer} />
						<Switch>
							<Route path="/customers/new" component={this.renderCustomerNewContainer} />
							<Route path="/customers/:dni" component={this.renderCustomerContainer} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
