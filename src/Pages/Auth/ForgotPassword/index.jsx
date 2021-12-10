import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import AuthApi from "src/Apis/AuthApi";
import { Icon } from "src/Components/Icon";
import ErrorMessage from 'src/Components/ErrorMessage'
import SuccessMessage from 'src/Components/SuccessMessage'
import { path, regex } from 'src/Constants/'
import ResponseMessage from 'src/Constants/ResponseMessage'
import { useForm } from 'react-hook-form'
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const ForgotPassword = () => {
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });
    const history = useHistory();
    const [response, setResponse] = useState({ isLoading: false, error: null, message: null })
    const { isLoading, error, message } = response;
    const { register, handleSubmit, formState: { errors }, clearErrors, getValues, reset } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = async (data) => {
        try {
            setResponse({isLoading: false, error: null, message: null})
            if (data) setLoading({ ...loading, success: true });
            const { data : response} = await AuthApi.forgotPassword(data);
            if (response) setLoading({ ...loading, success: false });
            setResponse({
                ...response,
                error: null,
                message: "Chúng tôi đã gửi một email có liên kết để đặt lại mật khẩu của bạn. Có thể mất từ ​​1 đến 2 phút để hoàn thành. Vui lòng kiểm tra hộp thư của bạn.",
            })
            reset()
        } catch (error) {
            setLoading({ ...loading, success: false });
            setResponse({
                ...response,
                message: null,
                error: ResponseMessage(error?.response?.data?.message[0]),
            })
        }
    }

    return (
        <div className="container mx-auto py-[25px] relative">
            <button
                className="px-[10px] py-[5px] fixed bg-gray-50 top-[10px] left-[10px] hidden lg:flex items-center gap-[5px] text-gray-600 hover:text-blue-600"
                onClick={() => history.goBack()}>
                <Icon.Undo className="fill-current w-[15px]" /> Quay lại
            </button>
            <Link className="flex justify-center mx-auto py-[15px]" to={path.HOME}>
                <Icon.Logo className="sm:w-[30px] w-[24px]" />
                <span className="text-[38px] font-bold ml-[5px]">DevStar</span>
            </Link>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl rounded-[8px] border border-[#f2f2f2] mx-auto lg:w-[55%] md:w-[80%] sm:w-[90%] bg-[#ffffff] px-[20px] pt-[20px] pb-[35px]">
                <p className="text-gray-800 font-bold text-[23px] pb-[5px]">Quên mật khẩu</p>
                <p className="text-gray-800 text-[15px] py-[10px]">
                    Bạn quên mật khẩu của mình? Đừng lo lắng! Hãy cung cấp cho chúng tôi email bạn sử dụng để đăng ký tài khoản Viblo. Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn qua email đó.
                </p>
                <div className="py-[5px]">
                    {error && <ErrorMessage message={error} />}
                    {message && <SuccessMessage message={message} />}
                    <p className="text-gray-800 text-[15px] py-[5px]">
                        <span className="text-red-600 font-bold mr-[5px]">*</span>
                        Địa chỉ email của bạn:
                    </p>
                    <input type="email" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" placeholder="Nhập email của bạn..."
                        onChangeCapture={() => { clearErrors('email') }}
                        {...register('email', {
                            required: regex.REQUIRED,
                            pattern: regex.EMAIL
                        })}
                        disabled={isLoading}
                    />
                    <span className="text-red-500 text-[12px]">{errors?.email && errors?.email?.message}</span>
                    <div className="flex justify-end">
                        <button className="flex bg-blue-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-blue-800 focus:border-blue-600"
                            type="submit"
                        >
                            {loading.success && (
                                <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                            )}
                            Gửi email cho tôi
                        </button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default ForgotPassword;
