import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconCancel, IconDetele, IconDone, IconList, IconLoading } from '../Icon';
import { findNotification } from '../../redux/actions/notification.action';
import urlAvatar from '../../assets/media/pictures/avatar.png';
import { Link } from 'react-router-dom';

const Notification = ({ className, setIsNotification }) => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);
    const [isList, setIsList] = useState(false);

    useEffect(() => {
        dispatch(findNotification())
    }, [dispatch])

    return (
        <div className={`${className} pr-[5px] py-[15px] bg-white text-black text-[16px] rounded-[3px]`}>
            <div className="notification h-full lg:max-h-[50vh] overflow-y-scroll">
                <div className="relative px-[15px] py-[5px] flex justify-between items-center">
                    <h4 className="font-bold text-[22px]">Thông báo</h4>
                    <button onClick={() => setIsList(!isList)} className="hover:bg-gray-200 p-[5px] rounded-[3px] duration-300"><IconList w={20} h={20} /></button>
                    {isList && <ul className="absolute top-[90%] w-2/3 right-[15px] rounded-[3px] bg-white shadow-lg p-[5px] border border-solid border-gray-200">
                        <li className="px-[15px] py-[7px] hover:bg-gray-100 rounded-[3px] duration-300 cursor-pointer flex items-center"><IconDone w={20} /> <p className="ml-[10px]">Đánh dấu tất cả đã đọc</p></li>
                        <li className="px-[15px] py-[7px] hover:bg-gray-100 rounded-[3px] duration-300 cursor-pointer flex items-center"><IconDetele w={20} /> <p className="ml-[10px]">Xóa tất cả thông báo</p></li>
                    </ul>}
                </div>
                {notification.isLoading
                    ? <IconLoading w={35} h={35} color="#333" />
                    : <>
                        <div className="px-[5px]">
                            <ul className="flex justify-between items-center px-[10px] py-[5px]">
                                <li className="text-[18px] font-medium">Mới</li>
                                <li className="text-[#4299E1] text-[16px] cursor-pointer hover:underline hover:text-[blue] duration-300">Xem thêm</li>
                            </ul>
                            <ul className="text-black">
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]">Giảng viên <span className="font-medium">Nguyễn Thành Đạt</span> vừa tạo một bài mới cho khoá học <span className="font-medium">javascrit (cơ bản)</span>.</p>
                                            <p className="text-[#FF0000] text-[14px]">1 phút trước</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]"><span className="font-medium">Nguyễn Thành Đạt</span> đã trả lời bình luận của bạn.</p>
                                            <p className="text-[#FF0000] text-[14px]">3 giờ trước</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
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
                            <ul className="text-gray-500 pb-[60px] lg:pb-0">
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]"><span className="font-medium">Nguyễn Thành Đạt</span> đã trả lời bình luận của bạn.</p>
                                            <p className="text-[#FF0000] text-[14px]">3 giờ trước</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]"><span className="font-medium">eduford</span> nhắc nhở bạn hoàn thành bài tập <span className="font-medium">Learning app</span></p>
                                            <p className="text-[#FF0000] text-[14px]">5 ngày trước</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]">Giảng viên <span className="font-medium">Nguyễn Thành Đạt</span> vừa tạo một bài mới cho khoá học <span className="font-medium">javascrit (cơ bản)</span>.</p>
                                            <p className="text-[#FF0000] text-[14px]">12 ngày trước</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]">Bạn đã đăng ký khoá học <span className="font-medium">javascrit (cơ bản)</span> thành công.</p>
                                            <p className="text-[#FF0000] text-[14px]">1 tháng trước</p>
                                        </div>
                                    </li>
                                </Link>
                                <Link to="/">
                                    <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300 flex">
                                        <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${urlAvatar})` }}></i>
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]">Chào mừng bạn đã gia nhập cộng đồng <span className="font-medium">eduford</span>.</p>
                                            <p className="text-[#FF0000] text-[14px]">2 tháng trước</p>
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </>}
            </div>
            <div className="h-[100px] fixed bottom-0 left-0 right-0 top-[calc(100%-60px)] lg:hidden bg-gradient-to-t from-gray-500">
                <button onClick={() => setIsNotification(false)} className="mx-auto w-[50px] h-[50px] rounded-full text-[35px] flex justify-center items-center bg-gray-100 border border-solid border-gray-300 shadow-xl"><IconCancel w={35} h={35} color="gray" /></button>
            </div>
        </div>
    )
}

export default Notification
