import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./components/header";
import PublishNav from "./components/publish-nav";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import SkeletonGroup from "./components/skeleton-group";
import TagAPi from "src/Apis/TagApi";

const TagManager = (props) => {
    const query = queryString.parse(props.location.search, {
        parseNumbers: true,
    });
    const [startCall, setStartCall] = useState(false);
    const [tagList, setTagList] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                setStartCall(true);
                const { data: tagLists} = await TagAPi.getAll();
                setTagList(tagLists.data.models);
                setStartCall(false);
            } catch (error) {
                console.log(error);
                setStartCall(false);
            }
        }
        getData();
    }, []);

    return (
        <div className="w-full">
            <Header />
            <PublishNav />
            {startCall && <SkeletonGroup />}
            {tagList &&
                tagList.map((item, index) => {
                    return (
                        <PublishItem
                            index={index + 1}
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            follow={item.followerCounts}
                            post={item.postCounts}
                            question={item.questionCounts}
                            slug={item.slug}
                        />
                    );
                })}
        </div>
    );
};

export default TagManager;



