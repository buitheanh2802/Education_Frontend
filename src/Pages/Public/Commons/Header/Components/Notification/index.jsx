import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'

const Notification = ({ className, setIsNotification }) => {
    const [isList, setIsList] = useState(false)
    return (
        <div className={`${className} lg:shadow-lg lg:border lg:border-solid lg:border-gray-300 pr-[5px] py-[15px] bg-white text-black text-[16px] rounded-[3px]`}>
            <div className="notification h-full lg:max-h-[50vh] overflow-y-scroll">
                <div className="sticky top-0 bg-white lg:bg-transparent lg:relative px-[15px] py-[5px] flex justify-between items-center border-b border-solid border-gray-200 lg:border-none">
                    <button onClick={() => setIsNotification(false)} className="lg:hidden"><Icon.Back className="w-[20px] h-[20px]" /></button>
                    <h4 className="font-bold text-[22px]">Thông báo</h4>
                    <button onClick={() => setIsList(!isList)} className="hover:bg-gray-200 p-[5px] rounded-[3px] duration-300"><Icon.List className="w-[20px] h-[20px]" /></button>
                    {isList && <ul className="absolute top-[90%] w-[280px] right-[15px] rounded-[3px] bg-white shadow-lg p-[5px] border border-solid border-gray-200">
                        <li className="px-[15px] py-[7px] hover:bg-gray-100 rounded-[3px] duration-300 cursor-pointer flex items-center"><Icon.Checked className="w-[20px] h-[20px]" /> <p className="ml-[10px]">Đánh dấu tất cả đã đọc</p></li>
                        <li className="px-[15px] py-[7px] hover:bg-gray-100 rounded-[3px] duration-300 cursor-pointer flex items-center"><Icon.Detele className="w-[20px] h-[20px]" /> <p className="ml-[10px]">Xóa tất cả thông báo</p></li>
                    </ul>}
                </div>
                <div className="px-[5px]">
                    <ul className="text-black">
                        <Link to="/">
                            <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                <div className="pl-[15px]">
                                    <p className="leading-[20px]">Giảng viên <span className="font-medium">Nguyễn Thành Đạt</span> vừa tạo một bài mới cho khoá học <span className="font-medium">javascrit (cơ bản)</span>.</p>
                                    <p className="text-[#FF0000] text-[14px]">1 phút trước</p>
                                </div>
                            </li>
                        </Link>
                    </ul>
                    <span>Xem thêm</span>
                </div>
            </div>
        </div>
    )
}

export default Notification
