import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import PostApi from 'src/Apis/PostApi';
import QuestionApi from 'src/Apis/QuestionApi';
import { Icon } from 'src/Components/Icon';

const Dashboard = () => {
    const { profile } = useSelector(({ Auth }) => Auth);
    const [postTrend, setPostTrend] = useState(null);
    const [questionTrend, setQuestionTrend] = useState(null)

    console.log(questionTrend)

    useEffect(() => {
        (async () => {
            try {
                const { data } = await PostApi.getPostTren();
                if (data?.data?.models?.length > 0) {
                    setPostTrend(data?.data?.models[0])
                }
            } catch (error) { }

            try {
                const { data } = await QuestionApi.getQuestionTren();
                if (data?.data?.models?.length > 0) {
                    setQuestionTrend(data?.data?.models[0])
                }
            } catch (error) { }
        })()
    }, [])
    return (
        <>
            <div className="shadow-lg rounded-xl p-4 bg-white w-full">
                <h2 className='text-lg'>Xin chào <span className='text-blue-600'>{profile?.fullname}</span> ! </h2>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                <div>
                    <div className='shadow-lg rounded-xl p-4 bg-white w-full'>
                        <p className='text-green-900'>Bài viết được quan tâm nhiều:</p>
                        <div className='mt-5'>
                            <h3 className='text-lg hover:text-blue-600 border-b pb-2 mb-2'>
                                <span className='font-medium'>Tiêu đề: </span>
                                <Link to={`/posts/${postTrend?.slug + "-" + postTrend?.shortId}`}>{postTrend?.title}</Link>
                            </h3>
                            <p className='font-medium'>Lượng tương tác:</p>
                            <ul className='text-gray-500 font-light text-sm lg:text-base pl-2'>
                                <li className='flex items-center gap-3 my-1'><Icon.Eye className="w-3 fill-current" /> {postTrend?.views} lượt xem</li>
                                <li className='flex items-center gap-3 my-1'><Icon.Chat className="w-3 fill-current" /> {postTrend?.comments} bình luận</li>
                                <li className='flex items-center gap-3 my-1'><Icon.Like className="w-3 fill-current" /> {postTrend?.likes} Yêu thích</li>
                                <li className='flex items-center gap-3 my-1'><Icon.Bookmark className="w-3 fill-current" /> {postTrend?.bookmarks} Lưu bài viết</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='shadow-lg rounded-xl p-4 bg-white w-full'>
                        <p className='text-red-900'>Câu hỏi được quan tâm nhiều nhất:</p>
                        <div className='mt-5'>
                            <h3 className='text-lg hover:text-blue-600 border-b pb-2 mb-2'>
                                <span className='font-medium'>Tiêu đề: </span>
                                <Link to={`/question/${questionTrend?.slug + "-" + questionTrend?._id}`}>{questionTrend?.title}</Link></h3>
                            <p className='font-medium'>Lượng tương tác:</p>
                            <ul className='text-gray-500 font-light text-sm lg:text-base pl-2'>
                                <li className='flex items-center gap-3 my-1'><Icon.Eye className="w-3 fill-current" /> {questionTrend?.views} lượt xem</li>
                                <li className='flex items-center gap-3 my-1'><Icon.Like className="w-3 fill-current" /> {questionTrend?.countLikes} Yêu thích</li>
                                <li className='flex items-center gap-3 my-1'><Icon.Bookmark className="w-3 fill-current" /> {questionTrend?.bookmarks?.length} Lưu bài viết</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
