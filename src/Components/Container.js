import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import FoodsListPage from './FoodsListPage';
import NotFound from './NotFound';

class Container extends Component{
	render = () => {
		return(
			<div style={{padding:30}}>
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route exact path="/foods-list" component={FoodsListPage}/>
					<Route  component={NotFound}/>
				</Switch>
			</div>
		);
	}
}

export default Container;
