import React from "react";
import { Link, useHistory } from 'react-router-dom'
import { Icon } from "src/Components/Icon";
import { path } from "src/Constants/";

const ForgotPassword = () => {
    const history = useHistory();

    return (
        <div className="container mx-auto py-[25px]">
            <button
                className="px-[10px] py-[5px] fixed bg-gray-50 top-[10px] left-[10px] hidden lg:flex items-center gap-[5px] text-gray-600 hover:text-blue-600"
                onClick={() => history.goBack()}>
                <Icon.Undo className="fill-current w-[15px]" /> Quay lại
            </button>
            <Link className="flex justify-center mx-auto py-[15px]" to={path.HOME}>
                <Icon.Logo className="sm:w-[30px] w-[24px]" />
                <span className="text-[38px] font-bold ml-[5px]">DevStar</span>
            </Link>
            <div className="shadow-xl rounded-[8px] border border-[#f2f2f2] mx-auto lg:w-[55%] md:w-[80%] sm:w-[90%] bg-[#ffffff] px-[20px] pt-[20px] pb-[35px]">
                <p className="text-gray-800 text-[23px] pb-[5px]">Quên mật khẩu</p>
                <p className="text-gray-800 text-[15px] py-[10px]">Bạn quên mật khẩu của mình? Đừng lo lắng! Hãy cung cấp cho chúng tôi email bạn sử dụng để đăng ký tài khoản Viblo. Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn qua email đó.</p>
                <div className="">
                    <p className="text-gray-800 text-[15px] py-[5px]"><span className="text-red-600 font-bold mr-[5px]">*</span>Địa chỉ email của bạn: </p>
                    <input type="email" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]" />
                    <div className="text-right">                    
                        <button className="bg-blue-300 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-blue-600 focus:border-blue-500">Gửi email cho tôi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
