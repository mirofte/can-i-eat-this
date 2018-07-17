import { SET_FOOD_TYPES }  from '../Actions/FoodTypes.actions';

const initState = []

export const foodTypesReducer = (foodTypes = initState, action) => {
	const { payload } = action; 

	switch(action.type){
		case SET_FOOD_TYPES:
			return payload;
		default:
			return foodTypes;
	}
};