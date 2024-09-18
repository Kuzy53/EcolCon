import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ecoApi = createApi({
  reducerPath: 'ecoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://90.188.90.101:8000/' }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => 'news/news/',
    }),
    getNewsById: builder.query({
      query: (id) => `news/news/${id}`,
    }),
    getEvents: builder.query({
      query: () => `events/events/`
    }),
    getEventsById: builder.query({
      query: () => `events/events/${id}`
    }),
  }),
});

export const { useGetNewsQuery, useGetNewsByIdQuery, useGetEventsQuery, useGetEventsByIdQuery } = ecoApi;
