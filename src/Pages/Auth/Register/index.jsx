import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'
import { regex } from 'src/Constants/'
import { path, Images } from 'src/Constants/'
import { ActionRegister } from 'src/Redux/Actions/Auth.action'

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { register, handleSubmit, formState: { errors }, clearErrors, getValues } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const onSubmit = async (data) => {
        dispatch(ActionRegister(data))
    }

    return (
        <div className="container mx-auto rounded grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
            <button
                className="px-[10px] py-[5px] fixed bg-gray-50 top-0 left-0 hidden lg:flex items-center gap-[5px] text-gray-600 hover:text-blue-600"
                onClick={() => history.goBack()}>
                <Icon.Undo className="fill-current w-[15px]" /> Quay lại
            </button>
            <img className="w-full m-auto hidden lg:block" src={Images.BgSinup} alt="login" />
            <div className="col-span-1">
                <form onSubmit={handleSubmit(onSubmit)} className="sm:w-2/3 mx-auto">
                    <h2 className="font-bold text-[25px] sm:text-[30px]">Đăng ký thành viên</h2>
                    <p className="text-gray-500 text-[14px] mt-[8px]">Trở thành thành viên của <Link className="text-blue-600 hover:text-blue-800 font-medium" to={path.HOME}>DevStar</Link> ngay hôm nay</p>

                    <div className="my-[25px]">
                        <div className="relative">
                            <input
                                onChangeCapture={() => clearErrors('email')}
                                {...register('email', {
                                    required: regex.REQUIRED,
                                    pattern: regex.EMAIL
                                })}
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
                                    onChangeCapture={() => clearErrors('fullname')}
                                    {...register('fullname', {
                                        required: regex.REQUIRED,
                                        validate: regex.FULL_NAME
                                    })}
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
                                    onChangeCapture={() => clearErrors('username')}
                                    {...register('username', {
                                        required: regex.REQUIRED,
                                        pattern: regex.USER_NAME
                                    })}
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
                                onChangeCapture={() => clearErrors('password')}
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

                    <div className="my-[25px]">
                        <div className="relative">
                            <input
                                onChangeCapture={() => clearErrors('re_password')}
                                {...register('re_password', {
                                    required: regex.REQUIRED,
                                    validate: {
                                        value: (value) => {
                                            if (value !== getValues("password")) return "Mật khẩu nhập lại không khớp"
                                        }
                                    }
                                })}
                                className="input bg-transparent pr-[10px] pl-[25px] h-[35px] border-b border-solid border-gray-500 outline-none focus:border-blue-600 w-full"
                                id="re_password" type="password" placeholder="Xác nhận mật khẩu của bạn" />
                            <label htmlFor="re_password" className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-text">
                                <Icon.Look className="fill-current w-[15px]" />
                            </label>
                        </div>
                        <span className="text-red-500 text-[12px]">{errors?.re_password && errors?.re_password?.message}</span>
                    </div>

                    <button type="submit" className="w-full focus:outline-none rounded-[5px] h-[40px] bg-blue-600 hover:bg-blue-800 duration-300 text-white font-medium my-[25px]">Đăng ký</button>

                    <p className="text-gray-600 text-center text-[12px]">- HOẶC -</p>

                    <div className="flex my-[20px] gap-[15px] items-center">
                        <p className="text-gray-500">Đăng nhập với</p>

                        <button type="button" className="bg-gray-100 border hover:bg-gray-200 duration-300 rounded-full h-[40px] w-[40px]">
                            <Icon.Google className="w-[20px] mx-auto" />
                        </button>
                        <button type="button" className="bg-gray-100 border hover:bg-gray-200 duration-300 rounded-full h-[40px] w-[40px]">
                            <Icon.Facebook className="w-[20px] mx-auto" />
                        </button>
                        <button type="button" className="bg-gray-100 border hover:bg-gray-200 duration-300 rounded-full h-[40px] w-[40px]">
                            <Icon.Github className="w-[20px] mx-auto" />
                        </button>
                    </div>
                    <p>Bạn đã có tài khoản? <Link className="text-blue-600 hover:text-blue-800 hover:underline" to={path.LOGIN}>Đăng nhập</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register
