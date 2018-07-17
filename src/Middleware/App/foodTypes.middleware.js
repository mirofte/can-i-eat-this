import { FOOD_TYPES, FETCH_FOOD_TYPES, setFoodTypes } from '../../Actions/FoodTypes.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../Actions/Api.actions';
import { setLoader } from '../../Actions/Ui.actions';
import { setNotification } from '../../Actions/Notification.actions';
import { API } from '../../Constans/Urls';

export const foodTypesMiddleware = () => (next) => (action) => {
	next(action);	

	switch(action.type){
		
		case FETCH_FOOD_TYPES:
			next(apiRequest({body: null, method: 'GET', url: API.FOOD_TYPES, feature: FOOD_TYPES}));
			next(setLoader({state: true, feature: FOOD_TYPES}));
		break;
		
		case `${FOOD_TYPES} ${API_SUCCESS}`:
			next(setFoodTypes({foodTypes: action.payload, normalizeKey: 'id'}));
			next(setLoader({state: false, feature: FOOD_TYPES}));
		break;
		case `${FOOD_TYPES} ${API_ERROR}`:
			next(setNotification({message: action.payload.message, feature: FOOD_TYPES}));
			next(setLoader({state: false, feature: FOOD_TYPES}));
		break;
		default:
		break;
	}
};