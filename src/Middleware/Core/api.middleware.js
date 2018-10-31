import { API_REQUEST, apiSuccess, apiError } from '../../Actions/Api.actions';

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
	next(action);	
	
	if(action.type.includes(API_REQUEST)){
		const {body, url, method, feature} = action.meta;
		const query = action.payload;
		if(method === 'POST'){
			fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
					},
					body: JSON.stringify({
						query
					})
			})
			.then(response => response.json())
			.then(response => dispatch(apiSuccess({ response: response.data, feature})))
			.catch(error => dispatch(apiError({error: error, feature})));
		}
		else{
			fetch(url, {body, method})
			.then(response => response.json())
			.then(response => dispatch(apiSuccess({response, feature})))
			.catch(error => dispatch(apiError({error: error, feature})))
		}
	}
};