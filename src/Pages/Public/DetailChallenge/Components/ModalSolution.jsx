import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import SulotionApi from 'src/Apis/SulotionApi';
import { Icon } from 'src/Components/Icon';
import Loading from 'src/Components/Loading';

const ModalSolution = ({ isShowModle, setIsShowModle }) => {
    const history = useHistory();
    const { id } = useParams();
    const [actionLoading, setActionLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { challengeId: id }
    });
    const handleOnSubmit = async (data) => {
        try {
            setActionLoading(true)
            await SulotionApi.post(data)
            history.push(`/challenge/solution/${id}`);
            setActionLoading(false)
        } catch (error) {
            setActionLoading(false)
        }
    }

    if (!isShowModle) return
    return createPortal(
        <>
            <div onClick={() => setIsShowModle(false)} className="fixed z-[99999] inset-0 bg-black bg-opacity-80"></div>
            <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] lg:w-[60vw]">
                <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full h-full relative bg-white rounded">
                    <div className="flex justify-between p-[10px] border-b">
                        <p className="text-[20px] font-medium">Gửi giải pháp</p>
                        <button onClick={() => setIsShowModle(false)}><Icon.Close className="w-[20px] h-[20px] hover:text-red-500 fill-current" /></button>
                    </div>
                    <div className="w-full p-[20px]">
                        <div className="text-gray-500 font-extralight text-[15px] border-solid border-l-[3px] border-yellow-600 pl-[10px]">
                            <p>&bull; Đảm bảo bạn hoàn thành tất cả các câu chuyện của người dùng</p>
                            <p>&bull; Bao gồm cả URL demo và URL kho lưu trữ</p>
                            <p>&bull; Cố gắng giải thích cách tiếp cận của bạn một cách ngắn gọn</p>
                        </div>
                        <div className="my-[15px]">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="title">Tiêu đề <span className="text-red-500">*</span> </label>
                            <input
                                {...register('title', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                disabled={actionLoading}
                                className="text-gray-800 block border border-gray-500 h-[40px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                type="text"
                                id="title" />
                            <span className="text-[12px] text-red-500">{errors?.title && errors.title?.message}</span>
                        </div>
                        <div className="my-[15px]">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="descriptions">Mô tả <span className="text-red-500">*</span> </label>
                            <textarea
                                {...register('descriptions', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                disabled={actionLoading}
                                className="text-gray-800 block border border-gray-500 h-[100px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px] py-[5px]"
                                id="descriptions"></textarea>
                            <span className="text-[12px] text-red-500">{errors?.descriptions && errors.descriptions?.message}</span>
                        </div>
                        <div className="my-[15px]">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="url_demo">URL demo <span className="text-red-500">*</span> </label>
                            <input
                                {...register('demoUrl', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                disabled={actionLoading}
                                className="text-gray-800 block border border-gray-500 h-[40px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                type="text"
                                id="url_demo" />
                            <span className="text-[12px] text-red-500">{errors?.demoUrl && errors.demoUrl?.message}</span>
                        </div>
                        <div className="my-[15px]">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="url_repo">URL kho lưu trữ <span className="text-red-500">*</span> </label>
                            <input
                                {...register('repoUrl', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                disabled={actionLoading}
                                className="text-gray-800 block border border-gray-500 h-[40px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                type="text"
                                id="url_repo" />
                            <span className="text-[12px] text-red-500">{errors?.repoUrl && errors.repoUrl?.message}</span>
                        </div>
                        <div className="mt-[35px] flex justify-end">
                            <button
                                disabled={actionLoading}
                                className="bg-blue-500 text-white flex items-center gap-[5px] rounded h-[40px] px-[20px]">
                                {actionLoading
                                    ? <Loading className="fill-current w-[20px]" />
                                    : <Icon.Save className="fill-current w-[15px]" />}
                                Gửi
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default ModalSolution
