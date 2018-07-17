import React, { Component } from 'react';
import { Card } from 'antd';

class Food extends Component {
	render = () => {
		const { food } = this.props;
		const { Meta } = Card;
		
		return (
			
			<Card
				hoverable
				style={{ width: 240, height : 300 }}
				cover={<img alt={food.name} src={food.image} />}
			  >
				<Meta
				  title={food.name}
				  description={ food.foodType? food.foodType.name : 'No food Type'}
				/>
			</Card>
			
		)
	}
};

export default Food;
