import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { regex } from "src/Constants/";
import TagApi from "src/Apis/TagApi";
import swal from "sweetalert";
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const ModalEdit = ({ isShowingEdit, hide, name, id, slug, photo, onEdit }) => {
  const [loading, setLoading] = useState({
    error: false,
    success: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    getValues,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValue: {
      name: name,
      photo: photo,
    },
  });

  const onSubmit = async (data) => {
    try {
      if (data) setLoading({ ...loading, success: true });
      const uploads = new FormData();
      uploads.append("name", data.name);
      if (data.photo) {
        uploads.append("photo", data.photo[0]);
      }
      const response = await TagApi.editTag(slug, uploads);
      if (response) setLoading({ ...loading, success: false });
      onEdit();
      hide();
      swal("Sửa tag thành công!");
    } catch (error) {
      setLoading({ ...loading, success: false });
      console.log(error);
      hide();
      swal("Sửa tag thất bại!");
    }
  };

  return isShowingEdit ? (
    <>
      <div
        onClick={() => hide()}
        className="fixed z-[99999] inset-0 bg-black bg-opacity-80"
      ></div>
      <div className="w-[60%] fixed z-[99999] left-[20%] top-[20%] bg-white shadow-lg border border-green-500 rounded z-10">
        <div className="px-[20px] py-[20px]">
          <div className="flex justify-between border-b border-gray-500">
            <span className="mb-[20px] font-bold text-green-500 text-[26px]">
              Sửa tag
            </span>
            <button
              type="button"
              className="mb-[20px] text-[26px] hover:text-red-500"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="py-[5px]">
                <p className="text-gray-800 text-[15px] py-[5px]">
                  <span className="text-red-600 font-bold mr-[5px]">*</span>
                  Sửa tag:
                </p>
                <input
                  type="text"
                  defaultValue={name}
                  onChangeCapture={() => {
                    clearErrors("name");
                  }}
                  {...register("name", {
                    required: regex.REQUIRED,
                  })}
                  className="outline-none px-[6px] w-[100%] py-[8px] border border-gray-500 rounded-[5px] my-[5px]"
                />
                <span className="text-red-500 text-[12px]">
                  {errors?.name && errors?.name?.message}
                </span>
              </div>
              <div className="py-[5px]">
                <p className="text-gray-800 text-[15px] py-[5px]">
                  <span className="text-red-600 font-bold mr-[5px]">*</span>
                  Ảnh:
                </p>
                <input
                  type="file"
                  onChangeCapture={() => {
                    clearErrors("photo");
                  }}
                  {...register("photo")}
                  className="outline-none px-[6px] w-[100%] py-[8px] border border-gray-500 rounded-[5px] my-[5px]"
                />
                {photo ? (
                  <img
                    className="mx-auto w-[100px] rounded-full"
                    src={photo}
                    alt="Avatar"
                  />
                ) : (
                  <div> </div>
                )}
                <span className="text-red-500 text-[12px]">
                  {errors?.photo && errors?.photo?.message}
                </span>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex bg-green-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-green-800 focus:border-blue-600"
                >
                  {loading.success && (
                    <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                  )}
                  Sửa tag
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default ModalEdit;
