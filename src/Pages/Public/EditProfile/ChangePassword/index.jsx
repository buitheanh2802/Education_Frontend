import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import AuthApi from "src/Apis/AuthApi";
import { Icon } from "src/Components/Icon";
import ErrorMessage from 'src/Components/ErrorMessage'
import SuccessMessage from 'src/Components/SuccessMessage'
import { regex } from 'src/Constants/'
import ResponseMessage from 'src/Constants/ResponseMessage'
import { useHistory } from "react-router-dom";
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const ChangePassword = ({ profile }) => {
    const history = useHistory();
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });
    const [response, setResponse] = useState({ isLoading: false, error: null, message: null })
    const { isLoading, error, message } = response;
    const { register, handleSubmit, formState: { errors }, clearErrors, getValues } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = async (data) => {
        try {
            setResponse({ isLoading: false, error: null, message: null })
            if (data) setLoading({ ...loading, success: true });
            const { data: res } = await AuthApi.changePassword(data);
            if (res) setLoading({ ...loading, success: false });
            setResponse({
                ...response,
                error: null,
                message: "Đổi mật khẩu thành công",
            })
            setTimeout(() => {
                history.push('/profile/me/change-info')
            }, 2000);
        } catch (error) {
            setLoading({ ...loading, success: false });
            if(error.response.data.message[0] === "CURRENT_PASSWORD_INCORRECT") {
                setResponse({
                    ...response,
                    message: null,
                    error: "Mật khẩu cũ không khớp"
                })
            } else if (error.response.data.message[0] === "SAME_PASSWORD") {
                setResponse({
                    ...response,
                    message: null,
                    error: "Mật khẩu mới trùng với mật khẩu hiện tại"
                })
            } else if(error.response.data.message[0] === "INVALID_DATA") {
                setResponse({
                    ...response,
                    message: null,
                    error: "Mật khẩu phải tối thiểu 8 kí tự, ít nhất một chữ cái và một số!"
                })
            }
            
        }
    }

    return (
        <>
            {profile.socialType === "system" ?
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
                                <input type="password" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none"
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
                                <input type="password" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none"
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
                                <input type="password" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none"
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
                            <div className="flex justify-end">
                                <button
                                    onClick={() => { history.push('/profile/me/change-info') }}
                                    className="mx-[10px] bg-blue-200 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-gray-200 hover:text-blue-600 focus:border-blue-600"
                                    type="submit"
                                >
                                    hủy bỏ
                                </button>
                                <button
                                    className="flex bg-blue-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-blue-800 focus:border-blue-600"
                                    type="submit"
                                >
                                    {loading.success && (
                                        <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                                    )}
                                    Đổi mật khẩu
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                :
                <div className="px-[20px] lg:px-[50px] py-[50px] h-[400px] flex justify-center items-center text-red-600">
                    <Icon.Warning className="fill-current w-[23px] mx-[5px] icon-error" />
                    <span className="font-bold text-[23px] mx-[5px]">
                        Không thể đổi mật khẩu với tài khoản được đăng nhập bằng bên thứ 3
                    </span>
                </div>

            }
        </>
    );
}
export default ChangePassword;