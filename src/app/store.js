import { configureStore } from '@reduxjs/toolkit';

import {cryptoApi} from '../services/cryptoAPI'
import {newsApi} from '../services/cryptoNewsAPI'

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
})