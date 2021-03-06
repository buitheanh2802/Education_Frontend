import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router'
import { path } from 'src/Constants/';
import { ActionGetChallenge } from 'src/Redux/Actions/Challenge.action';
import Navigation from '../Commons/Navigation';
import Skeleton from 'react-loading-skeleton'
import { Icon } from 'src/Components/Icon';
import { OpenWindownTab } from 'src/Helpers/';
import ChallengeApi from 'src/Apis/ChallengeApi';
import ModalSolution from './Components/ModalSolution';

const DetailChallenge = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const { profile } = useSelector(state => state.Auth);
    const [challenge, setChallenge] = useState(null);
    const [isDownLoad, setIsDownLoad] = useState(null);
    const [isSubmit, setIsSubmit] = useState(null);
    const [isShowModle, setIsShowModle] = useState(false);
    const { id } = useParams();

    const pathName = [
        { path: `${path.CHALLENGE}/detail/${id}`, value: "Chi tiết bài tập" },
        { path: `${path.CHALLENGE_SOLUTION}/${id}`, value: "Giải pháp" }
    ]

    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(ActionGetChallenge(id));
            const { data, status } = payload;
            if (status) return (() => {
                setChallenge(data)
                setIsDownLoad(data?.submitedBy?.includes(profile?._id));
                setIsSubmit(data?.solutionSubmitedBy?.includes(profile?._id))
                setIsLoading(true);
            })();
            history.push(path.NOT_FOUND)
        })()
    }, [dispatch, history, profile?._id, id])

    const handleSubmit = async () => {
        if (isDownLoad) {
            setIsShowModle(true);
        } else {
            if (!profile) return history.push(path.AUTH);
            setIsDownLoad(true);
            OpenWindownTab(challenge?.resourceUrl);
            await ChallengeApi.addSubmit(id);
        }
    }

    return (
        <>
            {isShowModle && <ModalSolution isShowModle={isShowModle} setIsShowModle={setIsShowModle} />}
            <div className="container mx-auto mt-[55px] py-[20px]">
                {isLoading ? <Navigation path={pathName} /> : <Skeleton className="h-full py-[15px] border" />}
                <div className="mt-[20px]">
                    <div className="bg-white rounded border overflow-hidden">
                        {challenge ? <iframe className="h-[400px] w-full border-0 p-0 m-0" src={challenge?.figmaUrl}></iframe> : <Skeleton className="h-[400px] w-full" />}
                    </div>
                    {challenge ?
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[20px]">
                            <div className="rounded bg-opacity-50 border border-green-200 px-[15px] py-[10px] md:col-span-2">
                                <h3 className="text-[22px] text-gray-800 font-medium">{challenge?.title}</h3>
                                <div className="flex text-[14px] gap-[15px] mt-[5px]">
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

                                <div className="grid grid-cols-5 gap-[10px] w-1/2 mt-[10px]">
                                    {[...Array(5)].map((arr, index) => <span key={index} className={`${index < challenge?.level ? (challenge?.level > 4 ? "bg-red-500" : challenge?.level > 2 ? "bg-yellow-500" : "bg-green-500") : "bg-gray-300"} h-[5px] rounded-[3px] `}></span>)}
                                </div>

                                <p className="mt-[20px] text-gray-600">{challenge?.descriptions}</p>
                            </div>
                            <div className="rounded border border-blue-200 px-[15px] py-[10px]">
                                <h2 className="font-medium text-[18px] text-blue-900">Làm thế nào để bắt đầu thử thách ?</h2>
                                <div className="px-[5px] leading-[30px] mt-[10px]">
                                    <p><span className="font-medium">1.</span> Đọc chi tiết của thử thách </p>
                                    <p><span className="font-medium">2.</span> Bắt đầu thử thách và tải xuống các tài nguyên </p>
                                    <p><span className="font-medium">3.</span> Kiểm tra thiết kế trên Figma</p>
                                </div>

                                <div className="mt-[15px]">
                                    {isDownLoad && <button onClick={() => OpenWindownTab(challenge?.figmaUrl)} className="flex items-center justify-center gap-[10px] border border-yellow-600 text-yellow-600 w-full rounded-[3px] py-[6px] mb-[5px]">
                                        <img className="w-[15px] rounded-[3px]" src="https://devchallenges.io/figma.png" /> Thiết kế
                                    </button>}
                                    {!isSubmit && <button onClick={handleSubmit} className="flex items-center justify-center gap-[10px] bg-blue-600 bg-opacity-80 text-white w-full rounded-[3px] py-[8px]">
                                        {isDownLoad
                                            ? <><Icon.LightBulb className="w-[15px] fill-current" /> Gửi giải pháp</>
                                            : <><Icon.DownLoad className="w-[15px] fill-current" /> Bắt đầu và tải xuống</>
                                        }
                                    </button>}
                                </div>
                            </div>
                        </div> :
                        <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
                            <div className="col-span-2" ><Skeleton className="h-[150px]" /></div>
                            <Skeleton className="h-[150px]" />
                        </div>}
                </div>
            </div>
        </>
    )
}

export default DetailChallenge