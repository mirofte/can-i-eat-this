import React, { Component } from 'react';
import * as actions from '../Actions/FoodTypes.actions'
import * as filterActions from '../Actions/Filters.actions'
import { connect } from 'react-redux';
import { Form, Input, Button, Select, Alert} from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;

class SearchFoodForm extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			searchActive : false
		}
	}
	
	componentWillMount = () => this.props._getFoodTypes();
	handleSubmit = (e) => {
		
		e.preventDefault();
		
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				this.setState({searchActive : true});
				this.props._filterFoods(values);
			}
		});
	  }
  render() {
	  
	const { getFieldDecorator } = this.props.form;
	const { foodTypes, foods } = this.props;
	const { searchActive } = this.state;
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
            <Input />
          )}
        </FormItem>
		<FormItem
          label="Type"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          {getFieldDecorator('foodTypeId', {
          })(
            <Select placeholder="Select a option and change input text above">
				{
					foodTypes.map( foodType => {
						return <Option key={foodType.id} value={foodType.id}>{foodType.name}</Option>
					})
				}
            </Select>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
	  { searchActive ? 
			(foods.length) 
				?
				<Alert message="Yes, you can eat this" type="success" /> 
				:
				<Alert message="No food found" type="error" />  
			:
			''
		} 
	  </div>
	  
    );
  }
}

const mapStateToProps = state => ({
	foodTypes	:	state.foodTypes,
	foods		:	state.foods	
});

const mapDispatchToProps = (dispatch) => ({
	_getFoodTypes : () => dispatch(actions.fetchFoodTypes()),	
	_filterFoods : filter => dispatch(filterActions.setFoodFilters(filter))
});


const SearchFood = Form.create()(SearchFoodForm);

export default connect(mapStateToProps, mapDispatchToProps)(SearchFood);