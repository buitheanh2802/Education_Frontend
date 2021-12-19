import React, { useState } from 'react'
import { Icon } from 'src/Components/Icon'
import IntroUser from '../IntroUser'
import InsertComment from '../InsertComment'
import { Link, useHistory } from 'react-router-dom'
import { path } from 'src/Constants/'
import { useSelector } from 'react-redux'
import CommentsApi from 'src/Apis/CommentsApi'
import { timeFormatter } from 'src/Helpers/Timer'

const FiledContent = ({ data, shortId, userId }) => {
    const { profile } = useSelector(state => state.Auth);
    const history = useHistory();
    const [isRepComment, setIsRepComment] = useState(false);
    const [isLoading, setIsLoading] = useState(null);
    console.log(data)
    const like = async (dataLike) => {
        try {
            setIsLoading(dataLike)
            if (!profile) return history.push(path.AUTH);
            await CommentsApi.like(dataLike?.id)
            setIsLoading(null)
        } catch (error) { setIsLoading(null) }
    }

    const disLike = async (dataLike) => {
        try {
            setIsLoading(dataLike)
            if (!profile) return history.push(path.AUTH);
            await CommentsApi.dislike(dataLike?.id)
            setIsLoading(null)
        } catch (error) { setIsLoading(null) }
    }

    return (
        <div className="flex my-[20px] gap-3">
            <Link to={`/user/${data?.createBy?.username}`}><IntroUser className="max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px]" avatarUrl={data?.createBy?.avatar?.avatarUrl} fullname={data?.createBy?.fullname} /></Link>
            <div className="w-full">
                <div>
                    <h3 className="font-medium"><Link className='hover:text-blue-800' to={`/user/${data?.createBy?.username}`}>{data?.createBy?.fullname}</Link> - <span className='font-light text-sm text-gray-500'>{timeFormatter(data?.createdAt)}</span></h3>
                    <p className="text-gray-600">{data.content}</p>
                </div>
                <div className="mt-2 flex gap-5">
                    <button onClick={() => like({ id: data?._id, type: true })} className={`p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 ${data?.isLike && 'text-blue-600'}`}>
                        {((isLoading?.id === data?._id) && isLoading?.type) ? <Icon.Loading className="w-[12px] h-[12px] fill-current" /> : <Icon.Like className="w-[12px] h-[12px] fill-current" />} {data?.likes}
                    </button>
                    <button onClick={() => disLike({ id: data?._id, type: false })} className={`p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 ${data?.isDislike && 'text-blue-600'}`}>
                        {((isLoading?.id === data?._id) && !isLoading?.type) ? <Icon.Loading className="w-[12px] h-[12px] fill-current" /> : <Icon.Dislike className="w-[12px] h-[12px] fill-current" />} {data?.dislikes}
                    </button>
                    <button onClick={() => setIsRepComment(true)} className="p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"><Icon.Share className="w-[12px] h-[12px] fill-current" /> Trả lời</button>
                    
                </div>
                {data?.replyComments && <>
                    {data?.replyComments?.map((item, index) => {
                        return (
                            <div key={index} className="flex mt-[20px] gap-3">
                                <Link to={`/user/${item?.createBy?.username}`}><IntroUser className="max-w-[35px] max-h-[35px] min-w-[35px] min-h-[35px]" avatarUrl={item?.createBy?.avatar?.avatarUrl} fullname={item?.createBy?.fullname} /></Link>
                                <div className="w-full">
                                    <div>
                                        <h3 className="font-medium"><Link className='hover:text-blue-800' to={`/user/${item?.createBy?.username}`}>{item?.createBy?.fullname}</Link>  - <span className='font-light text-sm text-gray-500'>{timeFormatter(item?.createdAt)}</span></h3>
                                        <p className="text-gray-600">{item.content}</p>
                                    </div>
                                    <div className="mt-2 flex gap-5">
                                        <button onClick={() => like({ id: item?._id, type: true })} className={`p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 ${item?.isLike && 'text-blue-600'}`}>
                                            {((isLoading?.id === item?._id) && isLoading?.type) ? <Icon.Loading className="w-[12px] h-[12px] fill-current" /> : <Icon.Like className="w-[12px] h-[12px] fill-current" />} {item?.likes}
                                        </button>
                                        <button onClick={() => disLike({ id: item?._id, type: false })} className={`p-0 m-0 flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 ${item?.isDislike && 'text-blue-600'}`}>
                                            {((isLoading?.id === item?._id) && !isLoading?.type) ? <Icon.Loading className="w-[12px] h-[12px] fill-current" /> : <Icon.Dislike className="w-[12px] h-[12px] fill-current" />} {item?.dislikes}
                                        </button>
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
