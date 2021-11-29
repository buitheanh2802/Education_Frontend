import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PostAPI from "../../../Apis/PostApi";
import Header from "./components/header";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";

const PostManager = (props) => {
  // get query params
  const query = queryString.parse(props.location.search, {
    parseNumbers: true,
  });
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
          page: query?.page,
        };
        const {
          data: {
            data: { models, metaData },
          },
        } = await PostAPI.getListPublish(request);
        if (models && models.length > 0) setPostList(models);
        // set pagination
        setPagination(metaData.pagination);
        // end call
        setStartCall(false);
      } catch (error) {
        console.log(error);
        setStartCall(false);
      }
    }
    getData();
  }, []);
  // __render data
  return (
    <div className="w-full">
      <Header />
      <PublishNav />
      {startCall && <SkeletonGroup />}
      {postList &&
        postList.map((item, index) => {
          return (
            <PublishItem
              index={index + 1}
              key={index}
              title={item.title}
              content={item.content}
              createBy={item.createBy}
              createAt={item.createdAt}
              publishedBy={item.publishedBy}
              shortId={item.shortId}
            />
          );
        })}
    </div>
  );
};

export default PostManager;
