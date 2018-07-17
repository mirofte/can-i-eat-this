import { FOODS, FETCH_FOODS, setFoods } from '../../Actions/Foods.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../Actions/Api.actions';
import { setLoader } from '../../Actions/Ui.actions';
import { setNotification } from '../../Actions/Notification.actions';
import { API } from '../../Constans/Urls';
import { prepareUrlFromFilters } from '../../Utils/Utils';
export const foodsMiddleware = () => (next) => (action) => {
	
	next(action);	

	switch(action.type){
		
		case FETCH_FOODS:
			let url = prepareUrlFromFilters(action.payload);
			let api_url = API.FOODS + '&' + url;
			next(apiRequest({body: null, method: 'GET', url: api_url, feature: FOODS}));
			next(setLoader({state: true, feature: FOODS}));
		break;
		
		case `${FOODS} ${API_SUCCESS}`:
			next(setFoods({foods: action.payload, normalizeKey: 'id'}));
			next(setLoader({state: false, feature: FOODS}));
		break;
		case `${FOODS} ${API_ERROR}`:
			next(setNotification({message: action.payload.message, feature: FOODS}));
			next(setLoader({state: false, feature: FOODS}));
		break;
		default:
		break;
	}
};