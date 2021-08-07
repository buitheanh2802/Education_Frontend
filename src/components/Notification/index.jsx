import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconDetele, IconDone, IconList, IconLoading } from '../Icon';
import { findNotification } from '../../redux/actions/notification.action'
import './style.css';

const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);
    const [isList, setIsList] = useState(false);

    useEffect(() => {
        dispatch(findNotification())
    }, [dispatch])

    return (
        <div className="pr-[5px] py-[15px] bg-white text-black text-[16px] rounded-[3px]">
            <div className=" notification max-h-[50vh] overflow-y-scroll">
                <div className="px-[15px] py-[5px] flex justify-between items-center relative">
                    <h4 className="font-bold text-[22px]">Thông báo</h4>
                    <button onClick={() => setIsList(!isList)} className="hover:bg-gray-200 p-[5px] rounded-[3px] duration-300"><IconList w={20} h={20} /></button>
                    {isList && <ul className="absolute top-[90%] w-2/3 right-[15px] rounded-[3px] bg-white shadow-lg p-[5px] border border-solid border-gray-100">
                        <li className="px-[15px] py-[7px] hover:bg-gray-100 rounded-[3px] duration-300 cursor-pointer flex items-center"><IconDone w={20} /> <p className="ml-[10px]">Đánh dấu tất cả đã đọc</p></li>
                        <li className="px-[15px] py-[7px] hover:bg-gray-100 rounded-[3px] duration-300 cursor-pointer flex items-center"><IconDetele w={20} /> <p className="ml-[10px]">Xóa tất cả thông báo</p></li>
                    </ul>}
                </div>
                {notification.isLoading
                    ? <IconLoading w={35} h={35} color="#333" />
                    : <>
                        <div className="px-[5px]">
                            <ul className="flex justify-between items-center px-[10px] py-[5px]">
                                <li className="text-[18px] font-medium">Chưa đọc</li>
                                <li className="text-[#4299E1] text-[16px] cursor-pointer hover:underline hover:text-[blue] duration-300">Xem thêm</li>
                            </ul>
                            <ul className="text-black">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                            </ul>
                        </div>

                        <div className="px-[5px]">
                            <p className="text-[18px] font-medium px-[10px] py-[5px]">Đã đọc</p>
                            <ul className="text-gray-500">
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                                <li className="py-[5px] px-[10px] hover:bg-gray-100 rounded-[3px] duration-300">thông báo 1</li>
                            </ul>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Notification
