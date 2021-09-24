import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const createNewsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '4771dab2f5msh25a44ff21a3c317p18f6acjsn131c86a91e6c'
} 

const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) => ({url, headers: createNewsHeader})

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptosNewsQuery, 
} = newsApi;