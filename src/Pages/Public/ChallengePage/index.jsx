import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import { path } from 'src/Constants/';
import { ActionGetsChallenge } from 'src/Redux/Actions/Challenge.action';
import { resetChallenge } from 'src/Redux/Slices/Challenge.slice';
import PathContent from '../Commons/PathContent';
import Skeleton from 'react-loading-skeleton'
import { ActionGetChallengeCate } from 'src/Redux/Actions/ChallengeCate.action';

const ChallengePage = () => {
    const dispatch = useDispatch();
    const { cateid } = useParams();
    const [routeName, setRouteName] = useState(null)
    const history = useHistory();
    const { challenges, isLoading } = useSelector(state => state.Challenge);

    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(ActionGetChallengeCate(cateid));
            const { data, status } = payload;
            if (status) return setRouteName(data?.title)
            setRouteName("Danh sách bài tập")
        })()

        dispatch(ActionGetsChallenge(cateid));
        return () => dispatch(resetChallenge());
    }, [dispatch, cateid])


    const pathName = [
        { path: path.CHALLENGE, value: "Danh mục bài tập" },
        { path: `${path.CHALLENGE}/${cateid}`, value: routeName }
    ]

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            {routeName ? <PathContent path={pathName} /> : <Skeleton className="h-full py-[15px] border" />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                {isLoading && (
                    <>
                        {[...Array(3)].map((item, index) => {
                            return (
                                <div key={index} className="shadow-sm duration-300 bg-white rounded course-item p-[15px] relative border">
                                    <div className="w-full h-[200px] sm:h-[220px] xl:h-[200px] bg-no-repeat bg-cover bg-center rounded cursor-pointer">
                                        <Skeleton className="h-full border" />
                                    </div>
                                    <div className="w-full mt-[12px]">
                                        <Skeleton className="w-full py-[5px]" />
                                    </div>
                                    <Skeleton className="w-1/2" />
                                    <Skeleton count={2} />
                                    <Skeleton className="py-[20px] mt-[20px]" />
                                </div>
                            )
                        })}
                    </>
                )}
                {challenges?.map(item => {
                    return (
                        <div key={item?._id} className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[15px] relative border" >
                            <div onClick={() => history.push(`${path.CHALLENGE}/detail/${item?._id}`)} className="w-full h-[200px] sm:h-[220px] xl:h-[200px] bg-no-repeat bg-cover bg-center rounded cursor-pointer" style={{ backgroundImage: `url(${item?.avatar})` }}></div>
                            <div className="w-full" >
                                <div className="flex justify-between items-center mt-[12px]">
                                    <h2 onClick={() => history.push(`${path.CHALLENGE}/detail/${item?._id}`)} className="text-[20px] font-bold  cursor-pointer hover:text-blue-600">{item?.title}</h2>
                                </div>
                                <p className="text-[14px] mt-[4px] text-green-500">Tác giả: {item?.createBy?.fullname?.length === 0 ? "Devstar channel" : item?.createBy?.fullname}</p>
                                <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[80px]">{item?.descriptions}</p>
                                <div className="w-full pr-[30px] absolute bottom-[15px]">
                                    <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                        <p className={`text-[12px] px-[15px] ${item?.level > 4 ? "text-red-500" : item?.level > 2 ? "text-yellow-500" : "text-green-500"}`}>
                                            {item?.level > 4 ? "Nâng cao" : item?.level > 2 ? "Trung cấp" : "Sơ cấp"}:
                                        </p>
                                        <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                            {[...Array(5)].map((arr, index) => <span key={index} className={`${index < item?.level ? (item?.level > 4 ? "bg-red-500" : item?.level > 2 ? "bg-yellow-500" : "bg-green-500") : "bg-gray-300"} h-[5px] rounded-[3px] `}></span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default ChallengePage
