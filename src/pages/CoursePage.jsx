import React from 'react'
import Select from 'react-select'
import khoahoc_img from '../assets/media/pictures/khoa-hoc.png'
import BannerColla from '../components/BannerColla'
import Contact from '../components/Contacts/contact'
import thanhvien_img from '../assets/media/icons/thanhvien_img.svg'
import Pagings from '../components/Pagings'
import Search from '../components/Search'

const CoursePage = () => {
    const options = [
        { value: 'tatca', label: 'Tất cả' },
        { value: 'coban', label: 'Cơ bản' },
        { value: 'nangcao', label: 'Nâng cao' },
        { value: 'butpa', label: 'Bứt phá' }
    ]
    const MyComponent = () => (
        <Select className="w-[130px] ml-[15px] " options={options} />
    )
    return (
        <>
            <div id="main">
                <div className="w-full mt-[48px] px-[15px] md:px-0 sm:mx-auto">
                    <div className="container mx-auto md:flex justify-between items-center">
                        <p className="text-[26px] lg:text-[34px] font-bold">Danh sách khóa học</p>
                        <form action="" className="flex items-center mt-2 md:mt-0">
                            <Search />
                            {MyComponent()}
                        </form>
                    </div>
                </div>
                <div className="mt-[30px] mb-[75px] mx-[15px] md:mx-auto">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] ">
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500 "><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-t-[15px] cursor-pointer" style={{ backgroundImage: `url(${khoahoc_img})` }}> </div>
                                <div className="px-[20px] ">
                                    <p className="text-[20px] font-bold mt-[12px] cursor-pointer">Lập trình javascript (căn bản)</p>
                                    <p className="text-[14px] mt-[4px] text-green-500">Giảng viên: Nguyễn Thành Đạt</p>
                                    <p className=" text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[63px]">
                                        Khoá học này sẽ giúp bạn hiểu được cách thức hoạt động của mã javascript, cách để xây dựng một ứng dụng javascript chuyên nghiệp.
                                    </p>
                                    <div className="w-full pr-[40px] flex justify-between items-center mt-[17px]  bottom-[25px] absolute">
                                        <div className="flex items-center">
                                            <span className="text-blue-500"><img className="w-6" src={thanhvien_img} alt="" /></span>
                                            <span className="text-blue-500 ml-[10px] text-[14px]">19.520 thành viên</span>
                                        </div>
                                        <p className="text-[14px]">0 VNĐ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Pagings />
                    </div>
                </div>
                <BannerColla />
                <Contact />
            </div>
        </>
    )
}

export default CoursePage
