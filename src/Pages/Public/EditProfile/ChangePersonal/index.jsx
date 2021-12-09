import React, { useState, useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { setLoading } from "src/Redux/Slices/Loading.slice"
import { Icon } from "src/Components/Icon"
import ErrorMessage from 'src/Components/ErrorMessage'
import SuccessMessage from 'src/Components/SuccessMessage'
import { path, regex } from 'src/Constants/'
import ResponseMessage from 'src/Constants/ResponseMessage'
import AuthApi from "src/Apis/AuthApi"

const ChangePersonal = ({ profile }) => {
    const history = useHistory();
    const [response, setResponse] = useState({ isLoading: false, error: null, message: null })
    const { isLoading, error, message } = response;
    const [profileMe, setProfMe] = useState([]);
    const { register, handleSubmit, reset, formState: { errors }, clearErrors, getValues } = useForm({
        defaultValue: {
            fullname: profile.fullname,
            avatar: profile.avatar.avatarUrl,
            email: profile.email,
            birthday: profile.birthday,
            address: profile.address,
            description: profile.description,
            hobbies: profile.hobbies,
            skills: profile.skills
        }
    });

    const onSubmit = async (data) => {
        try {
            // setResponse({ ...response, isLoading: true })
            // await AuthApi.changeInfo(data);
            // setResponse({
            //     ...response,
            //     message: "Cập nhật thông tin thành công",
            //     isLoading: false
            // })
            console.log(data);
        } catch (error) {
            setResponse({
                ...response,
                error: ResponseMessage(error?.response?.data?.message[0]),
                isLoading: false
            })
        }
    }


    return (
        <>
            <div className="px-[20px] lg:px-[50px] pt-[15px] pb-[50px]">
                <p className="text-gray-800 font-bold text-[23px]">Thông tin cá nhân</p>
                <p className="text-gray-800 text-[15px] py-[10px]">
                    Quản lý thông tin cá nhân của bạn.
                </p>
                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {error && <ErrorMessage message={error} />}
                        {message && <SuccessMessage message={message} />}
                        <div className="mx-auto w-[220px]">
                            {profile?.avatar?.avatarUrl ?
                                <img className="mx-auto rounded-full" src={profile?.avatar?.avatarUrl} alt="Avatar" />
                                :
                                <div className="w-[120px] h-[120px] leading-[120px] text-white mx-auto rounded-full px-[8px] bg-blue-200">
                                    Choose image
                                </div>
                            }
                            <input className="mx-auto my-[5px] w-[100%] outline-none" type="file" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Tên tài khoản:
                            </p>
                            <input defaultValue={profile.fullname} disabled className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Email:
                            </p>
                            <input defaultValue={profile.email} disabled className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Ngày sinh:
                            </p>
                            <input type="date" defaultValue={profile.birthday}
                                onChangeCapture={() => { clearErrors('birthday') }}
                                {...register('birthday', {
                                    required: regex.REQUIRED,
                                })}
                                disabled={isLoading} className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                            <span className="text-red-500 text-[12px]">{errors?.birthday && errors?.birthday?.message}</span>
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Địa chỉ:
                            </p>
                            <input type="text" defaultValue={profile.address}
                                onChangeCapture={() => { clearErrors('address') }}
                                {...register('address', {
                                    required: regex.REQUIRED,
                                })}
                                disabled={isLoading}
                                className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                            <span className="text-red-500 text-[12px]">{errors?.address && errors?.address?.message}</span>
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Mô tả:
                            </p>
                            <textarea defaultValue={profile.description}
                                onChangeCapture={() => { clearErrors('description') }}
                                {...register('description', {
                                    required: regex.REQUIRED,
                                })}
                                disabled={isLoading} className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                            <span className="text-red-500 text-[12px]">{errors?.description && errors?.description?.message}</span>
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Sở thích:
                            </p>
                            <div className="grid grid-cols-3">
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Ăn uống" />
                                    <span>Ăn uống</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Nghe nhạc" />
                                    <span> Nghe nhạc</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Chơi game" />
                                    <span>Chơi game</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Mua sắm" />
                                    <span>Mua sắm</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Chơi thể thao" />
                                    <span>Chơi thể thao</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Đọc sách" />
                                    <span>Đọc sách</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Kỹ năng:
                            </p>
                            <div className="grid grid-cols-3">
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Front-End" />
                                    <span>Front-End</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Back-End" />
                                    <span>Back-End</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Mobile App(IOS)" />
                                    <span>Mobile App(IOS)</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Mobile App(Android)" />
                                    <span>Mobile App(Android)</span>
                                </div>
                                <div className="flex my-[5px]">
                                    <input type="checkbox" className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" value="Xử lí dữ liệu" />
                                    <span>Xử lí dữ liệu</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button
                                onClick={() => { history.push('/profile/me/change-info') }}
                                className="mx-[10px] bg-blue-200 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-gray-200 hover:text-blue-600 focus:border-blue-600"
                                type="submit"
                            >
                                hủy bỏ
                            </button>
                            <button
                                className="bg-blue-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-blue-800 focus:border-blue-600"
                                type="submit"
                            >
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ChangePersonal;