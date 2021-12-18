import React, { useEffect, useRef, useState } from "react";
import PostAPI from "../../../Apis/PostApi";
import Header from "./components/header";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";
import { Link, useHistory, useLocation } from "react-router-dom";
import Pagination from "src/Pages/Public/Commons/Panigation";
const PostManager = (props) => {
  // get query params
  const query = queryString.parse(props.location.search, {
    parseNumbers: true,
  });
  // __state
  const [startCall, setStartCall] = useState(false);
  const [postList, setPostList] = useState(null);
  const [pagination, setPagination] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const timeout = useRef(null);

  useEffect(() => {
    async function getData() {
      try {
        // start call api
        setStartCall(true);
        setPostList(null);
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
  }, [location.search]);

  const handleSearch = async (e) => {
    try {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(async () => {
        const { data: resultSearch } = await PostAPI.searchPost(e.target.value);
        setPostList(resultSearch.data);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const onPageChange = (e) => {
    const query = queryString.stringify({ page: e.selected + 1 });
    history.push(`${location.pathname}?${query}`);
  };
  // __render data
  return (
    <div className="w-full">
      <Header handleSearch={handleSearch} />
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
      {Pagination &&
        pagination?.totalPage > 1 &&
        pagination?.countDocuments !== 0 && (
          <Pagination
            pageCount={pagination.totalPage}
            onChange={onPageChange}
            currentPage={pagination.currentPage - 1}
          />
        )}
    </div>
  );
};

export default PostManager;
