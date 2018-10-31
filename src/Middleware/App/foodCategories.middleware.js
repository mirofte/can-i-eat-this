import { FOOD_CATEGORIES, FETCH_FOOD_CATEGORIES, setFoodCategories } from '../../Actions/FoodCategories.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../Actions/Api.actions';
import { setLoader } from '../../Actions/Ui.actions';
import { setNotification } from '../../Actions/Notification.actions';
import { URL } from '../../Constans/Urls';
import { prepareQuery } from '../../Utils/Utils';

export const foodCategoriesMiddleware = () => (next) => (action) => {
	next(action);	

	switch(action.type){
		
		case FETCH_FOOD_CATEGORIES:
			const query = prepareQuery({
				type: 'foodCategories', 
				fields: `
					id
					name
					en_name
				`
			});
			next(apiRequest({body: query, method: 'POST', url: URL.API, feature: FOOD_CATEGORIES}));
			next(setLoader({state: true, feature: FOOD_CATEGORIES}));
		break;
		
		case `${FOOD_CATEGORIES} ${API_SUCCESS}`:
			next(setFoodCategories({foodCategories: action.payload.foodCategories, normalizeKey: 'id'}));
			next(setLoader({state: false, feature: FOOD_CATEGORIES}));
		break;
		case `${FOOD_CATEGORIES} ${API_ERROR}`:
			next(setNotification({message: action.payload.message, feature: FOOD_CATEGORIES}));
			next(setLoader({state: false, feature: FOOD_CATEGORIES}));
		break;
		default:
		break;
	}
};