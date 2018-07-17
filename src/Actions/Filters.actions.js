export const FOOD_FILTERS = '[Food Filters]';

export const SET_FOOD_FILTERS = `${FOOD_FILTERS} SET`;

export const setFoodFilters = filter => ({
	type : SET_FOOD_FILTERS,
	payload : filter
});
