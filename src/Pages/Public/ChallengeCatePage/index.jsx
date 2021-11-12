import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { path } from 'src/Constants/'
import Navigation from 'src/Pages/Public/Commons/Navigation'
import { ActionGetsChallengeCate } from 'src/Redux/Actions/ChallengeCate.action'
import Skeleton from 'react-loading-skeleton'
import { Images } from 'src/Constants/'
import { SplitString } from 'src/Helpers/'

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
            <div className="mt-[25px]">
                <h3 className="text-[20px] font-bold text-blue-900">Quy trình làm việc</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[10px]">
                    <div className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[25px] relative border" >
                        <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded" style={{ backgroundImage: `url(${Images?.Step1})` }}> </div>
                        <div className="w-full" >
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-medium text-gray-800">Bước 1: Chọn một thử thách</span>
                            </div>
                            <p className="text-[16px] leading-[24px] mt-[4px] text-gray-500"> Chọn một thử thách, đọc kỹ mô tả. Đường dẫn giúp bạn điều hướng và bạn có thể kiếm được chứng chỉ sau khi hoàn thành tất cả các thử thách trong đường dẫn </p>
                        </div>
                    </div>
                    <div className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[25px] relative border" >
                        <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded" style={{ backgroundImage: `url(${Images?.Step2})` }}> </div>
                        <div className="w-full" >
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-medium text-gray-800">Bước 2: Làm việc một mình hoặc với một nhóm</span>
                            </div>
                            <p className="text-[16px] leading-[24px] mt-[4px] text-gray-500"> Tất cả các thử thách có thể được hoàn thành bởi một người, nhưng tinh thần đồng đội là rất quan trọng tại nơi làm việc. Nếu thử thách quá lớn đối với bạn, hãy rủ một người bạn cùng tham gia.</p>
                        </div>
                    </div>
                    <div className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[25px] relative border" >
                        <div className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded" style={{ backgroundImage: `url(${Images?.Step3})` }}> </div>
                        <div className="w-full" >
                            <div className="flex justify-between items-center mt-[12px]">
                                <span className="text-[20px] font-medium text-gray-800">Bước 3: Gửi các giải pháp của bạn và đưa ra phản hồi</span>
                            </div>
                            <p className="text-[16px] leading-[24px] mt-[4px] text-gray-500"> Khi bạn hoàn thành thử thách, hãy gửi giải pháp của bạn. Bạn cũng có thể kiểm tra xem có giải pháp nào hiện có hay không và cung cấp cho họ một số phản hồi. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[50px]" >
                <h3 className="text-[20px] font-bold text-blue-900">Bắt đầu thực hành với devstar</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[10px]">
                    {isLoading &&
                        <>
                            {[...Array(3)].map((item, index) => {
                                return (
                                    <div key={index} className="shadow-sm duration-300 bg-white rounded  course-item p-[25px] relative border">
                                        <div className="w-full h-[200px] sm:h-[220px] xl:h-[200px] bg-no-repeat bg-cover bg-center rounded cursor-pointer">
                                            <Skeleton className="z-0 h-full" />
                                        </div>
                                        <div className="w-full mt-[12px]">
                                            <Skeleton className="z-0 w-full py-[5px]" />
                                        </div>
                                        <Skeleton />
                                        <Skeleton className="z-0 w-2/3" />
                                    </div>
                                )
                            })}
                        </>
                    }
                    {challengeCates?.map(item => {
                        return (
                            <div key={item?._id} className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[25px] relative border" >
                                <div onClick={() => history.push(path.CHALLENGE + "/" + item?._id)} className="w-full h-[220px] bg-no-repeat bg-cover  bg-center rounded  cursor-pointer" style={{ backgroundImage: `url(${item?.avatar})` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <Link to={path.CHALLENGE + "/" + item?._id}><span className="text-[20px] font-medium  cursor-pointer text-gray-800 hover:text-blue-600">{item?.title}</span></Link>
                                    </div>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-500"> {SplitString(item?.descriptions, 200)} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChallengeCatePage
