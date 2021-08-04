import React from 'react'
import Select from 'react-select'
import thucHanhImg from '../assets/media/pictures/thuc-hanh.png'
import BannerColla from '../components/BannerColla'
import Contact from '../components/Contacts/contact'
import Pagings from '../components/Pagings'
import Search from '../components/Search'

const PracticePage = () => {
    const options = [
        { value: 'tatca', label: 'Tất cả' },
        { value: 'coban', label: 'Sơ cấp' },
        { value: 'nangcao', label: 'Nâng cao' },
        { value: 'butpa', label: 'Nâng cao' }
    ]
    const MyComponent = () => (
        <Select className="w-[130px] ml-[15px] " options={options} />
    )
    return (
        <>
            <div id="main">
                <div className="w-full mt-[48px] px-[15px] md:px-0 sm:mx-auto">
                    <div className="container mx-auto md:flex justify-between items-center">
                        <p className="text-[26px] lg:text-[34px] font-bold">Bài tập thực hành</p>
                        <form action="" className="flex items-center mt-2 md:mt-0">
                            <Search />
                            {MyComponent()}
                        </form>
                    </div>
                </div>
                <div className="mt-[30px] mb-[75px] mx-[15px] md:mx-auto">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover   bg-center rounded-[15px]  cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold  cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" rounded-[15px]  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded-[15px] cursor-pointer" style={{ backgroundImage: `url(${thucHanhImg})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <span className="text-[20px] font-bold cursor-pointer">Learning app</span>
                                        <span className="text-[14px]">0 VNĐ</span>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">
                                        Thực hành cắt giao diện từ file figma sang HTML, CSS
                                    </p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className=" text-[12px] text-green-500 px-[15px]">Sơ cấp:</p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-green-500 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                                <span className="h-[5px] bg-gray-500 bg-opacity-50 rounded-[3px]"></span>
                                            </div>
                                        </div>
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

export default PracticePage
