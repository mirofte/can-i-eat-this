export const FOODS = '[Foods]';

export const FETCH_FOODS			=	`${FOODS} FETCH`;
export const FETCH_PAGINATION_FOODS	=	`PAGINATION ${FOODS} FETCH`;
export const SET_FOODS				=	`${FOODS} SET`;
export const SET_PAGINATION_FOODS   =	`PAGINATION ${FOODS} SET`;

export const fetchFoods = (query) => {
	return {
	type : FETCH_FOODS,
	payload : query
}};

export const fetchPaginationFoods = (query) => {
	return {
	type : FETCH_PAGINATION_FOODS,
	payload : query
}};

export const setFoods = ({foods, normalizeKey}) => ({
	type : SET_FOODS,
	payload : foods,
	meta : { normalizeKey, feature : FOODS }
	
});
