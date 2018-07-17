import React, {Component} from 'react';
import * as filterActions from '../Actions/Filters.actions';
import * as foodTypesActions from '../Actions/FoodTypes.actions';
import { connect } from 'react-redux';
import { Form, Row, Col, Input, Button, Icon, Select } from 'antd';
import '../Css/Filters.css';

const FormItem = Form.Item;

class FiltersForm extends Component{
	
	state = {
		expand: true,
	};
	
	componentWillMount = () => this.props._getFoodTypes();
	
	toggle = () => {
		const { expand } = this.state;
		this.setState({ expand: !expand });
	}
	
	handleSearch = (e) => {
		e.preventDefault();
		this.props._filterFoods(this.props.form.getFieldsValue());
	}
	
	handleReset = () => {
		if(this.props.form.isFieldsTouched()){
			this.props._filterFoods();
		}
		
		this.props.form.resetFields();
	}
	
	render = () => {
		
		const { foodTypes } = this.props;
		const { getFieldDecorator } = this.props.form;
		const Option = Select.Option;
		
		return (
				
			<Form
				layout="inline"
				className="ant-advanced-search-form"
				onSubmit={this.handleSearch}
			>
				<Row gutter={24} style={{ display: this.state.expand ? 'block' : 'none' }}>
					<Col xs={24} lg={8}>
						<FormItem label="Name"  
						labelCol={{ span: 5 }}
						wrapperCol={{ span: 19 }}>
							{getFieldDecorator(`name`, {
							  rules: [],
							})(
							  <Input placeholder="" />
							)}
						  </FormItem>
					</Col>
					{ foodTypes ?
					<Col xs={24} lg={8}>
						<FormItem label="Type">
							{getFieldDecorator(`foodTypeId`, {
							  rules: [],
							})(
							 <Select placeholder="" style={{ width: 200 }}>
								{
									foodTypes.map( foodType => {
										return <Option key={foodType.id} value={foodType.id}>{foodType.name}</Option>
									})
								}
							</Select>
							)}
						  </FormItem>
					</Col> : ''}
				</Row>
				<Row style={{ display: this.state.expand ? 'block' : 'none' }}>
					<Col span={24} style={{ textAlign: 'right' }}>
					  <Button type="primary" htmlType="submit">Search</Button>
					  <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
						Clear
					  </Button>
					  
					</Col>
				</Row>								
				<Row>
					  <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
						{ this.state.expand ?  'Hide' : 'Show' } Menu <Icon type={this.state.expand ? 'up' : 'down'} />
					  </a>
				</Row>
			</Form>
		);
	}
}

const mapStateToProps = state => ({
	foodTypes :	state.foodTypes
});
const mapDispatchToProps = (dispatch) => ({
	_getFoodTypes : () => dispatch(foodTypesActions.fetchFoodTypes()),
	_filterFoods : filter => dispatch(filterActions.setFoodFilters(filter))
});

const Filters = Form.create()(FiltersForm);

export default connect(mapStateToProps, mapDispatchToProps)(Filters);