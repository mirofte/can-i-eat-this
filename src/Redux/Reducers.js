import { combineReducers } from 'redux';
import { filtersReducer } from '../Reducers/Filters.reducer';
import { foodsReducer } from '../Reducers/Foods.reducer';
import { foodCategoriesReducer } from '../Reducers/FoodCategories.reducer';
import {uiReducer} from "../Reducers/Ui.reducer";
import {notificationsReducer} from "../Reducers/Notification.reducer";

export const rootReducer = combineReducers({
  foods: foodsReducer,
  foodCategories : foodCategoriesReducer,
  filter : filtersReducer,
  ui: uiReducer,
  notification: notificationsReducer,
});
