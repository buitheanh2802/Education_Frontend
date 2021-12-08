import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AuthApi from 'src/Apis/AuthApi'
import ErrorMessage from 'src/Components/ErrorMessage'
import { Icon } from 'src/Components/Icon'
import Loading from 'src/Components/Loading'
import SuccessMessage from 'src/Components/SuccessMessage'
import { path, Images, regex } from 'src/Constants/'
import ResponseMessage from 'src/Constants/ResponseMessage'
import Oauthentication from '../Components/Oauthentication'

const Register = () => {
    const history = useHistory();
    const [response, setResponse] = useState({ isLoading: false, error: null, message: null })
    const { isLoading, error, message } = response;
    const { register, handleSubmit, formState: { errors }, clearErrors, getValues, reset } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = async (account) => {
        try {
            setResponse({ ...response, isLoading: true })
            await AuthApi.register(account);
            setResponse({
                ...response,
                message: "Truy cập email để kích hoạt tài khoản",
                isLoading: false
            })
            reset()
        } catch (error) {
            setResponse({
                ...response,
                error: ResponseMessage(error?.response?.data?.message[0]),
                isLoading: false
            })
        }
    }

    const resetRespone = (filed) => {
        clearErrors(filed);
        setResponse({ isLoading: false, error: null, message: null })
    }

    return (
        <div className="container mx-auto rounded grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
            <button
                className="px-[10px] py-[5px] fixed bg-gray-50 top-[10px] left-[10px] hidden lg:flex items-center gap-[5px] text-gray-600 hover:text-blue-600"
                onClick={() => history.goBack()}>
                <Icon.Undo className="fill-current w-[15px]" /> Quay lại
            </button>
            <img className="w-full m-auto hidden lg:block" src={Images.BgSinup} alt="login" />
            <div className="col-span-1">
                <form onSubmit={handleSubmit(onSubmit)} className="sm:w-2/3 mx-auto">
                    <h2 className="font-bold text-[25px] sm:text-[30px]">Đăng ký thành viên</h2>
                    <p className="text-gray-500 text-[14px] my-[8px]">Trở thành thành viên của <Link className="text-blue-600 hover:text-blue-800 font-medium" to={path.HOME}>DevStar</Link> ngay hôm nay</p>
                    {error && <ErrorMessage message={error} />}
                    {message && <SuccessMessage message={message} />}
                    <div className="my-[25px]">
                        <div className="relative">
                            <input
                                onChangeCapture={() => { resetRespone('email') }}
                                {...register('email', {
                                    required: regex.REQUIRED,
                                    pattern: regex.EMAIL
                                })}
                                disabled={isLoading}
                                autoComplete="off"
                                className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                id="Email" type="text" placeholder="Địa chỉ email của bạn" />
                            <label htmlFor="Email" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                <Icon.Email className="fill-current w-[15px]" />
                            </label>
                        </div>
                        <span className="text-red-500 text-[12px]">{errors?.email && errors?.email?.message}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-[15px] my-[25px]">
                        <div>
                            <div className="relative">
                                <input
                                    onChangeCapture={() => { resetRespone('fullname') }}
                                    {...register('fullname', {
                                        required: regex.REQUIRED,
                                        validate: regex.FULL_NAME
                                    })}
                                    disabled={isLoading}
                                    autoComplete="off"
                                    className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                    id="Fullname" type="text" placeholder="Tên của bạn" />
                                <label htmlFor="Fullname" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                    <Icon.User className="fill-current w-[15px]" />
                                </label>
                            </div>
                            <span className="text-red-500 text-[12px]">{errors?.fullname && errors?.fullname?.message}</span>
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    onChangeCapture={() => { resetRespone('username') }}
                                    {...register('username', {
                                        required: regex.REQUIRED,
                                        pattern: regex.USER_NAME
                                    })}
                                    disabled={isLoading}
                                    autoComplete="off"
                                    className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                    id="Username" type="text" placeholder="Tên tài khoản" />
                                <label htmlFor="Username" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                    <Icon.Username className="fill-current w-[15px]" />
                                </label>
                            </div>
                            <span className="text-red-500 text-[12px]">{errors?.username && errors?.username?.message}</span>
                        </div>
                    </div>

                    <div className="my-[25px]">
                        <div className="relative">
                            <input
                                onChangeCapture={() => { resetRespone('password') }}
                                {...register('password', {
                                    required: regex.REQUIRED,
                                    minLength: regex.MIN_LENGTH(6),
                                    maxLength: regex.MAX_LENGTH(50),
                                    pattern: regex.PASSWORD
                                })}
                                disabled={isLoading}
                                className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                id="Password" type="password" placeholder="Mât khẩu" />
                            <label htmlFor="Password" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                <Icon.Look className="fill-current w-[15px]" />
                            </label>
                        </div>
                        <span className="text-red-500 text-[12px]">{errors?.password && errors?.password?.message}</span>
                    </div>

                    <div className="my-[25px]">
                        <div className="relative">
                            <input
                                onChangeCapture={() => { resetRespone('re_password') }}
                                {...register('re_password', {
                                    required: regex.REQUIRED,
                                    validate: {
                                        value: (value) => {
                                            if (value !== getValues("password")) return "Mật khẩu nhập lại không khớp"
                                        }
                                    }
                                })}
                                disabled={isLoading}
                                className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                id="re_password" type="password" placeholder="Xác nhận mật khẩu của bạn" />
                            <label htmlFor="re_password" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                <Icon.Look className="fill-current w-[15px]" />
                            </label>
                        </div>
                        <span className="text-red-500 text-[12px]">{errors?.re_password && errors?.re_password?.message}</span>
                    </div>

                    <button type="submit" className="w-full focus:outline-none rounded-[5px] h-[40px] bg-blue-600 hover:bg-blue-800 duration-300 text-white font-medium my-[25px]">
                        {isLoading ? <Icon.Loading className="fill-current w-[30px] mx-auto" /> : "Đăng ký"}
                    </button>

                    <p className="text-gray-600 text-center text-[12px]">- HOẶC -</p>

                    <Oauthentication />

                    <p>Bạn đã có tài khoản? <Link className="text-blue-600 hover:text-blue-800 hover:underline" to={path.LOGIN}>Đăng nhập</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
