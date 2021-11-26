import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PostAPI from './../../../Apis/PostApi';
import Header from './components/header';
import PublishItem from './components/publish-item';
import queryString from 'query-string';
import PublishNav from './components/publish-nav';

const PheDuyetBaiViet = (props) => {
    // get query params
    const query = queryString.parse(props.location.search, { parseNumbers: true })
    // __state
    const [startCall, setStartCall] = useState(false);
    const [postList, setPostList] = useState(null);
    const [pagination, setPagination] = useState(null);
    // __effect
    useEffect(() => {
        async function getData() {
            try {
                // start call api 
                setStartCall(true);
                const request = {
                    page: query?.page
                }
                const { data: { data: { models, metaData } } } = await PostAPI.getListPublish(request);
                if (models && models.length > 0) setPostList(models);
                // set pagination
                setPagination(metaData.pagination);
                // end call
                setStartCall(false);
            } catch (error) {
                console.log(error.response);
                setStartCall(false);
            }
        }
        getData()
    }, [])
    // __render data
    return (
        <div className="w-full">
            <Header />
            <PublishNav />
            <PublishItem />
        </div>
    );
};

export default PheDuyetBaiViet;