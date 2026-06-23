// Production / container build. API calls are relative to the host so that
// Nginx can forward "/api" to the backend running on port 5000.
export const environment = {
  apiBaseUrl: '/api',
};
