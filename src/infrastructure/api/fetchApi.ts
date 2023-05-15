import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import config from '@/application/config';

/**
 * Entry point for Redux API queries and mutations
 * see https://redux-toolkit.js.org/rtk-query/usage-with-typescript#createapi
 */
export const fetchApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.api.endpoint}`,
    prepareHeaders: headers => {
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['translators', 'jobs'],
  endpoints: () => ({}),
});
