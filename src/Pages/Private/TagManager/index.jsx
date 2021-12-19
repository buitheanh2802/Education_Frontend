import React, { useEffect, useState } from "react";
import Header from "./components/header";
import PublishNav from "./components/publish-nav";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import SkeletonGroup from "./components/skeleton-group";
import TagAPi from "src/Apis/TagApi";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "src/Pages/Public/Commons/Panigation";

const TagManager = (props) => {
  const query = queryString.parse(props.location.search, {
    parseNumbers: true,
  });
  const [startCall, setStartCall] = useState(false);
  const [tagList, setTagList] = useState([]);
  const [reConnect, setReConnect] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    setTagList(null);
    const query = queryString.parse(location.search);
    const getData = async () => {
      try {
        setStartCall(true);
        const { data: listTag } = await TagAPi.getAll(query);
        setTagList(listTag.data.models);
        setPagination(listTag?.data?.metaData?.pagination);
        setStartCall(false);
      } catch (error) {
        console.log(error);
        setStartCall(false);
      }
    };
    getData();
  }, [reConnect, location.search]);
  const onPageChange = (e) => {
    const query = queryString.stringify({ page: e.selected + 1 });
    history.push(`${location.pathname}?${query}`);
  };
  const onRemove = (slug) => {
    setTagList(tagList.filter((item) => item.slug !== slug));
  };

  const onReState = () => {
    setReConnect(!reConnect);
  };

  return (
    <div className="w-full">
      <Header onAdd={onReState} />
      <PublishNav />
      {startCall && <SkeletonGroup />}
      {tagList &&
        tagList.map((item, index) => {
          return (
            <PublishItem
              onEdit={onReState}
              onRemove={onRemove}
              index={index + 1}
              key={item._id}
              id={item._id}
              name={item.name}
              follow={item.followerCounts}
              post={item.postCounts}
              question={item.questionCounts}
              slug={item.slug}
              photo={item?.avatar?.avatarUrl}
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

export default TagManager;
