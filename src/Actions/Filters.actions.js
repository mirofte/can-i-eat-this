export const FOOD_FILTERS = '[Food Filters]';

export const SET_FOOD_FILTERS = `${FOOD_FILTERS} SET`;
export const RESET_FOOD_FILTERS = `${FOOD_FILTERS} RESET`;

export const setFoodFilters = filter => ({
	type : SET_FOOD_FILTERS,
	payload : filter
});

export const resetFoodFilters = () => ({
	type : RESET_FOOD_FILTERS,
	payload : {}
});
