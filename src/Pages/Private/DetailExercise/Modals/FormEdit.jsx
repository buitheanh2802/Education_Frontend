import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import ChallengeApi from 'src/Apis/ChallengeApi'
import { Icon } from 'src/Components/Icon'
import { path } from 'src/Constants/'
import { UpLoadFile } from 'src/Helpers/'
import { UploadImage } from 'src/Helpers/'

const FormEdit = ({ isModals, setIsModals }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isUpImage, setIsUpImage] = useState(false)
    const [image, setImage] = useState(isModals.avatar)
    const history = useHistory();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: { ...isModals, level: Number(isModals.level) }
    });

    const handleOnSubmit = async (dataForm) => {
        try {
            setIsLoading(true)
            const { status } = await ChallengeApi.put(dataForm);
            if (!status) return
            history.push(path.SULOTION_MANAGER)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
        }
    }

    const handleOnChangeImage = async (e) => {
        setIsUpImage(true);
        setImage(null)
        const formData = new FormData();
        formData.append("image", e.target.files[0])
        const { url, status } = await UploadImage(formData)
        if (!status) return
        setImage(url)
        setValue('avatar', url)
        setIsUpImage(false)
    }

    const handleOnChangeFile = async (e) => {
        const formData = new FormData();
        formData.append("image", e.target.files[0])
        const { url, status } = await UpLoadFile(formData)
        if (!status) return
        setValue("resourceUrl", url)
    }

    if (!isModals) return null
    return (
        <>
            <div onClick={() => setIsModals(false)} className="fixed z-[99999] inset-0 bg-black bg-opacity-50"></div>
            <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw]  lg:w-[60vw]">
                <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full h-full relative bg-white rounded ">
                    <h3 className="text-xl font-medium p-5">Cập nhật thử thách</h3>
                    <div className="mx-5 mb-5 border border-gray-100 rounded shadow-sm px-5 pb-2  h-[70vh] overflow-auto">
                        <div className="filed my-5 grid grid-cols-2 gap-8">
                            <div>
                                <span className="block text-gray-600 text-[14px] mb-[5px]">Avatar <span className="text-red-500">*</span></span>
                                <label className="w-full relative flex items-center justify-center text-gray-300 hover:bg-gray-200 hover:text-gray-400 cursor-pointer bg-gray-100 h-[200px] border rounded" htmlFor="fileImages">
                                    <input onChangeCapture={handleOnChangeImage} type="file" id="fileImages" hidden />
                                    {isUpImage ? <Icon.Loading className="fill-current w-[50px] h-[50px]" /> : <Icon.Profile className="fill-current w-[50px] h-[50px]" />}
                                    {image && <img className="z-10 w-full h-full object-cover absolute rounded bg-white" src={image} />}
                                </label>
                                <span></span>
                            </div>
                        </div>
                        <div className="filed my-5">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="title">File thiết kế <span className="text-red-500">*</span> </label>
                            <input
                                onChangeCapture={handleOnChangeFile}
                                className="block w-full"
                                type="file"
                                id="title" />
                            <span className="text-[12px] text-red-500"></span>
                        </div>
                        <div className="filed my-5">
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
                                className="text-gray-800 block border border-gray-300 h-[40px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                type="text"
                                id="title" />
                            <span className="text-[12px] text-red-500">{errors?.title && errors?.title?.message}</span>
                        </div>
                        <div className="filed my-5">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="title">Link figma<span className="text-red-500">*</span> </label>
                            <input
                                {...register('figmaUrl', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                className="text-gray-800 block border border-gray-300 h-[40px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                type="text"
                                id="title" />
                            <span className="text-[12px] text-red-500">{errors?.figmaUrl && errors?.figmaUrl?.message}</span>
                        </div>
                        <div className="filed my-5">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="title">Độ khó<span className="text-red-500">*</span> </label>
                            <div className="flex gap-8 text-sm text-gray-500">
                                <label className="flex items-center gap-2 cursor-pointer" htmlFor="lv1"><input
                                    {...register('level', {
                                        required: {
                                            value: true,
                                            message: "Yêu cầu nhập trường này"
                                        }
                                    })}
                                    value="1"
                                    className="cursor-pointer" type="radio" id="lv1" /> Cấp 1</label>
                                <label className="flex items-center gap-2 cursor-pointer" htmlFor="lv2"><input
                                    {...register('level', {
                                        required: {
                                            value: true,
                                            message: "Yêu cầu nhập trường này"
                                        }
                                    })}
                                    value="2"
                                    className="cursor-pointer" type="radio" id="lv2" /> Cấp 2</label>
                                <label className="flex items-center gap-2 cursor-pointer" htmlFor="lv3"><input
                                    {...register('level', {
                                        required: {
                                            value: true,
                                            message: "Yêu cầu nhập trường này"
                                        }
                                    })}
                                    value="3"
                                    className="cursor-pointer" type="radio" id="lv3" /> Cấp 3</label>
                                <label className="flex items-center gap-2 cursor-pointer" htmlFor="lv4"><input
                                    {...register('level', {
                                        required: {
                                            value: true,
                                            message: "Yêu cầu nhập trường này"
                                        }
                                    })}
                                    value="4"
                                    className="cursor-pointer" type="radio" id="lv4" /> Cấp 4</label>
                                <label className="flex items-center gap-2 cursor-pointer" htmlFor="lv5"><input
                                    {...register('level', {
                                        required: {
                                            value: true,
                                            message: "Yêu cầu nhập trường này"
                                        }
                                    })}
                                    value="5"
                                    className="cursor-pointer" type="radio" id="lv5" /> Cấp 5</label>
                            </div>
                            <span className="text-[12px] text-red-500">{errors?.level && errors?.level?.message}</span>
                        </div>
                        <div className="filed my-5">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="title">Mô tả <span className="text-red-500">*</span> </label>
                            <textarea

                                {...register('descriptions', {
                                    required: {
                                        value: true,
                                        message: "Yêu cầu nhập trường này"
                                    }
                                })}
                                className="text-gray-800 block border border-gray-300 h-[100px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                type="text"
                                id="title" ></textarea>
                            <span className="text-[12px] text-red-500">{errors?.descriptions && errors?.descriptions?.message}</span>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 px-5 py-2">
                        <button className="h-[35px] px-5 border rounded bg-green-500 text-white text-sm flex gap-2 items-center hover:bg-green-600 shadow-sm hover:shadow-md" type="submit">{isLoading ? <Icon.Loading className="w-[15px] fill-current" /> : "Lưu"}</button>
                        <button onClick={() => setIsModals(false)} className="h-[35px] px-5 border rounded text-sm flex gap-2 items-center shadow-sm hover:shadow-md" type="button">Huỷ</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormEdit
