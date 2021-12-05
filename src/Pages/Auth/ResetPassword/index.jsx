import React, { useState } from "react";
import { Link, useHistory, useParams } from 'react-router-dom'
import AuthApi from "src/Apis/AuthApi";
import { Icon } from "src/Components/Icon";
import ErrorMessage from 'src/Components/ErrorMessage'
import SuccessMessage from 'src/Components/SuccessMessage'
import { path, regex } from 'src/Constants/'
import ResponseMessage from 'src/Constants/ResponseMessage'
import { useForm } from 'react-hook-form'

const ResetPassword = () => {
    const history = useHistory();
    const [response, setResponse] = useState({ isLoading: false, error: null, message: null })
    const { isLoading, error, message } = response;
    const { register, handleSubmit, formState: { errors }, clearErrors, getValues, reset } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });
    const {token} = useParams();

    const onSubmit = async (data) => {
        try {
            const dataSend = {...data, token }
            setResponse({ ...response, isLoading: true })
            await AuthApi.resetPassword(dataSend);
            setResponse({
                ...response,
                message: "Đổi mật khẩu thành công",
                isLoading: false
            })
            setTimeout(() => {
                history.push('/auth/login')
            }, 2000);
        } catch (error) {
            setResponse({
                ...response,
                error: ResponseMessage(error?.response?.data?.message[0]),
                isLoading: false
            })
        }
    }

    return (
        <div className="container mx-auto py-[25px]">
            <button
                className="px-[10px] py-[5px] fixed bg-gray-50 top-[10px] left-[10px] hidden lg:flex items-center gap-[5px] text-gray-600 hover:text-blue-600"
                onClick={() => history.push("/auth/login")}>
                <Icon.Undo className="fill-current w-[15px]" /> Đăng nhập
            </button>
            <Link className="flex justify-center mx-auto py-[15px]" to={path.HOME}>
                <Icon.Logo className="sm:w-[30px] w-[24px]" />
                <span className="text-[38px] font-bold ml-[5px]">DevStar</span>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl rounded-[8px] border border-[#f2f2f2] mx-auto lg:w-[55%] md:w-[80%] sm:w-[90%] bg-[#ffffff] px-[20px] pt-[20px] pb-[35px]">
                <p className="text-gray-800 text-[23px] pb-[5px]">Đặt lại mật khẩu</p>
                <p className="text-gray-800 text-[15px] py-[10px]">
                    Đổi mật khẩu để hoàn tất. Bạn nên tạo một mật khẩu mạnh để ngăn truy cập trái phép vào tài khoản của mình.
                </p>
                <div className="">
                    {error && <ErrorMessage message={error} />}
                    {message && <SuccessMessage message={message} />}
                    <div className="py-[5px]">
                        <p className="text-gray-800 text-[15px] py-[5px]">
                            <span className="text-red-600 font-bold mr-[5px]">*</span>
                            Địa chỉ email của bạn:
                        </p>
                        <input type="email" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]"
                            onChangeCapture={() => { clearErrors('email') }}
                            {...register('email', {
                                required: regex.REQUIRED,
                                pattern: regex.EMAIL
                            })}
                            disabled={isLoading} />
                        <span className="text-red-500 text-[12px]">{errors?.email && errors?.email?.message}</span>
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
                        <button className="bg-blue-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-blue-800 focus:border-blue-600"
                            type="submit"
                        >
                            Đổi mật khẩu
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;
