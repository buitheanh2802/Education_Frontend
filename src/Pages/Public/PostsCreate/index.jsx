import React, { useState, useEffect, useRef } from "react";
import CreatetableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { Icon } from "src/Components/Icon";
import TagApi from "src/Apis/TagApi";
import PostApi from "src/Apis/PostApi";
import ImageApi from "src/Apis/ImageApi";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Editor from "../Commons/Editor";
import { AlertMessage } from "src/Components/AlertMessage";
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const PostsCreate = () => {
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();
  const [content, setContent] = useState();
  const [boxBtn, setBoxBtn] = useState();
  const [tagId, setTagId] = useState([]);
  const [images, setImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [validateError, setValidateError] = useState([]);
  const editor = useRef();
  const animatedComponents = makeAnimated();
  const history = useHistory();
  const [loadingIcon, setLoadingIcon] = useState(false);
  useEffect(() => {
    // register quill modules

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
  }, []);

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
            message: "G???n th??? b??i vi???t ??t nh???t 1 th??? v?? kh??ng qu?? 5 th???",
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
            message: "Ti??u ????? kh??ng ???????c ????? tr???ng",
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
            message: "N???i dung kh??ng ???????c ????? tr???ng",
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

  const handlerSubmit1 = async (data) => {
    try {
      var errors = [];
      if (!title) {
        errors = [
          ...errors,
          {
            type: "t",
            message: "Ti??u ????? kh??ng ???????c ????? tr???ng",
          },
        ];
      }
      if (tagId.length <= 0 || tagId.length > 5) {
        errors = [
          ...errors,
          {
            type: "tag",
            message: "G???n th??? b??i vi???t ??t nh???t 1 th??? v?? kh??ng qu?? 5 th???",
          },
        ];
      }

      if (!content || validateContent.indexOf(content) !== -1) {
        errors = [
          ...errors,
          {
            type: "c",
            message: "N???i dung kh??ng ???????c ????? tr???ng",
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
        isDraft: true,
      };

      await PostApi.add(data);
      await AlertMessage.fire({
        icon: "success",
        title: "????ng b??i vi???t th??nh c??ng",
      });
      history.push("/posts");
    } catch (error) {
      await AlertMessage.fire({
        icon: "error",
        title: "????ng b??i vi???t th???t b???i",
      });
      console.log(error);
    }
  };
  const handlerSubmit2 = async () => {
    try {
      var errors = [];
      if (!title) {
        errors = [
          ...errors,
          {
            type: "t",
            message: "Ti??u ????? kh??ng ???????c ????? tr???ng",
          },
        ];
      }
      if (tagId.length <= 0 || tagId.length > 5) {
        errors = [
          ...errors,
          {
            type: "tag",
            message: "G???n th??? b??i vi???t ??t nh???t 1 th??? v?? kh??ng qu?? 5 th???",
          },
        ];
      }

      if (!content || validateContent.indexOf(content) !== -1) {
        errors = [
          ...errors,
          {
            type: "c",
            message: "N???i dung kh??ng ???????c ????? tr???ng",
          },
        ];
      }

      if (errors.length !== 0) {
        setValidateError(errors);
        return;
      }
      setLoadingIcon(true);

      let data = {
        title: title,
        tags: tagId,
        content: content,
        isDraft: false,
      };
      await PostApi.add(data);
      setLoadingIcon(false);
      await AlertMessage.fire({
        icon: "success",
        title: "????ng b??i vi???t th??nh c??ng, ?????i ph?? duy???t",
      });
      history.push("/posts");
    } catch (error) {
      await AlertMessage.fire({
        icon: "error",
        title: "????ng b??i vi???t th???t b???i",
      });
      console.log(error);
    }
  };
  const handelPostCancel = () => {
    history.push("/posts");
  };
  return (
    <div className="mt-[80px] container mx-auto ">
      <div className="">
        <input
          type="text"
          className="w-full px-[15px] py-[9px] bg-white rounded-[3px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ti??u ????? b??i vi???t..."
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
            placeholder={"G???n th??? b??i vi???t "}
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
                    ? "relative  w-full justify-center bg-blue-500 text-white px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center"
                    : "relative w-full justify-center bg-white text-blue-500 px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center hover:bg-blue-500 hover:text-white"
                }
                // onClick={() => setBoxBtn(!boxBtn)}
                onClick={() => handlerSubmit2()}
                disabled={loadingIcon}
              >
                {loadingIcon && (
                  <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                )}
                <Icon.Pen className="fill-current w-[13px]" />
                <span className="text-[12x] md:text-[16x] ml-1">
                  Xu???t b???n b??i vi???t
                </span>
              </button>
              {/* <ul
                className={
                  boxBtn
                    ? "absolute z-10 text-center w-full mt-[10px] box_btn bg-white top-full left-0 rounded-[3px]"
                    : "hidden"
                }
              >
                <li
                  className="py-3 px-3 text-[12x] flex justify-center items-center md:text-[16x] text-gray-600 cursor-pointer border-b border-gray-100 hover:bg-blue-100"
                  onClick={() => handlerSubmit1()}
                >
                  <Icon.HeartFilled className="fill-current w-[13px]" />
                  <span className="ml-2">L??u th??nh b???n nh??p</span>
                </li>
                <li
                  className="py-3 px-3 text-[12x] md:text-[16x] justify-center items-center text-gray-600 cursor-pointer hover:bg-blue-100 flex"
                  onClick={() => handlerSubmit2()}
                >
                  <Icon.Pen className="fill-current w-[13px]" />
                  <span className="ml-2"> Xu???t b???n b??i ngay??????</span>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="m-0">
            <button
              onClick={() => handelPostCancel()}
              className="w-full justify-center bg-white text-red-500 px-3  py-[8px] border border-red-500 rounded-[3px] flex items-center hover:bg-red-500 hover:text-white"
            >
              <Icon.Close className="fill-current w-[13px]" />
              <span className="text-[12x] md:text-[16x] ml-1">H???y</span>
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
            <p className="text-[20px] pt-[10px] text-gray-700">Th??m ???nh</p>
            <div className="mt-[25px] text-[14px] text-gray-700 ">
              <label className="cursor-pointer py-[15px] text-center leading-[50px] block border-dashed border-[1px] border-gray-400">
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => onUploadImage(e)}
                />
                <Icon.UpLoad className="fill-current w-[45px] text-gray-600 mx-auto" />
                K??o v?? th??? t???p tin ??? ????y ho???c nh???p chu???t ????? t???i t???p tin l??n
              </label>
            </div>
            <div className="mt-[40px]">
              <p className="text-[18px] text-gray-500">???nh c???a b???n</p>
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
                H???y
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

export default PostsCreate;
