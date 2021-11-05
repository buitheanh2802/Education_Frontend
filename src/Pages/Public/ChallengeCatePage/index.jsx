import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { path } from 'src/Constants/'
import Navigation from 'src/Pages/Public/Commons/Navigation'
import { ActionGetsChallengeCate } from 'src/Redux/Actions/ChallengeCate.action'
import Skeleton from 'react-loading-skeleton'

const ChallengeCatePage = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { challengeCates, isLoading } = useSelector(state => state.ChallengeCate);
    const pathName = [
        { path: path.CHALLENGE, value: "Danh mục bài tập" },
        { path: path.QUIZ, value: "Quiz" }
    ]

    useEffect(() => {
        if (challengeCates) return
        dispatch(ActionGetsChallengeCate())
    }, [dispatch, challengeCates])

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <Navigation path={pathName} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[20px]">
                {isLoading && (
                    <>
                        {[...Array(4)].map((item, index) => {
                            return (
                                <div key={index} className="shadow-sm duration-300 bg-white rounded  course-item p-[15px] relative border">
                                    <div className="w-full h-[200px] sm:h-[220px] xl:h-[200px] bg-no-repeat bg-cover bg-center rounded cursor-pointer">
                                        <Skeleton className="h-full" />
                                    </div>
                                    <div className="w-full mt-[12px]">
                                        <Skeleton className="w-full py-[5px]" />
                                    </div>
                                    <Skeleton />
                                    <Skeleton className="w-2/3" />
                                </div>
                            )
                        })}
                    </>
                )}
                {challengeCates?.map(item => {
                    return (
                        <div key={item?._id} className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[15px] relative border" >
                            <div onClick={() => history.push(path.CHALLENGE + "/" + item?._id)} className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded  cursor-pointer" style={{ backgroundImage: `url(${item?.avatar})` }}> </div>
                            <div className="w-full" >
                                <div className="flex justify-between items-center mt-[12px]">
                                    <Link to={path.CHALLENGE + "/" + item?._id}><span className="text-[20px] font-bold  cursor-pointer text-gray-800 hover:text-blue-600">{item?.title}</span></Link>
                                </div>
                                <p className="text-[16px] leading-[24px] mt-[4px] text-gray-500"> {item?.descriptions} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChallengeCatePage
