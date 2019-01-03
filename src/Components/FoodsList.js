import React, { Component } from 'react';
import * as actions from '../Actions/Foods.actions';
import { connect } from 'react-redux';
import '../Css/FoodsList.css';
import { Row, Col, Alert, Table, Radio, Icon, Button } from 'antd';
import Food from './Food';

class FoodsList extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			listView : 'grid',
			initLoading: true,
			loading: false,
			limit: 10,
			offset: 0
		}
	}
	
	componentDidMount = () => {
		this.props._getFoods({limit:this.state.limit, offset:this.state.offset});
		this.setState({
			initLoading: false
		});
	};
	
	changeListView = (e) => {
		const listView = e.target.value;
		this.setState({ listView: listView });
	};

	onLoadMore = () => {
		let offset = this.state.offset + this.state.limit;
		this.setState({
			offset: offset
		});
		this.props._getPaginationFoods({limit:this.state.limit, offset});
	}
		
	render = () => {
		const { foods } = this.props;
		const { listView, initLoading, loading  } = this.state;
		
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
				title: 'Category',
				dataIndex: 'category.name',
				key: 'category.name',
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
		const loadMore = !initLoading && !loading ? (
			<div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
			  <Button onClick={this.onLoadMore}>loading more</Button>
			</div>
		  ) : null;
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
				{ loadMore }
			</div>
		);
	}
};

const mapStateToProps = state => ({
	foods :		state.foods,
});

const mapDispatchToProps = (dispatch) => ({
	_getFoods : (filters) => dispatch(actions.fetchFoods(filters)),
	_getPaginationFoods : (filters) => dispatch(actions.fetchPaginationFoods(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodsList);
