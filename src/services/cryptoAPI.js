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
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery, 
} = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '4771dab2f5msh25a44ff21a3c317p18f6acjsn131c86a91e6c'
//     }
//   };