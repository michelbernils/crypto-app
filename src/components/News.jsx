import React from 'react'
import moment from 'moment'
import {Select, Typography, Avatar, Card, Row, Col, Input} from 'antd'
import {useGetCryptosNews} from '../services/cryptoNewsAPI'

const {Text, Title} = Typography;
const {Option} = Select

const News = ({simplified}) => {
    const {data: cryptoNews} = useGetCryptosNews({newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100})
    return (
        <div>
            <h4>News</h4>
        </div>
    )
}

export default News
