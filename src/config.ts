import {
  // @ts-ignore
  STAGING_API_URL,
  // @ts-ignore
  PRODUCTION_API_URL,
  // @ts-ignore'
  API_CONNECTOR_LOGS_ACTIVATED,
} from "@env";

export const isProduction = false;

interface TypeConfig {
  API_CONNECTOR_LOGS_ACTIVATED: boolean;
  API_URL: string;
  SPLASH_SCREEN_DELAY: number;
  isDev: boolean;
}

const Config: TypeConfig = {
  isDev: __DEV__,
  API_URL: isProduction ? PRODUCTION_API_URL : STAGING_API_URL,
  API_CONNECTOR_LOGS_ACTIVATED,
  SPLASH_SCREEN_DELAY: 2000,
};

export default Config;
