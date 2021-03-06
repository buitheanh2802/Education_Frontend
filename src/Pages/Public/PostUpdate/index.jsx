import React, { useState, useEffect, useMemo, useRef } from "react";
import CreatetableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Icon } from "src/Components/Icon";
import TagApi from "src/Apis/TagApi";
import ImageApi from "src/Apis/ImageApi";
import { useHistory, useParams } from "react-router-dom";
import Loading from "src/Components/Loading";
import ImageResize from "quill-image-resize-module-react";
import PostApi from "src/Apis/PostApi";
import { AlertMessage } from "src/Components/AlertMessage";
import LoadingIcon from "src/Components/Loading/LoadingIcon";

Quill.register("modules/imageResize", ImageResize);
const PostUpdate = () => {
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();
  const [content, setContent] = useState();
  //   const [boxBtn, setBoxBtn] = useState();
  const [tagId, setTagId] = useState([]);
  const [images, setImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [validateError, setValidateError] = useState([]);
  const editor = useRef();
  const animatedComponents = makeAnimated();
  const history = useHistory();
  const [postDetail, setPostDetail] = useState([]);
  const shortId = useParams();
  const [loading, setLoading] = useState(true);
  const [loadingIcon, setLoadingIcon] = useState(false);
  useEffect(() => {
    const listDetailPost = async (id) => {
      try {
        let { data: post } = await PostApi.getPost(
          id.split("-")[id.split("-").length - 1]
        );
        setPostDetail(post);
        setLoading(false);
        const tagspost = post?.data?.tags?.map((item) => ({
          value: item.name,
          label: item.name,
        }));

        setTitle(post?.data?.title);
        setContent(post?.data?.content);
        setTagId(tagspost);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    listDetailPost(shortId?.id);
    const listTags = async () => {
      try {
        const { data: tags } = await TagApi.getAll();
        const newData = tags?.data?.models?.map((item) => ({
          // ...item,
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
        const { data: images } = await ImageApi.getImage();
        setImages(images);
      } catch (error) {
        console.log(error);
      }
    };
    listImage();
  }, []);
  ////////////
  const tagItem = (e) => {
    setTagId([...e]);

    e.length <= 0 || e.length > 5
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
        const { data } = await ImageApi.addImage(formData);
        const url = data.data.photo.photoUrl;
        const targetEditor = editor.current.getEditor();
        const curentSpace = targetEditor.getSelection(true);
        targetEditor.insertEmbed(curentSpace.index, "image", url);
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
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
          [{ color: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      imageResize: {
        modules: ["Resize", "DisplaySize"],
        displaySize: true,
      },
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

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
      setLoadingIcon(true);
      let data = {
        title: title,
        tags: tagId.map((item) => {
          return item.value;
        }),
        content: content,
      };

      await PostApi.update(
        shortId?.id.split("-")[shortId?.id.split("-").length - 1],
        data
      );
      setLoadingIcon(false);
      await AlertMessage.fire({
        icon: "success",
        title: "Sửa bài viết thành công",
      });
    } catch (error) {
      await AlertMessage.fire({
        icon: "error",
        title: "Sửa bài viết thất bại",
      });
      console.log(error);
    }
  };
  const handelPostCancel = () => {
    history.push(`/posts/${shortId.id}`);
  };

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <Loading className="w-[40px] h-[40px] fill-current text-gray-500" />
      </div>
    );
  return (
    <div className="mt-[80px] container mx-auto ">
      <div className="">
        <input
          type="text"
          className="w-full px-[15px] py-[9px] bg-white rounded-[3px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tiêu đề câu hỏi..."
          value={title}
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
          {tagId !== undefined ? (
            <CreatetableSelect
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              value={tagId}
              options={tag}
              placeholder={"Gắn thẻ câu hỏi "}
              onChange={(e) => tagItem(e)}
            />
          ) : null}
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
                className="relative w-full justify-center bg-white text-blue-500 px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center hover:bg-blue-500 hover:text-white"
                onClick={() => handlerSubmit()}
                disabled={loadingIcon}
              >
                {loadingIcon && (
                  <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                )}
                <Icon.Pen className="fill-current w-[13px]" />
                <span className="text-[12x] md:text-[16x] ml-1">
                  Sửa bài viết
                </span>
              </button>
            </div>
          </div>
          <div className="m-0">
            <button
              onClick={() => handelPostCancel()}
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
          {content !== undefined ? (
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              defaultValue={content}
              onChange={Content}
              ref={editor}
              placeholder={"Nhập nội dung câu hỏi tại đây..."}
            ></ReactQuill>
          ) : null}
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
                {images?.data?.map((image) => {
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

export default PostUpdate;
