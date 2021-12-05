import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Icon } from 'src/Components/Icon';
import Loading from 'src/Components/Loading';
import { ActionOPostChallengCate } from 'src/Redux/Actions/ChallengeCate.action';

const FormExercise = ({ isShowModle, setIsShowModle }) => {
    const [actionLoading, setActionLoading] = useState(false);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { error } } = useForm()

    const handleOnSubMit = async (data) => {
        const { payload } = await dispatch(ActionOPostChallengCate(data));
        console.log(payload)
    }

    if (!isShowModle) return
    return createPortal(
        <>
            <div onClick={() => setIsShowModle(null)} className="fixed z-[99999] inset-0 bg-black bg-opacity-80"></div>
            <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[60vw]">
                <form onSubmit={handleSubmit(handleOnSubMit)} className="w-full h-full relative bg-white rounded">
                    <div className="flex justify-between p-[10px] border-b">
                        <p className="text-[20px] font-medium">Tạo thể loại thử thách</p>
                        <button onClick={() => setIsShowModle(null)}><Icon.Close className="w-[20px] h-[20px] hover:text-red-500 fill-current" /></button>
                    </div>
                    <div className="p-5">
                        <div className="mb-5">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="">Dạng thử thách</label>
                            <input
                                {...register('title', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                className="text-gray-800 block border border-gray-500 h-[40px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px] py-[5px]"
                                type="text" />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="">Mô tả dạng thử thách</label>
                            <input
                                {...register('avatar', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                type="file" />
                        </div>
                        <div className="mb-5">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="">Mô tả dạng thử thách</label>
                            <textarea
                                {...register('descriptions', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                className="text-gray-800 block border border-gray-500 h-[100px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px] py-[5px]"
                            ></textarea>
                        </div>
                        <div className="mt-[35px] flex justify-center">
                            <button
                                disabled={actionLoading}
                                className="bg-blue-500 text-white flex items-center gap-[5px] rounded h-[40px] px-[20px]">
                                {actionLoading
                                    ? <Loading className="fill-current w-[20px]" />
                                    : <Icon.Save className="fill-current w-[15px]" />}
                                Cập nhât dạng bài tập
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default FormExercise
