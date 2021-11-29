import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "src/Components/Loading";
import { timeFormatter } from "src/Helpers/Timer";
import { useSelector } from "react-redux";
import PostAPI from "../../../../Apis/PostApi";
import QuestionApi from "src/Apis/QuestionApi";

const PublishItem = (props) => {
  // _props
  const { title, content, index, createBy, createAt, _id, spam } = props;
  // selector
  const { profile } = useSelector((state) => state.Auth);
  // state
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });
  const [markSpam, setMarkSpam] = useState(true);
  const [questionDetail, setQuestionDetail] = useState([]);

  useEffect(() => {
    const list = async (id) => {
      try {
        let { data: question } = await QuestionApi.getId(
          id.split("-")[id.split("-").length - 1]
        );
        setQuestionDetail(question);
      } catch (error) {
        setLoading(false);

        console.log(error);
      }
    };
    list(_id);
  }, []);

  const onMarkSpam = async (id) => {
    const { data } = await QuestionApi.getId(id);
    console.log(data);
    // console.log(profile);
    // try {
    //     if (boolean) setLoading({ ...loading, success: true });
    //     else setLoading({ ...loading, error: true });
    //     const request = {
    //         _id: _id,
    //         data: {
    //             spam: boolean
    //         }
    //     }
    //     const response = await QuestionApi.questionSpam(request);

    // } catch (error) {
    //     console.log(error);
    // }
    // if (boolean) setLoading({ ...loading, success: true });
    // else setLoading({ ...loading, error: true });
  };
  return (
    // <></>
    <div
      className="nav bg-white border-b  text-[15px] p-[10px] grid
    grid-cols-[60px,1fr,2.5fr,0.5fr,0.5fr,1.2fr] "
    >
      <div className="font-medium ">{index}</div>
      <div className="font-medium mr-[30px] text-blue-500 underline ">
        <Link>{title}</Link>
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
      <button onClick={() => onMarkSpam(_id)} className="bg-red-500"></button>
      {/* {!published.user ? (
        <div className="mx-auto flex ">
          <button
            disabled={loading.success}
            onClick={() => onPublish(true)}
            className="h-[35px] px-[10px] mb-[5px] flex items-center py-[5px] bg-blue-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md "
          >
            {loading.success && (
              <Loading className="w-[20px] fill-current mr-[5px] h-[20px] " />
            )}
            Duyệt
          </button>
        </div>
      ) : (
        <Link className="mx-auto block">
          {published.isConfirm ? (
            <span className="block py-[10px] bg-green-400 px-[10px] rounded-md text-white ">
              Phê duyệt bởi : {published.user.fullname}
            </span>
          ) : (
            <span className="block py-[10px] bg-gray-400 px-[10px] rounded-md text-white ">
              Hủy bỏ bởi : {published.user.fullname}
            </span>
          )}
        </Link>
      )} */}
    </div>
  );
};

export default PublishItem;
