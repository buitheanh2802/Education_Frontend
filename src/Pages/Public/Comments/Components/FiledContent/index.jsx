import React, { useState } from 'react'
import { Icon } from 'src/Components/Icon'
import IntroUser from '../IntroUser'
import InsertComment from '../InsertComment'
import { Link } from 'react-router-dom'

const FiledContent = ({ data, shortId, userId }) => {
    const [isRepComment, setIsRepComment] = useState(false);
    return (
        <div className="flex my-[20px] gap-3">
            <Link to={`/user/${data?.createBy?.username}`}><IntroUser className="max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px]" avatarUrl={data?.createBy?.avatar?.avatarUrl} fullname={data?.createBy?.fullname} /></Link>
            <div className="w-full">
                <div>
                    <h3 className="font-medium"><Link className='hover:text-blue-800' to={`/user/${data?.createBy?.username}`}>{data?.createBy?.fullname}</Link></h3>
                    <p className="text-gray-600">{data.content}</p>
                </div>
                <div className="mt-2 flex gap-5">
                    <button className="p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"><Icon.Like className="w-[12px] h-[12px] fill-current" /> 0</button>
                    <button className="p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"><Icon.Dislike className="w-[12px] h-[12px] fill-current" /> 0</button>
                    <button onClick={() => setIsRepComment(true)} className="p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"><Icon.Share className="w-[12px] h-[12px] fill-current" /> Trả lời</button>
                </div>
                {data?.replyComments && <>
                    {data?.replyComments?.map((item, index) => {
                        return (
                            <div key={index} className="flex mt-[20px] gap-3">
                                <Link to={`/user/${item?.createBy?.username}`}><IntroUser className="max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px]" avatarUrl={item?.createBy?.avatar?.avatarUrl} fullname={item?.createBy?.fullname} /></Link>
                                <div className="w-full">
                                    <div>
                                        <h3 className="font-medium"><Link className='hover:text-blue-800' to={`/user/${item?.createBy?.username}`}>{item?.createBy?.fullname}</Link></h3>
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                    <div className="mt-2 flex gap-5">
                                        <button className="p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"><Icon.Like className="w-[12px] h-[12px] fill-current" /> 0</button>
                                        <button className="p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"><Icon.Dislike className="w-[12px] h-[12px] fill-current" /> 0</button>
                                        <button onClick={() => setIsRepComment(true)} className="p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"><Icon.Share className="w-[12px] h-[12px] fill-current" /> Trả lời</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>}
                {isRepComment && <div className="insertRepCommnet mt-3 duration-300">
                    <InsertComment userId={userId} parentId={data?._id} focus={true} shortId={shortId} setIsRepComment={setIsRepComment} />
                </div>}
            </div>
        </div>
    )
}

export default FiledContent
