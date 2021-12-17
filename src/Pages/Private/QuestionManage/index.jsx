import React, { useEffect, useState, useRef } from "react";
import Header from "./components/header";
import PublishItem from "./components/publish-item";
import queryString from "query-string";
import PublishNav from "./components/publish-nav";
import SkeletonGroup from "./components/skeleton-group";
import QuestionApi from "src/Apis/QuestionApi";
import { useHistory, useLocation } from "react-router-dom";
import Pagination from "src/Pages/Public/Commons/Panigation";

const QuesionManage = (props) => {
  // get query params
  const query = queryString.parse(props.location.search, {
    parseNumbers: true,
  });
  const [startCall, setStartCall] = useState(false);
  const [questionList, setQuestionList] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [render, setRender] = useState(false);
  const timeout = useRef(null);
  const history = useHistory();
  const location = useLocation();
  // __effect
  useEffect(() => {
    async function getData() {
      try {
        // start call api
        setStartCall(true);
        const query = queryString.parse(location.search);
        const {
          data: {
            data: { models, metaData },
          },
        } = await QuestionApi.getListPublish(query);
        if (models && models.length > 0) setQuestionList(models);
        // set Pagination
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
        const { data: resultSearch } = await QuestionApi.searchQuestion(
          e.target.value
        );
        setQuestionList(resultSearch.data);
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
      {questionList &&
        questionList.map((item, index) => {
          return (
            <PublishItem
              // onMarkSpam={onMarkSpam}
              index={index + 1}
              key={index}
              title={item?.title}
              content={item?.content}
              createBy={item?.createBy}
              createAt={item?.createdAt}
              spam={item?.spam}
              id={item?._id}
              slug={item?.slug}
              username={item?.createBy?.username}
              pagination={pagination}
              onPageChange={onPageChange}
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

export default QuesionManage;
