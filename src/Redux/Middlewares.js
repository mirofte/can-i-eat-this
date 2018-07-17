import { foodsMiddleware } from '../Middleware/App/foods.middleware';
import { foodTypesMiddleware } from '../Middleware/App/foodTypes.middleware';
import { filtersMiddleware } from '../Middleware/App/filters.middleware';
import { apiMiddleware } from '../Middleware/Core/api.middleware';
import {notificationMiddleware} from "../Middleware/Core/notification.middleware";

// create the feature middleware array
export const featureMiddleware = [
  filtersMiddleware,
  foodsMiddleware,
  foodTypesMiddleware
];

// create the core middleware array
export const coreMiddleware = [
  apiMiddleware,
  notificationMiddleware
];