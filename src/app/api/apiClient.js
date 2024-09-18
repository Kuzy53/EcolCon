import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://90.188.90.101:8000/users/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('jwt');
      if (token) {
        headers.set('Authorization', `Token ${token}`);
      }
      
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'login/',
        method: 'POST',
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ email, password }) => ({
        url: 'register/',
        body: { email, password },
        method: 'POST',
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: 'logout/',
        method: 'GET',
      }),
    }),
    getUser: builder.query({
      query: () => '/me',
    }),
  }),
});

export const { useLoginMutation,useRegisterMutation, useLogoutUserMutation, useGetUserQuery } = authApi;
