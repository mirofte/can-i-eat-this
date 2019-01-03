import { SET_FOODS, SET_PAGINATION_FOODS }  from '../Actions/Foods.actions';

const initState = [];

export const foodsReducer = (foods = initState, action) => {
	const { payload } = action; 
	
	switch(action.type){
		case SET_FOODS:
			return payload;
		break;
		case SET_PAGINATION_FOODS : 
			return [...foods, ...payload];
		default : 
			return foods;
	}
};