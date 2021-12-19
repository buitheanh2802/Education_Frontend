import React, { useEffect, useState } from "react";
import StatisticApi from "src/Apis/StatisticApi";
import { Icon } from "src/Components/Icon";
import ChartPost from "./Components/ChartPost";
import ChartQuestion from "./Components/ChartQuestion";
import ChartSolutions from "./Components/ChartSolutions";
import ChartUser from "./Components/ChartUser";
import ResultSulotion from "./Components/ResultSulotion";
import Skeleton from 'react-loading-skeleton'

const ChartManager = () => {
  const [total, setTotal] = useState(null)
  console.log(total)
  useEffect(() => {
    (async () => {
      try {
        const { data } = await StatisticApi.totalAll();
        setTotal(data?.data);
      } catch (error) { }
    })()
  }, [])
  return (
    <>
      {total ? <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mb-4 select-none">
        <div className="px-4 py-6 bg-white rounded shadow flex item-center justify-center gap-4 relative font-light">
          <Icon.Questions className="w-5 absolute top-3 left-3 text-blue-400 fill-current" />
          <p><span className="font-medium">{total?.countQuestion}</span> câu hỏi đã tạo</p>
        </div>
        <div className="px-4 py-6 bg-white rounded shadow flex item-center justify-center gap-4 relative font-light">
          <Icon.Pen className="w-5 absolute top-3 left-3 text-blue-400 fill-current" />
          <p><span className="font-medium">{total?.countPost}</span> bài viết đã tạo</p>
        </div>
        <div className="px-4 py-6 bg-white rounded shadow flex item-center justify-center gap-4 relative font-light">
          <Icon.Form className="w-5 absolute top-3 left-3 text-blue-400 fill-current" />
          <p><span className="font-medium">{total?.countChallenge}</span> bài tập đã tạo</p>
        </div>
        <div className="px-4 py-6 bg-white rounded shadow flex item-center justify-center gap-4 relative font-light">
          <Icon.Tags className="w-5 absolute top-3 left-3 text-blue-400 fill-current" />
          <p><span className="font-medium">{total?.countTag}</span> chủ đề đã tạo</p>
        </div>
        <div className="px-4 py-6 bg-white rounded shadow flex item-center justify-center gap-4 relative font-light">
          <Icon.User className="w-5 absolute top-3 left-3 text-blue-400 fill-current" />
          <p><span className="font-medium">{total?.countUser} </span>tài khoản đã tạo</p>
        </div>
      </div> :
        <div className="w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 mb-4 select-none">
          {[...new Array(5)]?.map((item, index) => <Skeleton key={index} className="p-6" />)}
        </div>}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-10">
        <ChartPost />
        <ChartQuestion />
        <ChartSolutions />
        <ChartUser />
        <ResultSulotion />
      </div>
    </>
  );
};

export default ChartManager;
