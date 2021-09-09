import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'

const Notification = ({ className, setIsNotification }) => {
    const [isList, setIsList] = useState(false)
    return (
        <div>
            <div className={`${className} lg:shadow-2xl lg:border-l lg:border-r lg:border-b lg:border-solid lg:border-gray-300 pr-[5px] py-[15px] bg-white text-black text-[16px] rounded-[3px]`}>
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
                        <ul className="flex justify-between items-center px-[10px] py-[5px]">
                            <li className="text-[18px] font-medium">Mới</li>
                            <li className="text-[#4299E1] text-[16px] cursor-pointer hover:underline hover:text-[blue] duration-300">Xem thêm</li>
                        </ul>
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
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]"><span className="font-medium">Nguyễn Thành Đạt</span> đã trả lời bình luận của bạn.</p>
                                        <p className="text-[#FF0000] text-[14px]">3 giờ trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]"><span className="font-medium">eduford</span> đã trả lời bình luận của bạn.</p>
                                        <p className="text-[#FF0000] text-[14px]">3 giờ trước</p>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div className="px-[5px]">
                        <p className="text-[18px] font-medium px-[10px] py-[5px]">Trước đó</p>
                        <ul className="text-gray-500 lg:pb-0">
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]"><span className="font-medium">Nguyễn Thành Đạt</span> đã trả lời bình luận của bạn.</p>
                                        <p className="text-[#FF0000] text-[14px]">3 giờ trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]"><span className="font-medium">eduford</span> nhắc nhở bạn hoàn thành bài tập <span className="font-medium">Learning app</span></p>
                                        <p className="text-[#FF0000] text-[14px]">5 ngày trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]">Giảng viên <span className="font-medium">Nguyễn Thành Đạt</span> vừa tạo một bài mới cho khoá học <span className="font-medium">javascrit (cơ bản)</span>.</p>
                                        <p className="text-[#FF0000] text-[14px]">12 ngày trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]">Bạn đã đăng ký khoá học <span className="font-medium">javascrit (cơ bản)</span> thành công.</p>
                                        <p className="text-[#FF0000] text-[14px]">1 tháng trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]">Chào mừng bạn đã gia nhập cộng đồng <span className="font-medium">eduford</span>.</p>
                                        <p className="text-[#FF0000] text-[14px]">2 tháng trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]"><span className="font-medium">Nguyễn Thành Đạt</span> đã trả lời bình luận của bạn.</p>
                                        <p className="text-[#FF0000] text-[14px]">3 giờ trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]"><span className="font-medium">eduford</span> nhắc nhở bạn hoàn thành bài tập <span className="font-medium">Learning app</span></p>
                                        <p className="text-[#FF0000] text-[14px]">5 ngày trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]">Giảng viên <span className="font-medium">Nguyễn Thành Đạt</span> vừa tạo một bài mới cho khoá học <span className="font-medium">javascrit (cơ bản)</span>.</p>
                                        <p className="text-[#FF0000] text-[14px]">12 ngày trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]">Bạn đã đăng ký khoá học <span className="font-medium">javascrit (cơ bản)</span> thành công.</p>
                                        <p className="text-[#FF0000] text-[14px]">1 tháng trước</p>
                                    </div>
                                </li>
                            </Link>
                            <Link to="/">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                    <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(https://i.pinimg.com/originals/a3/0c/67/a30c6752c8eab249cb7b924116f4127d.jpg)` }}></i>
                                    <div className="pl-[15px]">
                                        <p className="leading-[20px]">Chào mừng bạn đã gia nhập cộng đồng <span className="font-medium">eduford</span>.</p>
                                        <p className="text-[#FF0000] text-[14px]">2 tháng trước</p>
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
