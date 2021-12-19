import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentsApi from 'src/Apis/CommentsApi';
import { Icon } from 'src/Components/Icon';
import { AlartMessage } from 'src/Helpers/';
import { timeFormatter } from 'src/Helpers/Timer';

const PublishItem = ({ data, checked, reLoad, setReLoad }) => {
    console.log(data)
    const [isLoading, setIsLoading] = useState(false);
    const handelDelete = async (id) => {
        try {
            const confirm = window.confirm("Xác nhận xoá bình luận này")
            if (!confirm) return
            setIsLoading(true)
            await CommentsApi.adminDelete(id)
            setIsLoading(false)
            setReLoad(!reLoad)
            AlartMessage(true, "Xoá bình luận thành công")
        } catch (error) {
            setIsLoading(false)
            AlartMessage(false, "Xoá bình luận thất bại")
        }
    }

    return (
        <div className="nav bg-white border-b text-[15px] p-[10px] gap-3 grid grid-cols-[60px,1fr,3fr,1.2fr,0.5fr] items-center">
            <div className='font-medium pl-2'>
                <input checked={checked} type="checkbox" name={data?._id} className='cursor-pointer' />
            </div>
            <div>
                {data?.sender?.fullname}
                <p className='text-xs text-gray-300 hover:underline hover:text-blue-700'><Link to={`/user/${data?.sender?.username}`}>@{data?.sender?.username}</Link></p>
            </div>
            <div>
                <p className='font-light'>{data?.content}</p>
                <p className='font-light text-sm text-yellow-500'>{data?.type}</p>
            </div>
            <div className='text-center font-light text-sm'>{timeFormatter(data?.createdAt)}</div>
            <div className="text-center flex justify-center">
                <button onClick={() => handelDelete(data?.referenceTo?._id)} className="h-[35px] px-2 flex items-center disabled:bg-gray-400 mr-[5px] text-red-400 hover:text-blue-600 rounded-md" title="Chỉnh sửa">
                    {isLoading ? <Icon.Loading className="w-[20px] fill-current mx-auto" /> : <Icon.Detele className="w-[20px] fill-current mx-auto" />}
                </button>
            </div>
        </div >
    );
};

export default PublishItem;