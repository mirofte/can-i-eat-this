import { fetchFoods } from '../../Actions/Foods.actions';
import { SET_FOOD_FILTERS } from '../../Actions/Filters.actions';

export const filtersMiddleware = () => (next) => (action) => {
	next(action);
	
	switch(action.type){
		case SET_FOOD_FILTERS:
			next(fetchFoods(action.payload));
		break;
		default:
		break;
	}
}