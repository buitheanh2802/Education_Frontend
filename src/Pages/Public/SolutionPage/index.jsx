import React, { useEffect, useState } from 'react'
import Navigation from 'src/Pages/Public/Commons/Navigation'
import { useHistory, useParams } from 'react-router'
import { path } from 'src/Constants/';
import SulotionApi from 'src/Apis/SulotionApi';
import { Icon } from 'src/Components/Icon';
import DetailSulotion from './Components/DetailSulotion';
import { useSelector } from 'react-redux';

const SolutionPage = () => {
    const { challengeId } = useParams();
    const [sulotion, setSulotion] = useState(null);
    const [isModel, setIsModel] = useState(null);
    const { profile } = useSelector(state => state.Auth);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                const { data: resData } = await SulotionApi.gets();
                const { data, status } = resData;
                if (status) return setSulotion(data);
            } catch (error) { }
        })()
    }, []);

    const pathName = [
        { path: `${path.CHALLENGE}/detail/${challengeId}`, value: "Chi tiết bài tập" },
        { path: `${path.CHALLENGE_SOLUTION}/${challengeId}`, value: "Giải pháp" }
    ]

    return (
        <>
            {isModel && <DetailSulotion isModel={isModel} setIsModel={setIsModel} />}
            <div className="container mx-auto mt-[55px] py-[20px]">
                <Navigation path={pathName} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                    {sulotion?.models?.map((item, index) => {
                        return (
                            <div key={index} className="shadow-sm hover:shadow-md duration-300 bg-white rounded  course-item p-[15px] relative border" >
                                <div className="mb-[15px] flex gap-2 items-center">
                                    <div className="w-[30px] h-[30px] border rounded-sm border-gray-100">
                                        <img className="w-full h-full object-cover" src={item?.challengeId?.avatar} />
                                    </div>
                                    <p className="text-sm text-gray-600">{item?.createBy?.fullname}</p>
                                </div>
                                <p className="my-[15px] text-[18px] font-medium text-gray-800">{item?.title}</p>
                                <div className="w-full h-[150px] sm:h-[190px] xl:h-[150px] bg-no-repeat bg-cover bg-center rounded cursor-pointer border-gray-100" style={{ backgroundImage: `url(${item?.challengeId?.avatar})` }}></div>
                                <div className="rounded border border-gray-100 px-2 py-2 text-base text-gray-600 my-[15px] font-light">
                                    <p>{item?.descriptions}</p>
                                    {item.votes.length === 0 && <span className="text-xs text-purple-400 mt-[10px] block">Chưa ai xem xét giải pháp này. Hãy là người đầu tiên</span>}
                                </div>
                                <div className="flex gap-[15px]">
                                    <button onClick={() => setIsModel(item?._id)} className="flex gap-[10px] flex-1 justify-center items-center bg-gray-100 hover:bg-gray-300 duration-300 hover:shadow text-blue-900 text-xs rounded h-[40px]">
                                        <Icon.Eye className="fill-current w-[12px]" /> Xem trước
                                    </button>
                                    <button
                                        onClick={() => {
                                            !profile && history.push(path.AUTH)
                                        }} className="flex gap-[10px] flex-1 justify-center items-center bg-gray-100 hover:bg-gray-300 duration-300 hover:shadow text-blue-900 text-xs rounded h-[40px]">
                                        <Icon.Chat className="fill-current w-[12px]" /> Phản hồi
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SolutionPage
