import { SET_FOOD_FILTERS, RESET_FOOD_FILTERS }  from '../Actions/Filters.actions';

const initState = {};

export const filtersReducer = (filters = initState, action) => {
	
	const { payload } = action; 
	
	switch(action.type){
		case SET_FOOD_FILTERS:
		case RESET_FOOD_FILTERS:
			return payload;
		default:
			return filters;
	}
}
