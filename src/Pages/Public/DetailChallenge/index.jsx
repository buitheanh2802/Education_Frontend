import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { path } from 'src/Constants/';
import { ActionGetChallenge } from 'src/Redux/Actions/Challenge.action';
import Navigation from '../Commons/Navigation';
import Skeleton from 'react-loading-skeleton'
import { Icon } from 'src/Components/Icon';
import { OpenWindownTab } from 'src/Helpers/';

const DetailChallenge = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const { profile } = useSelector(state => state.Auth);
    const [challenge, setChallenge] = useState(null);
    const [isDownLoad, setIsDownLoad] = useState(null);
    const { id } = useParams();

    const pathName = [
        { path: `${path.CHALLENGE}/detail/${id}`, value: "Chi tiết bài tập" },
        { path: `${path.CHALLENGE_SOLUTION}/${id}`, value: "Giải pháp" }
    ]

    const button = isDownLoad ? {
        icon: Icon.LightBulb,
        value: "Nộp bài", path: "/"
    } : {
        icon: Icon.DownLoad,
        value: "Tải bài tập",
        event: async () => {
            OpenWindownTab(challenge?.resourceUrl);
            // phần này call api xác nhận đã tải bài tập
        }
    }

    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(ActionGetChallenge(id));
            const { data, status } = payload;
            if (status) return (() => {
                setChallenge(data)
                setIsDownLoad(data?.submitedBy?.includes(profile?._id));
                setIsLoading(true);
            })();
            history.push(path.NOT_FOUND)
        })()
    }, [dispatch, history, profile?._id, id])

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            {isLoading ? <Navigation path={pathName} button={(profile) ? button : null} /> : <Skeleton className="h-full py-[15px] border" />}
            <div className="mt-[20px]">
                <div className="bg-white rounded border overflow-hidden">
                    {challenge ? <iframe className="h-[400px] w-full border-0 p-0 m-0" src={challenge?.figmaUrl}></iframe> : <Skeleton className="h-[400px] w-full" />}
                </div>
                {challenge ?
                    <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
                        <div className="rounded bg-green-50 bg-opacity-50 border border-green-200 px-[15px] py-[10px] col-span-2">
                            <h3 className="text-[22px] text-gray-800 font-medium">{challenge?.title}</h3>
                            <div className="flex text-[14px] gap-[15px]">
                                <p className="font-medium">Tương tác: </p>
                                <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                    <Icon.DownLoad className="fill-current w-[18px]" />
                                    <span>{challenge?.submitedBy?.length}</span>
                                </div>
                                <div className="flex items-center gap-[5px] text-[#5f5f5f]">
                                    <Icon.Save className="fill-current w-[15px]" />
                                    <span>{challenge?.solutionSubmitedBy?.length}</span>
                                </div>
                            </div>

                            <p className="mt-[5px] text-gray-600">{challenge?.descriptions}</p>

                            <div className="grid grid-cols-5 gap-[10px] w-1/2 mt-[25px]">
                                {[...Array(5)].map((arr, index) => <span key={index} className={`${index < challenge?.level ? (challenge?.level > 4 ? "bg-red-500" : challenge?.level > 2 ? "bg-yellow-500" : "bg-green-500") : "bg-gray-300"} h-[5px] rounded-[3px] `}></span>)}
                            </div>
                        </div>
                        <div className="rounded border border-blue-200">
                            <div className="bg-blue-400 px-[15px] py-[10px] rounded-t bg-gradient-to-b from-blue-50 to-blue-200">
                                {challenge?.createBy?.avatar?.avatarUrl
                                    ? <div className="w-[60px] h-[60px] rounded-full border-[3px] overflow-hidden mx-auto">
                                        <img className="w-full h-full object-cover" src="https://tse4.mm.bing.net/th?id=OIP.02MuUrbEnxLo5Bln0b8hIgHaFj&pid=Api&P=0&w=221&h=166" alt="" />
                                    </div> :
                                    <div className="w-[60px] h-[60px] rounded-full border-[3px] overflow-hidden mx-auto flex items-center justify-center text-gray-600 bg-gray-300">
                                        <span className="text-[20px]">{challenge?.createBy?.fullname?.slice(0, 2)?.toUpperCase()}</span>
                                    </div>}
                            </div>
                            <div className="col-span-1 px-[15px] py-[10px]">
                                <div className="pt-[10px] flex justify-between items-center">
                                    <h5 className="font-medium text-blue-800">{challenge?.createBy?.fullname}</h5>
                                    <button className="px-[20px] py-[5px] rounded border text-[14px] text-gray-600 hover:text-white hover:bg-blue-500">+ Theo dõi</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
                        <div className="col-span-2" ><Skeleton className="h-[150px]" /></div>
                        <Skeleton className="h-[150px]" />
                    </div>}
            </div>
        </div>
    )
}

export default DetailChallenge
