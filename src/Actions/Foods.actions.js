export const FOODS = '[Foods]';

export const FETCH_FOODS	=	`${FOODS} FETCH`;
export const SET_FOODS		=	`${FOODS} SET`;

export const fetchFoods = (query) => {
	return {
	type : FETCH_FOODS,
	payload : query
}};

export const setFoods = ({foods, normalizeKey}) => ({
	type : SET_FOODS,
	payload : foods,
	meta : { normalizeKey, feature : FOODS }
	
});
