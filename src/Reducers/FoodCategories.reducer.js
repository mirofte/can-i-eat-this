import { SET_FOOD_CATEGORIES }  from '../Actions/FoodCategories.actions';

const initState = []

export const foodCategoriesReducer = (foodCategories = initState, action) => {
	const { payload } = action; 

	switch(action.type){
		case SET_FOOD_CATEGORIES:
			return payload;
		default:
			return foodCategories;
	}
};