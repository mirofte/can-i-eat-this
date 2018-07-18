import React, { Component } from 'react';
import * as actions from '../Actions/Foods.actions';
import { connect } from 'react-redux';
import '../Css/FoodsList.css';
import { Row, Col, Alert, Table, Radio, Icon } from 'antd';
import Food from './Food';

class FoodsList extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			listView : 'grid',
		}
	}
	
	componentDidMount = () => {
		this.props._getFoods('');
	};
	
	changeListView = (e) => {
		const listView = e.target.value;
		this.setState({ listView: listView });
	};
		
	render = () => {
		const { foods } = this.props;
		const { listView } = this.state;
		
		let foodsList = '';
		
		if(foods.length === 0){
			return <Alert
				message="No food Food"
				description="Error Description Error Description Error Description Error Description Error Description Error Description"
				type="error"
			/>
		}
		
		if(listView === 'table'){
			const columns = [{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
			  }, {
				title: 'Type',
				dataIndex: 'foodType.name',
				key: 'foodType.name',
			  }];
		  
			const expandedRowRender = food => <img alt={food.name} style={{ width : 200, height : 200}} src={food.image} />;
			foodsList = <Table rowKey="id" expandedRowRender={expandedRowRender} columns={columns} dataSource={foods} />;
		}
		if(listView === 'grid'){
			foodsList = <Row gutter={16}>
					{foods.map( food => {
						return <Col xs={24} sm={12} lg={6} key={food.id} style={{ paddingBottom: 20}}><Food food={food}/></Col>
					})}
				</Row>;
		}
		return (
			
			<div style={{padding:20}}>
				<div className="change-list-view">
					<Radio.Group defaultValue="grid" onChange={this.changeListView}>
						<Radio.Button key="grid" value="grid">Grid <Icon type="credit-card" /></Radio.Button>
						<Radio.Button key="table" value="table">Table <Icon type="table" /></Radio.Button>
					</Radio.Group>
				</div>
				<div >
				{ foodsList }
				</div>
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
