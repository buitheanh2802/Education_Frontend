import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import PointApi from 'src/Apis/PointApi';
import SulotionApi from 'src/Apis/SulotionApi';
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';
// import { timeFormatter } from 'src/Helpers/Timer';
import Comments from '../Comments';

const SolutionDetail = () => {
    const { solutionId } = useParams();
    const [sulution, setSulution] = useState(null);
    const { profile } = useSelector(state => state.Auth);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false)
    const history = useHistory();


    const handleVote = async () => {
        try {
            if (!profile) return history.push(path.AUTH)
            setIsLoading(true)
            await SulotionApi.upVote(solutionId);
            (sulution?.votes?.indexOf(profile?._id) >= 0)
                ? await PointApi.downPoint(profile?.username, 5)
                : await PointApi.upPoint(profile?.username, 5)
            setIsLoading(false)
            setIsSubmit(!isSubmit)
        } catch (error) { setIsLoading(false); }
    }

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const { data: resData } = await SulotionApi.get(solutionId);
                const { data, status } = resData;
                setIsLoading(false)
                if (status) return setSulution(data)
            } catch (error) { setIsLoading(false) }
        })()
    }, [isSubmit])

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <div className='grid grid-cols-3 gap-5'>
                <div className='col-span-2'>
                    <iframe className="w-full h-[450px] rounded border border-solid" src={sulution?.demoUrl} frameBorder="0"></iframe>
                    <div className='mt-5'>
                        <Comments userId={sulution?.createBy?._id} shortId={sulution?._id} />
                    </div>
                </div>
                <div className='sticky top-0'>
                    <div className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[15px] relative border" >
                        <div className="mb-[15px] flex gap-2 items-center">
                            <div className="w-[30px] h-[30px] border rounded-sm border-gray-100">
                                <img className="w-full h-full object-cover" src={sulution?.challengeId?.avatar} />
                            </div>
                            <p className="text-sm text-gray-600">{sulution?.createBy?.fullname}</p>

                        </div>
                        <p className="my-[15px] text-[18px] font-medium text-gray-800">{sulution?.title}</p>

                        <span className="mb-5 text-xs text-green-500 mt-[10px] block">{sulution?.descriptions}</span>
                        <div className="w-full h-[150px] sm:h-[190px] xl:h-[150px] bg-no-repeat bg-cover bg-center rounded cursor-pointer border-gray-100" style={{ backgroundImage: `url(${sulution?.challengeId?.avatar})` }}></div>

                        <div className="flex gap-[15px] mt-5">
                            <button onClick={handleVote} className={`${(sulution?.votes?.indexOf(profile?._id) >= 0) ? "text-blue-800" : "text-gray-700"} flex gap-[10px] flex-1 justify-center items-center bg-gray-100 hover:bg-gray-300 duration-300 hover:shadow text-xs rounded h-[40px]`}>
                                {isLoading ? <Icon.Loading className="fill-current w-[12px]" /> : <Icon.Like className="fill-current w-[12px]" />}
                                {(sulution?.votes?.indexOf(profile?._id) >= 0) ? sulution?.votes?.length : "Vote"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SolutionDetail
