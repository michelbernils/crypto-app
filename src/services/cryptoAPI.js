import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const createApiHeader = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '4771dab2f5msh25a44ff21a3c317p18f6acjsn131c86a91e6c'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({url, headers: createApiHeader})

export const cryptoApi = createApi({
    reducerPath: 'CryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
          getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }),
    })
});

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery} = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '4771dab2f5msh25a44ff21a3c317p18f6acjsn131c86a91e6c'
//     }
//   };
