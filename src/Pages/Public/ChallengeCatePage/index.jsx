import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from 'src/Components/Loading'
import { path } from 'src/Constants/'
import Navigation from 'src/Pages/Public/Commons/Navigation'
import { ActionGetsChallengeCate } from 'src/Redux/Actions/ChallengeCate.action'

const ChallengeCatePage = () => {
    const dispatch = useDispatch();
    const { challengeCates, isLoading } = useSelector(state => state.ChallengeCate);
    const pathName = [
        { path: path.CHALLENGE, value: "Danh mục bài tập" },
        { path: path.QUIZ, value: "Quiz" }
    ]

    useEffect(() => {
        if (challengeCates) return
        dispatch(ActionGetsChallengeCate())
    }, [dispatch])

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <Navigation path={pathName} />
            {isLoading ? <Loading className="w-[40px] h-[40px] fill-current text-gray-500 mx-auto mt-[20px]" /> :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                    {challengeCates?.map(item => {
                        return (
                            <div key={item?._id} className="shadow-sm bg-white rounded  course-item p-[15px] relative" >
                                <div className="w-full h-[220px] bg-no-repeat bg-cover   bg-center rounded  cursor-pointer" style={{ backgroundImage: `url(${item?.avatar})` }}> </div>
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
            }
        </div>
    )
}

export default ChallengeCatePage
