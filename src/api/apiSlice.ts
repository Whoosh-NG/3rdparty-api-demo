/* eslint @typescript-eslint/no-explicit-any: "off" */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://localvenda-c5e66dcf9521.herokuapp.com/v1',

  prepareHeaders: (headers) => {
    // Get your token from wherever you have it stored
    const userToken = Cookies.get('userToken');

    if (userToken) {
      // Set the 'Authorization' header with the token
      headers.set('Authorization', `Bearer ${userToken}`);
      headers.set('x-access-token', userToken);
    }

    return headers;
  },
});

export const apiSLice = createApi({
  baseQuery: customBaseQuery,

  tagTypes: ['User', 'Products', 'CourseList', 'Chapter', 'ChapterList'],

  // All endpoints
  endpoints: (builder) => ({
    // User Endpoints
    updateSellerData: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/sellers/patch`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'User', id: 'List' }],
    }),

    getSellerData: builder.query({
      query: () => '/sellers',
      providesTags: [{ type: 'User', id: 'List' }],
    }),

    getSellerProductCat: builder.query({
      query: () => `/sellerCats`,
    }),

    addSellerProductCat: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/sellerCats`,
        method: 'POST',
        body: formData,
      }),
    }),

    // Categories

    getCategoryList: builder.query({
      query: () => `/vendaCats
      `,
    }),

    getSubCategoryList: builder.query({
      query: (vendaId) => `/vendaCats/sub/${vendaId}`,
    }),

    //  Delivery
    addDeliverySetup: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/delivery`,
        method: 'POST',
        body: formData,
      }),
    }),

    updateDeliverySetup: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/delivery/update`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'User', id: 'List' }],
    }),

    // Banks details
    addBankDetails: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/banks`,
        method: 'POST',
        body: formData,
      }),
    }),

    updateBankDetails: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/banks`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: [{ type: 'User', id: 'List' }],
    }),

    // Products endpoints
    createProduct: builder.mutation<any, any>({
      query: (formData) => ({
        url: `/products`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: [{ type: 'Products', id: 'List' }],
    }),

    getProductCat: builder.query({
      query: (catId) => `/products/cat/category?categoryId=${catId}`,
      providesTags: [{ type: 'Products', id: 'List' }],
    }),

    getSellerCat: builder.query({
      query: () => '/sellerCats/',
    }),

    getSellerTotalEarnings: builder.query({
      query: () => '/sales/earnings/total/earning',
    }),

    getSellerGetAllOrders: builder.query({
      query: ({ limit, page }) =>
        `/orders/new/orders?limit=${limit}&page=${page}`,
    }),

    getSellerGetAllSales: builder.query({
      query: () => '/sales/',
    }),

    getSellerGetAllProducts: builder.query({
      query: () => '/products/',
    }),
  }),
});

export const {
  useGetCategoryListQuery,
  useGetSubCategoryListQuery,
  useUpdateBankDetailsMutation,
  useUpdateDeliverySetupMutation,
  useGetProductCatQuery,
  useGetSellerProductCatQuery,
  useGetSellerTotalEarningsQuery,
  useGetSellerGetAllOrdersQuery,
  useGetSellerGetAllProductsQuery,
  useGetSellerGetAllSalesQuery,
  useUpdateSellerDataMutation,
  useGetSellerCatQuery,
  useAddSellerProductCatMutation,
  useAddBankDetailsMutation,
  useAddDeliverySetupMutation,
  useGetSellerDataQuery,
  useCreateProductMutation,
} = apiSLice;
