import React, { useState } from "react";
import LoadingIcon from "src/Components/Loading/LoadingIcon";
import { timeFormatter } from "src/Helpers/Timer";
import { useSelector } from "react-redux";
import ContactApi from "src/Apis/ContactApi";

const PublishItem = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contactDetail, setContactDetail] = useState([]);

  // _props
  const {
    title,
    content,
    index,
    createAt,
    name,
    id,
    email,
    feedback,
    fullName,
    handelRemoveContact,
    handelFeedbackContact,
  } = props;
  // selector
  const { profile } = useSelector((state) => state.Auth);
  // state
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });

  const handelContactDetail = async (id) => {
    setIsModalVisible(true);
    const { data: contactDetail } = await ContactApi.getContactDetail(id);
    // console.log(contactDetail?.data);
    setContactDetail(contactDetail?.data);
    // console.log(id);
  };

  const handleCancelBox = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        className="nav bg-white border-b  text-[14px] p-[10px] grid
    grid-cols-[60px,1.5fr,0.7fr,0.9fr,0.6fr,1.2fr] "
      >
        <div className="font-medium">{index}</div>
        <div onClick={() => handelContactDetail(id)} className=" mr-[20px] ">
          <p className="font-medium text-blue-500 underline cursor-pointer">
            {title}
          </p>
        </div>

        <div className="">
          <p className="text-blue-500 underline pr-[10px]">{name}</p>
        </div>
        <div className="">
          <p className="text-blue-500 underline pr-[10px]">{email}</p>
        </div>
        <div className="text-[13px] ">{timeFormatter(createAt)}</div>

        <div className="flex items-center justify-center">
          <button
            onClick={() => handelFeedbackContact(id)}
            className={
              feedback
                ? "px-[15px] text-[14px]  py-[3px] mr-[5px] text-white bg-green-500 rounded-md  "
                : "px-[15px] text-[14px]  py-[3px] mr-[5px] text-white bg-blue-500 rounded-md "
            }
          >
            {loading.success && (
              <LoadingIcon className="w-[20px]  fill-current mr-[5px] h-[20px] " />
            )}
            {feedback ? <span>{fullName}: ???? tr??? l???i</span> : "Tr??? l???i"}
          </button>
          <button
            onClick={() => handelRemoveContact(id)}
            className="px-[15px] text-[14px]  py-[3px] text-white bg-red-500 rounded-md  "
          >
            {loading.success && (
              <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
            )}
            X??a
          </button>
        </div>
      </div>
      <div
        className={
          isModalVisible
            ? "fixed z-[99999] inset-0 bg-black bg-opacity-10"
            : "hidden"
        }
      >
        <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[60vw]">
          <div
            action=""
            class="w-full h-full relative bg-white rounded px-[30px]"
          >
            <p className="text-[18px] font-medium pt-[15px] text-gray-700">
              Chi ti???t li??n h???:
            </p>
            <div className="mt-[25px] text-[14px] text-gray-700 ">
              <div className="">
                <p className="text-[16px] font-medium">Ti??u ?????:</p>
                <p className="ttext-[14px] text-gray-600">
                  - {contactDetail?.title}
                </p>
              </div>
              <div className="mt-[15px]">
                <p className="text-[16px] font-medium">N???i dung:</p>
                <p className="ttext-[14px] text-gray-600">
                  - {contactDetail?.content}
                </p>
              </div>
              <div className="mt-[15px]">
                <p className="font-medium text-[16px]">
                  Ng?????i g???i:{" "}
                  <span className="text-gray-600 text-[14px] font-normal">
                    {contactDetail?.name}
                  </span>
                </p>
              </div>
              <div className="mt-[15px]">
                <p className="font-medium text-[16px]">
                  Email:{" "}
                  <span className="text-gray-600 text-[14px] font-normal">
                    {contactDetail?.email}
                  </span>
                </p>
              </div>
              <div className="mt-[15px]">
                <p className="font-medium text-[16px]">
                  S??? ??i???n tho???i:{" "}
                  <span className="text-gray-600 text-[14px] font-normal">
                    {contactDetail?.phone}
                  </span>
                </p>
              </div>
            </div>

            <div className=" pb-[15px] flex justify-end">
              <button
                onClick={() => handleCancelBox()}
                className=" border border-gray-400 text-gray-500 text-[14px] hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[15px] py-[3px]"
              >
                ????ng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishItem;
