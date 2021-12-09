import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import AuthApi from "src/Apis/AuthApi";
import { Icon } from "src/Components/Icon";
import ErrorMessage from 'src/Components/ErrorMessage'
import SuccessMessage from 'src/Components/SuccessMessage'
import { path, regex } from 'src/Constants/'
import ResponseMessage from 'src/Constants/ResponseMessage'
const ChangePassword = () => {
    
    const [response, setResponse] = useState({ isLoading: false, error: null, message: null })
    const { isLoading, error, message } = response;
    const { register, handleSubmit, formState: { errors }, clearErrors, getValues } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = async (data) => {
        try {
            setResponse({ ...response, isLoading: true })
            await AuthApi.changePassword(data);
            setResponse({
                ...response,
                message: "Đổi mật khẩu thành công",
                isLoading: false
            })
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
                <form onSubmit={handleSubmit(onSubmit)} >
                    <p className="text-gray-800 font-bold text-[23px] pb-[5px]">Đổi mật khẩu</p>
                    <p className="text-gray-800 text-[15px] py-[10px]">
                        Đổi mật khẩu để hoàn tất. Bạn nên tạo một mật khẩu mạnh để ngăn truy cập trái phép vào tài khoản của mình.
                    </p>
                    <div className="">
                        {error && <ErrorMessage message={error} />}
                        {message && <SuccessMessage message={message} />}
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Mật khẩu cũ:
                            </p>
                            <input type="password" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]"
                                onChangeCapture={() => { clearErrors('currentPassword') }}
                                {...register('currentPassword', {
                                    required: regex.REQUIRED,
                                })}
                                disabled={isLoading}
                            />
                            <span className="text-red-500 text-[12px]">{errors?.currentPassword && errors?.currentPassword?.message}</span>
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Mật khẩu mới:
                            </p>
                            <input type="password" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]"
                                onChangeCapture={() => { clearErrors('newPassword') }}
                                {...register('newPassword', {
                                    required: regex.REQUIRED,
                                    minLength: regex.MIN_LENGTH(6),
                                    maxLength: regex.MAX_LENGTH(50),
                                    pattern: regex.PASSWORD
                                })}
                                disabled={isLoading}
                            />
                            <span className="text-red-500 text-[12px]">{errors?.newPassword && errors?.newPassword?.message}</span>
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Nhập lại mật khẩu:
                            </p>
                            <input type="password" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]"
                                onChangeCapture={() => { clearErrors('newPasswordConfirm') }}
                                {...register('newPasswordConfirm', {
                                    required: regex.REQUIRED,
                                    validate: {
                                        value: (value) => {
                                            if (value !== getValues("newPassword")) return "Mật khẩu nhập lại không khớp"
                                        }
                                    }
                                })}
                                disabled={isLoading}
                            />
                            <span className="text-red-500 text-[12px]">{errors?.newPasswordConfirm && errors?.newPasswordConfirm?.message}</span>
                        </div>
                        <div className="text-right">
                            <button
                                className="bg-blue-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-blue-800 focus:border-blue-600"
                                type="submit"
                            >
                                Đổi mật khẩu
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default ChangePassword;