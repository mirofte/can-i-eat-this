
export const FOOD_CATEGORIES = '[Food Categories]';

export const FETCH_FOOD_CATEGORIES	=	`${FOOD_CATEGORIES} FETCH`;
export const SET_FOOD_CATEGORIES	=	`${FOOD_CATEGORIES} SET`;

export const fetchFoodCategories = () => ({
	type : FETCH_FOOD_CATEGORIES,
	payload : ''
});

export const setFoodCategories = ({foodCategories, normalizeKey}) => ({
	type : SET_FOOD_CATEGORIES,
	payload : foodCategories,
	meta : { normalizeKey, feature : FOOD_CATEGORIES }
	
});
