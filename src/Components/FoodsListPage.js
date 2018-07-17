import React, { Component } from 'react';
import FoodsList from './FoodsList'
import Filters from './Filters'


class FoodsListPage extends Component{
	
	
	render = () => {
		return (
			<div>
				<Filters />
				<FoodsList />
			</div>
		);
	}
};

export default FoodsListPage;
