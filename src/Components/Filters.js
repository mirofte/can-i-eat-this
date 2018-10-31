import React, {Component} from 'react';
import * as filterActions from '../Actions/Filters.actions';
import * as foodCategoriesActions from '../Actions/FoodCategories.actions';
import { connect } from 'react-redux';
import { Form, Row, Col, Input, Button, Icon, Select } from 'antd';
import '../Css/Filters.css';

const FormItem = Form.Item;

class FiltersForm extends Component{
	
	state = {
		expand: true,
	};
	
	componentWillMount = () => this.props._getFoodCategories();
	
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
			this.props._resetFoods();
		}
		
		this.props.form.resetFields();
	}
	
	render = () => {
		
		const { foodCategories } = this.props;
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
					{ foodCategories ?
					<Col xs={24} lg={8}>
						<FormItem label="Category">
							{getFieldDecorator(`foodCategoryId`, {
							  rules: [],
							})(
							 <Select placeholder="" style={{ width: 200 }}>
								{
									foodCategories.map( foodCategory => {
										return <Option key={foodCategory.id} value={foodCategory.id}>{foodCategory.name}</Option>
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
	foodCategories :	state.foodCategories
});
const mapDispatchToProps = (dispatch) => ({
	_getFoodCategories : () => dispatch(foodCategoriesActions.fetchFoodCategories()),
	_filterFoods : filter => dispatch(filterActions.setFoodFilters(filter)),
	_resetFoods	:	() => dispatch(filterActions.resetFoodFilters())
});

const Filters = Form.create()(FiltersForm);

export default connect(mapStateToProps, mapDispatchToProps)(Filters);