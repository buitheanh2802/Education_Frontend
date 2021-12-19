import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'src/Components/Icon';
import { timeFormatter } from './../../../../../../Helpers/Timer';
import Loading from 'src/Components/Loading/LoadingIcon';
import { notificationReadMore } from 'src/Redux/Actions/Notification.action';
import { useDispatch } from 'react-redux';
import LocalStorage from 'src/Helpers/Storage';

const Notification = ({ className, setIsNotification }) => {
    const [isList, setIsList] = useState(false);
    const { models, pagination,process } = useSelector(state => state.Notification);
    const [currentPage, setCurrentPage] = useState(null);
    const [totalPage, setTotalPage] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        if (models) {
            setCurrentPage(pagination.currentPage);
            setTotalPage(pagination.totalPage);
        }
    }, [models, pagination]);
    const onReadMore = () => {
        dispatch(notificationReadMore(LocalStorage.Get('_token_'), {
            page: currentPage + 1
        }))
    }
    return (
        <div className={`${className} lg:shadow-lg lg:border lg:border-solid lg:border-gray-300 pr-[5px] py-[15px] bg-white text-black text-[16px] rounded-[3px]`}>
            <div className="notification h-full lg:max-h-[50vh] overflow-y-scroll">
                <div className="sticky top-0 bg-white lg:bg-transparent lg:relative px-[15px] py-[5px] flex justify-between items-center border-b border-solid border-gray-200 lg:border-none">
                    <button onClick={() => setIsNotification(false)} className="lg:hidden"><Icon.Back className="w-[20px] h-[20px]" /></button>
                    <h4 className="font-bold text-[22px]">Thông báo</h4>
                
                </div>
                <div className="px-[5px] flex flex-col ">
                    <ul className="text-black">
                        {models && models?.length !== 0 ? models.map((item, index) => {
                            if(['comment','bookmark','vote'].includes(item.type)){
                                return (
                                    <li key={index} className={`py-[5px] px-[10px] block mb-[10px] ${!item.isRead && 'bg-gray-100'} 
                                        hover:bg-gray-100 rounded-[3px] duration-300 flex`}>
                                        {item?.sender?.avatar?.avatarUrl !== "" ?
                                            <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item?.sender?.avatar?.avatarUrl})` }}></i>
                                            : <p className="bg-gray-200 border flex h-[40px] items-center justify-center right-0 rounded-full select-none text-gray-500 min-w-[40px]"> {item?.sender?.fullname?.slice(0, 1)?.toUpperCase()} </p>}
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]">
                                                <Link className='mr-[5px] font-medium hover:text-blue-500 ' to={`/user/${item.sender.username}`}>{item.sender.fullname}</Link>
                                                <Link to={item.url}>{item.title}</Link>
                                            </p>
                                            <p className="text-[#2d6ff7] text-[14px]">{timeFormatter(item.createdAt)}</p>
                                        </div>
                                    </li>
                                )
                            }
                            return (
                                    <li key={index} className={`py-[5px] px-[10px] block mb-[10px] ${!item.isRead && 'bg-gray-100'} 
                                        hover:bg-gray-100 rounded-[3px] duration-300 flex`}>
                                        {item?.sender?.avatar?.avatarUrl !== "" ?
                                            <i className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] rounded-full border border-solid border-gray-500 block bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item?.sender?.avatar?.avatarUrl})` }}></i>
                                            : <p className="bg-gray-200 border flex h-[40px] items-center justify-center right-0 rounded-full select-none text-gray-500 min-w-[40px]"> {item?.sender?.fullname?.slice(0, 1)?.toUpperCase()} </p>}
                                        <div className="pl-[15px]">
                                            <p className="leading-[20px]">
                                                <Link className='mr-[5px] font-medium hover:text-blue-500 ' to={`/user/${item.sender.username}`}>{item.sender.fullname}</Link>
                                                {item.title}
                                            </p>
                                            <p className="text-[#2d6ff7] text-[14px]">{timeFormatter(item.createdAt)}</p>
                                        </div>
                                    </li>
                            )
                        }) : <span className="text-[#818181] block p-[15px] ">Bạn chưa có thông báo nào !</span>}
                    </ul>
                    {models && (currentPage < totalPage ? (
                        <button disabled={process.actionLoading.readMore} onClick={onReadMore} 
                        className="py-[5px] flex items-center justify-center relative bg-gray-100 hover:bg-gray-200">
                           {process.actionLoading.readMore && <Loading className="w-[15px] h-[15px] " />}
                           <span className="ml-[8px]">Xem thêm</span>
                        </button>
                    ) : null)}
                </div>
            </div>
        </div>
    )
}

export default Notification
