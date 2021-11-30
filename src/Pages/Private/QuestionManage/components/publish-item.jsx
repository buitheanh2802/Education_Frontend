import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "src/Components/Loading";
import { timeFormatter } from "src/Helpers/Timer";
import { useSelector } from "react-redux";
import PostAPI from "../../../../Apis/PostApi";
import QuestionApi from "src/Apis/QuestionApi";

const PublishItem = (props) => {
  // _props
  const { title, content, index, createBy, createAt, id, spam, slug } = props;
  // selector
  const { profile } = useSelector((state) => state.Auth);
  // state
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });
  const [spamName, setSpamName] = useState(spam);

  const onMarkSpam = async (id) => {
    try {
      if (id) setLoading({ ...loading, success: true });

      await QuestionApi.questionSpam(id);
      if (spamName === true) {
        setSpamName(false);
      } else {
        setSpamName(true);
      }
      if (id) setLoading({ ...loading, success: false });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <></>
    <div
      className="nav bg-white border-b  text-[15px] p-[10px] grid
    grid-cols-[60px,1fr,2.5fr,0.5fr,0.5fr,1.2fr] "
    >
      <div className="font-medium ">{index}</div>
      <div className="font-medium mr-[30px] text-blue-500 underline ">
        <Link to={`/question/${slug}-${id}`}>{title}</Link>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="mr-[30px] text-ellipsis "
      ></div>
      <div className="">
        <Link className="text-blue-500 underline " to="">
          {createBy.fullname}
        </Link>
      </div>
      <div className="text-[13px] ">{timeFormatter(createAt)}</div>

      <div className="text-center">
        <button
          onClick={() => onMarkSpam(id)}
          className={
            spamName
              ? "px-[15px] py-[5px] text-white bg-gray-400 rounded-md flex mx-auto "
              : "px-[15px] py-[5px] text-white bg-red-500 rounded-md flex mx-auto "
          }
        >
          {loading.success && (
            <Loading className="w-[20px] fill-current mr-[5px] h-[20px] " />
          )}
          {spamName ? "Hủy Spam" : "Spam"}
        </button>
      </div>
    </div>
  );
};

export default PublishItem;
