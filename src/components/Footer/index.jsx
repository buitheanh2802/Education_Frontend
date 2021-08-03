import React from 'react';
import { Link } from 'react-router-dom';
import urlLogo from '../../assets/media/pictures/logo-white.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-900 px-[15px] text-white">
            <div className="container mx-auto pt-[30px] pb-[50px] text-center md:text-left">
                <ul className="hidden lg:grid grid-cols-10 gap-[30px] items-center text-[22px] font-medium">
                    <li className=" lg:col-span-3">
                        <img className="w-[160px] sm:w-[180px] lg:w-[200px]" src={urlLogo} alt="" />
                    </li>
                    <li className=" lg:col-span-2">Cộng tác viên</li>
                    <li className=" lg:col-span-2">Chúng tôi</li>
                    <li className=" lg:col-span-1">Hỗ trợ</li>
                    <li className=" lg:col-span-2">Theo dõi</li>
                </ul>
                <div className="grid md:grid-cols-3 lg:grid-cols-10 gap-[30px] mb-[30px]">
                    <ul className=" lg:col-span-3">
                        <li className="mb-[15px] lg:hidden"><img className="w-[160px] sm:w-[180px] lg:w-[200px] mx-auto" src={urlLogo} alt="" /></li>
                        <li className="mb-[15px] text-gray-400">Eduford là nơi học lập trình dành cho mọi lứa tuổi.</li>
                        <li className="mb-[15px] text-gray-400">Các khoá học được  chọn lọc kỹ lưỡng trước khi đưa vào giảng dạy.</li>
                        <li className="mb-[15px] text-gray-400">Học viên có thể đi từ con số 0 tới khi trở thành lập trình viên chuyên nghiệp tại đây.</li>
                    </ul>
                    <ul className=" lg:col-span-2">
                        <li className="md:mt-[15px] md:mb-[30px] mb-[15px] text-[22px] font-medium lg:hidden">Cộng tác viên</li>
                        <li className="mb-[15px] text-gray-400">Bạn có mong muốn hợp tác với chúng tôi?</li>
                        <li className="mb-[15px] text-gray-400">Hãy liên hệ ngay với chúng tôi. <Link to="/" className="text-[#f44336]">Tại đây !</Link></li>
                    </ul>
                    <ul className=" lg:col-span-2">
                        <li className="md:mt-[15px] md:mb-[30px] mb-[15px] text-[22px] font-medium lg:hidden">Chúng tôi</li>
                        <li className="mb-[15px] text-gray-400">Câu hỏi thường gặp</li>
                        <li className="mb-[15px] text-gray-400">Giới thiệu</li>
                        <li className="mb-[15px] text-gray-400">Liên hệ</li>
                    </ul>
                    <ul className="lg:col-span-1">
                        <li className="mb-[15px] text-[22px] font-medium lg:hidden">Hỗ trợ</li>
                        <li className="mb-[15px] text-gray-400">Hỗ trợ</li>
                        <li className="mb-[15px] text-gray-400">Đóng góp</li>
                    </ul>
                    <ul className="md:col-span-2 lg:col-span-2">
                        <li className="mb-[15px] text-[22px] font-medium lg:hidden">Theo dõi</li>
                        <li className="mb-[15px] md:w-2/3 lg:w-full text-gray-400">Nhập email để đăng ký nhận những thông tin hữu ích từ eduford.</li>
                        <li className="mb-[15px] md:w-2/3 lg:w-full">
                            <form className="sm:w-2/3 mx-auto md:w-full">
                                <div className="mb-[10px]"><input className="outline-none text-gray-900 px-[15px] py-[5px] w-full border border-solid border-[#48BB78] rounded-[5px]" type="text" placeholder="Email của bạn..." /></div>
                                <div><button className="w-full md:w-auto bg-[#48BB78] px-[15px] py-[5px] uppercase rounded-[5px]" type="submit">Đăng ký</button></div>
                            </form>
                        </li>
                    </ul>
                </div>
                <p className="text-center md:text-left text-gray-600">© 2021 eduford đăng ký bản quyền.</p>
            </div>
        </footer>
    )
}

export default Footer
