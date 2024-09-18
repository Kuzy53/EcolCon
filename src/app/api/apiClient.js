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
      query: ({ username, password }) => ({
        url: 'login/',
        method: 'POST',
        body: { username, password },
      }),
    }),
    register: builder.mutation({
      query: ({ email, full_name, vk_link, password, avatar }) => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('full_name', full_name);
        formData.append('vk_link', vk_link);
        formData.append('password', password);
        if (avatar) {
          formData.append('image', avatar); 
        }
        
        return {
          url: 'registration/',
          method: 'POST',
          body: formData,
        };
      },
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
