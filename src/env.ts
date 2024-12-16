/** https://vite.dev/guide/env-and-mode */
export const {
  BASE_URL,
  DEV,
  MODE, //['development', 'production', 'staging', 'test', {string}]
  PROD,
  SSR, //server side rendering
  VITE_API_KEY,
  VITE_APP_ID,
  VITE_AUTH_DOMAIN,
  VITE_MEASUREMENT_ID,
  VITE_MESSAGING_SENDER_ID,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
} = import.meta.env
