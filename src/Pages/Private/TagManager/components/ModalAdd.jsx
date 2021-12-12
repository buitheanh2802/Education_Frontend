import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { regex } from 'src/Constants/'
import TagAPi from "src/Apis/TagApi"
import swal from "sweetalert";
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const Modal = ({ isShowing, hide, onAdd }) => {
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });

    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = async (data) => {
        try {
            if (data) setLoading({ ...loading, success: true });
            const uploads = new FormData();
            uploads.append("name", data.name);
            uploads.append("photo", data.photo[0]);
            const tag = await TagAPi.addTag(uploads);
            onAdd();
            if (tag) setLoading({ ...loading, success: false });
            hide();
            swal("Thêm tag thành công!");
        } catch (error) {
            swal("Thêm tag thất bại");
        }
    }

    return (
        isShowing ? (
            <div className="w-[60%] mx-auto fixed left-[28%] top-[20%] bg-white shadow-lg border border-green-500 rounded z-10">
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
                                    onChangeCapture={() => { clearErrors('photo') }}
                                    {...register('photo', {
                                        required: regex.REQUIRED,
                                    })}
                                    className="outline-none px-[6px] w-[100%] py-[8px] border border-gray-500 rounded-[5px] my-[5px]"
                                />
                                <span className="text-red-500 text-[12px]">{errors?.photo && errors?.photo?.message}</span>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="flex bg-green-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-green-800 focus:border-blue-600"
                                    type="submit"
                                >
                                    {loading.success && (
                                        <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                                    )}
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