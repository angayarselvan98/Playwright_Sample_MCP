import * as dotenv from 'dotenv';
import { getEnvVar } from '../utils/envReader';

dotenv.config();

export const ENV = {
  BASE_URL: getEnvVar('BASE_URL', 'https://www.saucedemo.com'),
  HEADLESS: getEnvVar('HEADLESS', 'true') !== 'false',
  DEFAULT_TIMEOUT: Number(getEnvVar('DEFAULT_TIMEOUT', '30000')),
};

export const ROUTES = {
  LOGIN: '/',
  INVENTORY: '/inventory.html',
  PRODUCT_DETAIL: '/inventory-item.html',
  CART: '/cart.html',
  CHECKOUT_STEP_ONE: '/checkout-step-one.html',
  CHECKOUT_STEP_TWO: '/checkout-step-two.html',
  CHECKOUT_COMPLETE: '/checkout-complete.html',
};
