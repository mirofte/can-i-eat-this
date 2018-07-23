const API_URL = 'https://cietapi.herokuapp.com';

export const API = {
	FOODS : API_URL + '/foods/?_expand=foodType',
	FOOD_TYPES : API_URL + '/foodTypes/',
}