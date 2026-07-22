import { ENV } from '../src/data/constants';

export const browserConfig = {
  headless: ENV.HEADLESS,
  timeout: ENV.DEFAULT_TIMEOUT,
};

export const contextConfig = {
  viewport: { width: 1280, height: 720 },
  ignoreHTTPSErrors: true,
};
