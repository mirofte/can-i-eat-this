import { FOODS, FETCH_FOODS, setFoods } from '../../Actions/Foods.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../Actions/Api.actions';
import { setLoader } from '../../Actions/Ui.actions';
import { setNotification } from '../../Actions/Notification.actions';
import { URL } from '../../Constans/Urls';
import { prepareQuery } from '../../Utils/Utils';
export const foodsMiddleware = () => (next) => (action) => {
	
	next(action);	

	switch(action.type){
		
		case FETCH_FOODS:
			const query = prepareQuery({
				type: 'foods', 
				filters : action.payload,
				fields: `
					id
					name
					en_name
					image
					category{
						name
						en_name
					}
					note{
						note
					}`
			});
			next(apiRequest({body: query, method: 'POST', url: URL.API, feature: FOODS}));
			next(setLoader({state: true, feature: FOODS}));
		break;
		
		case `${FOODS} ${API_SUCCESS}`:
			next(setFoods({foods: action.payload.foods, normalizeKey: 'id'}));
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