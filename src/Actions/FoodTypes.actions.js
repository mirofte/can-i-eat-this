
export const FOOD_TYPES = '[Food Types]';

export const FETCH_FOOD_TYPES	=	`${FOOD_TYPES} FETCH`;
export const SET_FOOD_TYPES		=	`${FOOD_TYPES} SET`;

export const fetchFoodTypes = () => ({
	type : FETCH_FOOD_TYPES,
	payload : ''
});

export const setFoodTypes = ({foodTypes, normalizeKey}) => ({
	type : SET_FOOD_TYPES,
	payload : foodTypes,
	meta : { normalizeKey, feature : FOOD_TYPES }
	
});
