import React, { Component } from 'react';
import * as filterActions from '../Actions/Filters.actions'
import { connect } from 'react-redux';
import { Form, Select, Alert } from 'antd';
import Food from './Food';


const FormItem = Form.Item;
const Option = Select.Option;

let timeout;

class SearchFoodForm extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			value	: '',
			searchActive : false,
			selectedFood : false
		}
	}
	
	handleSubmit = (e) => {
		
		e.preventDefault();
		
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.setState({searchActive : true});
				this.props._filterFoods(values);
			}
		});
	}
	  
	handleChange = (value, option) => {
		if(option.props.food){
			this.setState({selectedFood: option.props.food});
		}
		this.setState({ value });
	}
	
	handleSearch = (value) => {
		this.searchFood(value, data => this.setState({ data }));		
	}
	
	searchFood = (value, callback) =>{
		
		this.setState({selectedFood: null});
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
		
		let fakeFetch = () => {
			const values = {
				name : value
			}
			this.props._filterFoods(values);
		}
		
		timeout = setTimeout(fakeFetch, 300);
	}
	
	render() {
	  
	const { getFieldDecorator } = this.props.form;
	const { foods }	= this.props;
	const { selectedFood }		= this.state;
	const options				= foods.map(d => <Option food={d} value ={d.id} key={d.id}>{d.name}</Option>);
    return (
		<div>
			<Form onSubmit={this.handleSubmit}>
				<FormItem
				  labelCol={{ span: 5 }}
				  wrapperCol={{ span: 12 }}
				  label="Food"
				>
				  {getFieldDecorator('name', {
					rules: [ {
					  required: true, message: 'Please add a food!',
					}],
				  })(
					<Select
						size="large"
						showSearch
						setFieldsValue={this.state.value}
						defaultActiveFirstOption={false}
						showArrow={false}
						filterOption={false}
						onSearch={this.handleSearch}
						onChange={this.handleChange}
						notFoundContent='No Food'
					  >
						{options}
					  </Select>
				  )}
				</FormItem>
			</Form>
			{ selectedFood &&
				<section>
					<Alert style={{marginBottom:20}} message="Yes, you can eat this" type="success" /> 
					<Food  food={selectedFood} />
				</section>
			}
			
		</div>
    );
  }
}

const mapStateToProps = state => ({
	foods		:	state.foods	
});

const mapDispatchToProps = (dispatch) => ({
	_filterFoods : filter => dispatch(filterActions.setFoodFilters(filter))
});


const SearchFood = Form.create()(SearchFoodForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchFood);