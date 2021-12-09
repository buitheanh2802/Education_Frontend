import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice"
import { path, regex } from 'src/Constants/'
import TagAPi from "src/Apis/TagApi"
import swal from "sweetalert";

const Modal = ({ isShowing, hide }) => {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = async (data) => {
        try {
            const uploads = new FormData();
            uploads.append("name", data.name);
            // uploads.append()
            // await TagAPi.addTag(uploads);
            // swal("Thêm tag thành công!");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        isShowing ? (
            <div className="w-[60%] mx-auto fixed left-[30%] top-[20%] bg-white shadow-lg border border-green-500 rounded z-10">
                <div className="px-[20px] py-[20px]">
                    <div className="flex justify-between border-b border-gray-500">
                        <span className="mb-[20px] font-bold text-green-500 text-[26px]">Thêm tag</span>
                        <button type="button" className="mb-[20px] text-[26px] hover:text-red-500" data-dismiss="modal" aria-label="Close" onClick={hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="py-[5px]">
                                <p className="text-gray-800 text-[15px] py-[5px]">
                                    <span className="text-red-600 font-bold mr-[5px]">*</span>
                                    Tên tag:
                                </p>
                                <input type="text"
                                    onChangeCapture={() => { clearErrors('name') }}
                                    {...register('name', {
                                        required: regex.REQUIRED,
                                    })}
                                    className="outline-none px-[6px] w-[100%] py-[8px] border border-gray-500 rounded-[5px] my-[5px]"
                                />
                                <span className="text-red-500 text-[12px]">{errors?.name && errors?.name?.message}</span>
                            </div>
                            <div className="py-[5px]">
                                <p className="text-gray-800 text-[15px] py-[5px]">
                                    <span className="text-red-600 font-bold mr-[5px]">*</span>
                                    Ảnh:
                                </p>
                                <input type="file"
                                    onChangeCapture={() => { clearErrors('avatar') }}
                                    {...register('avatar', {
                                        required: regex.REQUIRED,
                                    })}
                                    className="outline-none px-[6px] w-[100%] py-[8px] border border-gray-500 rounded-[5px] my-[5px]"
                                />
                                <span className="text-red-500 text-[12px]">{errors?.avatar && errors?.avatar?.message}</span>
                            </div>
                            <div className="text-right">
                                <button
                                    className="bg-green-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-green-800 focus:border-blue-600"
                                    type="submit"
                                >
                                    Thêm tag
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) : null
    )
};

export default Modal;