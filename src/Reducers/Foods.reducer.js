import { SET_FOODS }  from '../Actions/Foods.actions';

const initState = [];

export const foodsReducer = (foods = initState, action) => {
	const { payload } = action; 
	
	switch(action.type){
		case SET_FOODS : 
			return payload;
		default : 
			return foods;
	}
};