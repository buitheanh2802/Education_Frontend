import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import ChallengeCateApi from 'src/Apis/ChallengeCateApi'
import { Icon } from 'src/Components/Icon'
import { path } from 'src/Constants/'
import { UploadImage } from 'src/Helpers/'

const FormCateChallen = props => {
    const { isModal, setIsModals } = props;
    const [isUpload, setIsUpLoad] = useState(false)
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleOnChangeFile = async (e) => {
        setIsUpLoad(true);
        const formData = new FormData();
        formData.append("image", e.target.files[0])
        const { url, status } = await UploadImage(formData)
        if (!status) return
        setImage(url)
        setValue("avatar", url)
        setIsUpLoad(false)
    }

    const handleOnSubmit = async (dataForm) => {
    }

    if (!isModal) return null
    return createPortal(
        <>
            <div onClick={() => setIsModals(false)} className="fixed z-[99999] inset-0 bg-black bg-opacity-50"></div>
            <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[60vw]">
                <form  className="w-full h-full relative bg-white rounded">
                    <h3 className="text-xl font-medium p-5">Thêm mới loại thử thách</h3>
                    <div className="mx-5 mb-5 border border-gray-100 rounded shadow-sm px-5 pb-2">
                        <div className="filed my-3">
                            <label
                                className="block text-gray-600 text-[14px] mb-[5px]"
                                htmlFor="title">Tiêu đề <span className="text-red-500">*</span> </label>
                            <input
                                className="text-gray-800 block border border-gray-300 h-[40px] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                type="text"
                                id="title" />
                            <span className="text-[12px] text-red-500"></span>
                        </div>
                        <div className="flex gap-5">
                            <div className="filed my-3 flex-[2.5]">
                                <label
                                    className="block text-gray-600 text-[14px] mb-[5px]"
                                    htmlFor="title">Mô tả chi tiết <span className="text-red-500">*</span> </label>
                                <textarea
                                    className="text-gray-800 block border border-gray-300 h-[85%] rounded outline-none focus:border-blue-400 focus:shadow duration-300 w-full px-[10px]"
                                    type="text"
                                    id="title" ></textarea>
                                <span className="text-[12px] text-red-500"></span>
                            </div>
                            <div className="filed my-3 flex-1">
                                <label
                                    className="block text-gray-600 text-[14px] mb-[5px]"
                                    htmlFor="title">Ảnh <span className="text-red-500">*</span> </label>
                                <label className="w-full relative flex items-center justify-center text-gray-300 hover:bg-gray-200 hover:text-gray-400 cursor-pointer bg-gray-100 h-[150px] border rounded" htmlFor="fileImages">
                                    <input onChangeCapture={handleOnChangeFile} type="file" id="fileImages" hidden />
                                    {isUpload ? <Icon.Loading className="fill-current w-[50px] h-[50px]" /> : <Icon.UpLoad className="fill-current w-[50px] h-[50px]" />}
                                    {image && <img className="z-10 w-full h-full object-cover absolute rounded bg-white" src={image} />}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 px-5 py-2">
                        <button disabled={isLoading || isUpload ? true : false} className="h-[35px] px-5 border rounded bg-green-500 text-white text-sm flex gap-2 items-center hover:bg-green-600 shadow-sm hover:shadow-md" type="submit">{isLoading ? <Icon.Loading className="w-[15px] fill-current" /> : "Lưu"}</button>
                        <button disabled={isLoading || isUpload ? true : false} onClick={() => setIsModals(false)} className="h-[35px] px-5 border rounded text-sm flex gap-2 items-center shadow-sm hover:shadow-md" type="button">Huỷ</button>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default FormCateChallen
