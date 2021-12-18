import React, { useState, useEffect, useRef } from "react";
import CreatetableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { Icon } from "src/Components/Icon";
import TagApi from "src/Apis/TagApi";
import ImageApi from "src/Apis/ImageApi";
import QuestionApi from "src/Apis/QuestionApi";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import Editor from "../Commons/Editor";
import { useSelector } from "react-redux";
import UserApi from "src/Apis/UserApi";
const QuestionsCreate = () => {
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();
  const [content, setContent] = useState();
  const [boxBtn, setBoxBtn] = useState();
  const [tagId, setTagId] = useState([]);
  const [images, setImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [validateError, setValidateError] = useState([]);
  const [render, setRender] = useState(false);
  const editor = useRef();
  const animatedComponents = makeAnimated();
  const history = useHistory();
  const { profile } = useSelector((state) => state.Auth);
  useEffect(() => {
    setRender(false);
    const listTags = async () => {
      try {
        const { data: tags } = await TagApi.getAll();
        const newData = tags?.data?.models?.map((item) => ({
          ...item,
          value: item.name,
          label: item.name,
        }));
        setTag(newData);
      } catch (error) {
        console.log(error);
      }
    };
    listTags();
    const listImage = async () => {
      try {
        const {
          data: { data },
        } = await ImageApi.getImage();
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    listImage();
  }, [render]);

  const tagItem = (e) => {
    const arrTag = e.map((item) => {
      return item.value;
    });
    setTagId(arrTag);

    arrTag.length <= 0 || arrTag.length > 5
      ? validateError.findIndex((i) => i.type === "tag") === -1 &&
        setValidateError([
          ...validateError,
          {
            type: "tag",
            message: "Gắn thẻ câu hỏi ít nhất 1 thẻ và không quá 5 thẻ",
          },
        ])
      : setValidateError(validateError.filter((i) => i.type !== "tag"));
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);

    !e.target.value
      ? validateError.findIndex((i) => i.type === "t") === -1 &&
        setValidateError([
          ...validateError,
          {
            type: "t",
            message: "Tiêu đề không được để trống",
          },
        ])
      : setValidateError(validateError.filter((i) => i.type !== "t"));
  };

  const validateContent = [
    "<p><br></p>",
    "<h1><br></h1>",
    "<h2><br></h2>",
    "<h3><br></h3>",
    "<h4><br></h4>",
    "<h5><br></h5>",
    "<h6><br></h6>",
  ];
  const Content = (e) => {
    if (!e || validateContent.indexOf(e) !== -1) {
      validateError.findIndex((i) => i.type === "c") === -1 &&
        setValidateError([
          ...validateError,
          {
            type: "c",
            message: "Nội dung không được để trống",
          },
        ]);
    } else {
      setValidateError(validateError.filter((i) => i.type !== "c"));
    }

    setContent(e);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const imageHandler = () => {
    showModal();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onUploadImage = (e) => {
    var formData = new FormData();
    formData.append("image", e.target.files[0]);

    const CallApi = async () => {
      try {
        const {
          data: { data },
        } = await ImageApi.addImage(formData);
        const url = data.photo.photoUrl;
        const targetEditor = editor.current.getEditor();
        const curentSpace = targetEditor.getSelection(true);
        targetEditor.insertEmbed(curentSpace.index, "image", url);
        setImages([...images, data]);
        setIsModalVisible(false);
      } catch (error) {
        console.log(error);
      }
    };
    CallApi();
  };
  const chooseImage = (id) => {
    const photo = images?.data.find((a) => a._id === id);
    const photoUrl = photo?.photo?.photoUrl;
    const targetEditor = editor.current.getEditor();
    const curentSpace = targetEditor.getSelection(true);
    targetEditor.insertEmbed(curentSpace.index, "image", photoUrl);
    setIsModalVisible(false);
  };

  ///react-select
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    // timerProgressBar: true,
    background: "#EFF6FF",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const handlerSubmit = async (data) => {
    try {
      var errors = [];
      if (!title) {
        errors = [
          ...errors,
          {
            type: "t",
            message: "Tiêu đề không được để trống",
          },
        ];
      }
      if (tagId.length <= 0 || tagId.length > 5) {
        errors = [
          ...errors,
          {
            type: "tag",
            message: "Gắn thẻ câu hỏi ít nhất 1 thẻ và không quá 5 thẻ",
          },
        ];
      }

      if (!content || validateContent.indexOf(content) !== -1) {
        errors = [
          ...errors,
          {
            type: "c",
            message: "Nội dung không được để trống",
          },
        ];
      }

      if (errors.length !== 0) {
        setValidateError(errors);
        return;
      }

      let data = {
        title: title,
        tags: tagId,
        content: content,
      };
      await QuestionApi.add(data);
      const dataPoint = {
        type: "up",
        points: 5,
      };
      await UserApi.pointUser(profile?.username, dataPoint);
      await Toast.fire({
        icon: "success",
        title: "Đăng câu hỏi thành công",
      });
      history.push("/questions");
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "Đăng câu hỏi thất bại",
      });
    }
  };

  const handelQuestionCancel = () => {
    history.push("/questions");
  };

  return (
    <div className="mt-[80px] container mx-auto ">
      <div className="">
        <input
          type="text"
          className="w-full px-[15px] py-[9px] bg-white rounded-[3px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tiêu đề câu hỏi..."
          onChange={(e) => handleChangeTitle(e)}
        />
        <span className="text-red-500 text-[12px]">
          {validateError.length !== 0 &&
            validateError.findIndex((i) => i.type === "t") !== -1 &&
            validateError[validateError.findIndex((i) => i.type === "t")]
              .message}
        </span>
      </div>
      <div className="mt-[20px] grid grid-cols-1  lg:grid-cols-[3fr,1fr] gap-5">
        <div className="">
          <CreatetableSelect
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={tag}
            placeholder={"Gắn thẻ câu hỏi "}
            onChange={(e) => tagItem(e)}
          />
          <span className="text-red-500 text-[12px]">
            {validateError.length !== 0 &&
              validateError.findIndex((i) => i.type === "tag") !== -1 &&
              validateError[validateError.findIndex((i) => i.type === "tag")]
                .message}
          </span>
        </div>

        <div className="grid  grid-cols-[5fr,2fr] gap-3">
          <div className="m-0">
            <div className="relative">
              <button
                className={
                  boxBtn
                    ? "relative w-full justify-center bg-blue-500 text-white px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center"
                    : "relative w-full justify-center bg-white text-blue-500 px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center hover:bg-blue-500 hover:text-white"
                }
                onClick={() => handlerSubmit()}
              >
                <Icon.Pen className="fill-current w-[13px]" />
                <span className="text-[12x] md:text-[16x] ml-1">
                  Xuất bản câu hỏi
                </span>
              </button>
            </div>
          </div>
          <div className="m-0">
            <button
              onClick={() => handelQuestionCancel()}
              className="w-full justify-center bg-white text-red-500 px-3  py-[8px] border border-red-500 rounded-[3px] flex items-center hover:bg-red-500 hover:text-white"
            >
              <Icon.Close className="fill-current w-[13px]" />
              <span className="text-[12x] md:text-[16x] ml-1">Hủy</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[20px] mb-[40px]">
        <div className="text-editor">
          <Editor
            onChange={Content}
            editorInstance={editor}
            imageHandler={imageHandler}
          />
        </div>
        <div
          className={
            isModalVisible
              ? "fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-70 z-[999999] overflow-auto"
              : "hidden"
          }
        >
          <div className="max-w-[650px] mx-[15px] mt-[15vh] sm:mx-auto mb-[50px] rounded-[2px] bg-white relative px-[15px]">
            <button
              onClick={() => handleCancel()}
              className="absolute top-[18px] right-[15px] "
            >
              <Icon.Close className="fill-current w-[11px] text-gray-500 hover:text-gray-700 " />
            </button>
            <p className="text-[20px] pt-[10px] text-gray-700">Thêm ảnh</p>
            <div className="mt-[25px] text-[14px] text-gray-700 ">
              <label className="cursor-pointer py-[15px] text-center leading-[50px] block border-dashed border-[1px] border-gray-400">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => onUploadImage(e)}
                />
                <Icon.UpLoad className="fill-current w-[45px] text-gray-600 mx-auto" />
                Kéo và thả tập tin ở đây hoặc nhấp chuột để tải tập tin lên
              </label>
            </div>
            <div className="mt-[40px]">
              <p className="text-[18px] text-gray-500">Ảnh của bạn</p>
              <div
                className="grid grid-cols-2 md:grid-cols-6 gap-x-[40px] gap-y-[20px] mt-[20px] overflow-y-auto "
                style={{ maxHeight: "calc(80vh - 250px)" }}
              >
                {images?.map((image) => {
                  return (
                    // <div className="w-full" key={image._id}>
                    <img
                      key={image?._id}
                      src={image?.photo?.photoUrl}
                      alt=""
                      onClick={() => chooseImage(image?._id)}
                      className="cursor-pointer"
                    />
                    // </div>
                  );
                })}
              </div>
            </div>
            <div className="pt-[30px] pb-[15px] flex justify-end">
              <button
                onClick={() => handleCancel()}
                className="border border-gray-400 text-gray-500 hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[20px] py-[5px]"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
        <span className="text-red-500 text-[12px]">
          {validateError.length !== 0 &&
            validateError.findIndex((i) => i.type === "c") !== -1 &&
            validateError[validateError.findIndex((i) => i.type === "c")]
              .message}
        </span>
      </div>
    </div>
  );
};

export default QuestionsCreate;
