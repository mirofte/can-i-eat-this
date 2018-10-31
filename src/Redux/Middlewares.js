import { foodsMiddleware } from '../Middleware/App/foods.middleware';
import { foodCategoriesMiddleware } from '../Middleware/App/foodCategories.middleware';
import { filtersMiddleware } from '../Middleware/App/filters.middleware';
import { apiMiddleware } from '../Middleware/Core/api.middleware';
import {notificationMiddleware} from "../Middleware/Core/notification.middleware";

// create the feature middleware array
export const featureMiddleware = [
  filtersMiddleware,
  foodsMiddleware,
  foodCategoriesMiddleware
];

// create the core middleware array
export const coreMiddleware = [
  apiMiddleware,
  notificationMiddleware
];