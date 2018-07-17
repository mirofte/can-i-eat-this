import {dataNormalized} from "../../Actions/Data.actions";
import {setFoods} from "../../Actions/Foods.actions";

export const normalizeMiddleware = ({ dispatch }) => (next) => (action) => {
	
	//filter both by action type and metadata content
	if (action.type.includes('SET') && action.meta.normalizeKey) {
		
		//notify the system about the transformation
		dispatch(dataNormalized({feature: action.meta.feature}));
		
		// transform the data structure
		const foods = action.payload.reduce((acc, item) => {
			acc[item[action.meta.normalizeKey]] = item;
			return acc;
		}, {});
		
		//roll the action forward to the reudcer
		next(setFoods({foods, normalizeKey: null}))
	}
	else{
		next(action);
	}
};