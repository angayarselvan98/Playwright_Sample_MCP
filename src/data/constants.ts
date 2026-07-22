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
};
