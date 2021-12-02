import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'
import { path, Images } from 'src/Constants/'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ActionLogin } from 'src/Redux/Actions/Auth.action'
import Loading from 'src/Components/Loading'
import ErrorMessage from 'src/Components/ErrorMessage'
import { regex } from 'src/Constants/'
import Oauthentication from '../Components/Oauthentication'
import { resetErrorAuth } from 'src/Redux/Slices/Auth.slice'

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { error, isLoading } = useSelector(state => state.Auth)
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = (data) => {
        dispatch(ActionLogin(data))
    }

    error && setTimeout(() => dispatch(resetErrorAuth()), 5000)

    return (
        <div className="container mx-auto rounded grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
            <button
                className="px-[10px] py-[5px] fixed bg-gray-50 top-0 left-0 hidden lg:flex items-center gap-[5px] text-gray-600 hover:text-blue-600"
                onClick={() => history.goBack()}>
                <Icon.Undo className="fill-current w-[15px]" /> Quay lại
            </button>
            <img className="w-full m-auto hidden lg:block" src={Images.BgLogin} alt="login" />
            <div className="col-span-1">
                <form onSubmit={handleSubmit(onSubmit)} className="sm:w-2/3 mx-auto">
                    <h2 className="font-bold text-[25px] sm:text-[30px] ">Đăng nhập với <Link className="text-blue-600 duration-300 hover:text-blue-800" to={path.HOME}>DevStar</Link></h2>
                    <p className="text-gray-500 text-[14px] my-[8px]">Cộng đông kết nối lập trình viên</p>

                    {error && <ErrorMessage message={error} />}

                    <div className="my-[25px]">
                        <div className="relative">
                            <input
                                onChangeCapture={() => clearErrors('email')}
                                {...register('email', {
                                    required: regex.REQUIRED,
                                    pattern: regex.EMAIL
                                })}
                                disabled={isLoading}
                                autoComplete="off"
                                className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                id="Email" type="text" placeholder="Email hoặc tên đăng nhập của bạn" />
                            <label htmlFor="Email" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                <Icon.Email className="fill-current w-[15px]" />
                            </label>
                        </div>
                        <span className="text-red-500 text-[12px]">{errors?.email && errors?.email?.message}</span>
                    </div>

                    <div className="my-[25px]">
                        <div className="relative">
                            <input
                                onChangeCapture={() => clearErrors('password')}
                                disabled={isLoading}
                                {...register('password', {
                                    required: regex.REQUIRED,
                                    minLength: regex.MIN_LENGTH(6),
                                    maxLength: regex.MAX_LENGTH(50),
                                    pattern: regex.PASSWORD
                                })}
                                className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                id="Password" type="password" placeholder="Mât khẩu" />
                            <label htmlFor="Password" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                <Icon.Look className="fill-current w-[15px]" />
                            </label>
                        </div>
                        <span className="text-red-500 text-[12px]">{errors?.password && errors?.password?.message}</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                        <label htmlFor="remember-me" className="cursor-pointer flex gap-[5px] items-center"><input id="remember-me" type="checkbox" className="cursor-pointer border" /> Ghi nhớ đăng nhập</label>
                        <Link type="button" to={path.FORGOTPASSWORD} className="hover:underline hover:text-blue-600 duration-300 text-gray-600">Quên mật khẩu ?</Link>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full focus:outline-none rounded-[5px] h-[40px] bg-blue-600 hover:bg-blue-800 duration-300 text-white font-medium my-[30px]">
                        {isLoading ? <Loading className="fill-current w-[30px] mx-auto" /> : "Đăng nhập"}
                    </button>

                    <p className="text-gray-600 text-center text-[12px]">- HOẶC -</p>

                    <Oauthentication />

                    <p>Bạn chưa có tài khoản? <Link className="text-blue-600 hover:text-blue-800 hover:underline" to={path.REGISTER}>Đăng ký</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
