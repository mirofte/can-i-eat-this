import React, { Component } from 'react';
import * as actions from '../Actions/Foods.actions';
import { connect } from 'react-redux';
import { Row, Col, Alert  } from 'antd';
import Food from './Food'

class FoodsList extends Component{
	
	componentDidMount = () => {
		this.props._getFoods('');
	};
		
	render = () => {
		const { foods } = this.props;
		if(foods.length === 0){
			return <Alert
				message="No food Food"
				description="Error Description Error Description Error Description Error Description Error Description Error Description"
				type="error"
			/>
		}
		return (
			
			<div style={{padding:20}}>
				<Row gutter={16}>
					{foods.map( food => {
						return <Col xs={24} lg={6} key={food.id} style={{ paddingBottom: 20}}><Food food={food}/></Col>
					})}
				</Row>
			</div>
		);
	}
};

const mapStateToProps = state => ({
	foods :		state.foods,
});

const mapDispatchToProps = (dispatch) => ({
	_getFoods : (filters) => dispatch(actions.fetchFoods(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
