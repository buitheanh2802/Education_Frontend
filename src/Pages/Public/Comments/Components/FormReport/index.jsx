import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import SpamApi from 'src/Apis/SpamApi'
import { Icon } from 'src/Components/Icon'

const FormReport = ({ isModel, setIsModel }) => {
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handelOnSubmit = async (data) => {
        try {
            setIsLoading(true)
            await SpamApi.reportSpamQuestion({
                ...data,
                referenceTo: isModel,
                type: "comments"
            })
            setIsModel(null)
            setIsLoading(false)
        } catch (error) {
            setIsModel(null)
            setIsLoading(false)
        }
    }

    if (!isModel) return null
    return createPortal(
        <>
            <div className='fixed  top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-70 z-[999] overflow-auto'>
                <div className='max-w-[450px] mx-[15px] mt-[15vh] sm:mx-auto mb-[50px] rounded-[2px] bg-white relative px-[15px]'>
                    <button onClick={() => setIsModel(null)} className='absolute top-[18px] right-[15px]'>
                        <Icon.Close className="fill-current w-[11px] text-gray-500 hover:text-gray-700" />
                    </button>
                    <p className='text-[18px] pt-[15px] text-gray-700'>Nội dung báo cáo</p>
                    <form onSubmit={handleSubmit(handelOnSubmit)} className='mt-[25px] text-[14px] text-gray-700 '>
                        <div className="mb-[18px]">
                            <label htmlFor="" className="text-[14px]">
                                <span className="text-red-500 ">*</span> Lý do báo cáo nội
                                dung này
                            </label>
                            <div className="mt-[10px] pl-[10px]">
                                <div className="py-[3px]">
                                    <input
                                        type="radio"
                                        id="spam1"
                                        {...register('reason', {
                                            required: {
                                                value: true,
                                                message: "Yêu cầu nhập trường này"
                                            }
                                        })}
                                        value="1"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="spam1" className="cursor-pointer pl-2">
                                        Nội dung rác
                                    </label>
                                </div>
                                <div className="py-[3px]">
                                    <input
                                        type="radio"
                                        id="spam2"
                                        {...register('reason', {
                                            required: {
                                                value: true,
                                                message: "Yêu cầu nhập trường này"
                                            }
                                        })}
                                        value="2"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="spam2" className="cursor-pointer pl-2">
                                        Vi phạm điều khoản
                                    </label>
                                </div>
                                <div className="py-[3px]">
                                    <input
                                        type="radio"
                                        id="spam3"
                                        {...register('reason', {
                                            required: {
                                                value: true,
                                                message: "Yêu cầu nhập trường này"
                                            }
                                        })}
                                        value="3"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="spam3" className="cursor-pointer pl-2">
                                        Quấy rối, đả kích
                                    </label>
                                </div>
                                <div className="py-[3px]">
                                    <input
                                        type="radio"
                                        id="spam4"
                                        {...register('reason', {
                                            required: {
                                                value: true,
                                                message: "Yêu cầu nhập trường này"
                                            }
                                        })}
                                        value="3"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="spam4" className="cursor-pointer pl-2">
                                        Vi phạm bản quyền
                                    </label>
                                </div>
                                <div className="py-[3px]">
                                    <input
                                        type="radio"
                                        id="spam5"
                                        {...register('reason', {
                                            required: {
                                                value: true,
                                                message: "Yêu cầu nhập trường này"
                                            }
                                        })}
                                        value="3"
                                        className="cursor-pointer"
                                    />
                                    <label htmlFor="spam5" className="cursor-pointer pl-2">
                                        Bản dịch chất lượng kém
                                    </label>
                                </div>
                                <span className='text-xs text-red-500'>{errors?.reason && errors?.reason?.message}</span>
                            </div>
                            <div className="mt-[20px]">
                                <textarea
                                    {...register('content', {
                                        required: {
                                            value: true,
                                            message: "Yêu cầu nhập trường này"
                                        }
                                    })}
                                    className="w-full px-[10px] text-[14px] py-[3px] border border-gray-400 rounded-[3px] focus:outline-none focus:border focus:border-blue-400 "
                                    placeholder="Nhận xét..."
                                ></textarea>
                                <span className='text-xs text-red-500'>{errors?.content && errors?.content?.message}</span>
                            </div>
                        </div>

                        <div className=" pb-[15px] flex justify-end">
                            <button className="flex items-center gap-2 border border-gray-400 text-gray-500 text-[14px] hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[15px] py-[3px]">
                                {isLoading && <Icon.Loading className="w-3 fill-current" />}
                                Báo cáo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default FormReport
