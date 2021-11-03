import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router';
import Loading from 'src/Components/Loading';
import { path } from 'src/Constants/';
import { ActionGetsChallenge } from 'src/Redux/Actions/Challenge.action';

const ChallengePage = () => {
    const dispatch = useDispatch();
    const { cateid } = useParams();
    const history = useHistory();
    const { challenges, isloading } = useSelector(state => state.Challenge);

    useEffect(() => {
        dispatch(ActionGetsChallenge());
    }, [dispatch])

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            {isloading ? <Loading className="w-[40px] h-[40px] fill-current text-gray-500 mx-auto mt-[20px]" /> :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                    {challenges?.map(item => {
                        return (
                            <div key={item?._id} className="shadow-sm bg-white rounded  course-item p-[15px] relative" >
                                <div onClick={() => history.push(`${path.CHALLENGE}/detail/${item?._id}`)} className="w-full h-[220px] bg-no-repeat bg-cover bg-center rounded cursor-pointer" style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2yuHuE_KiWXOfDSMKzBFbAFiolnyJ9gtbQ&usqp=CAU)` }}> </div>
                                <div className="w-full" >
                                    <div className="flex justify-between items-center mt-[12px]">
                                        <h2 onClick={() => history.push(`${path.CHALLENGE}/${cateid}/${item?._id}`)} className="text-[20px] font-bold  cursor-pointer hover:text-blue-600">{item?.title}</h2>
                                    </div>
                                    <p className="text-[14px] mt-[4px] text-green-500">Tác giả: Nguyễn Thành Đạt</p>
                                    <p className="text-[16px] leading-[24px] mt-[4px] text-gray-700 mb-[100px]">{item?.descriptions}</p>
                                    <div className="w-full pr-[30px] absolute bottom-[15px]">
                                        <div className="mt-[35px] rounded-[5px] border border-gray-300  pt-[12px] pb-[19px] w-full  ">
                                            <p className={`text-[12px] px-[15px] ${item?.level > 4 ? "text-red-500" : item?.level > 2 ? "text-yellow-500" : "text-green-500"}`}>
                                                {item?.level > 4 ? "Nâng cao:" : item?.level > 2 ? "Trung cấp" : "Sơ cấp"}
                                            </p>
                                            <div className="grid grid-cols-5 gap-[10px] px-[15px] mt-[6px]">
                                                <span className={`h-[5px] bg-green-500 rounded-[3px]`}></span>
                                                <span className={`h-[5px] bg-green-500 rounded-[3px]`}></span>
                                                <span className={`h-[5px] bg-gray-300 rounded-[3px]`}></span>
                                                <span className={`h-[5px] bg-gray-300 rounded-[3px]`}></span>
                                                <span className={`h-[5px] bg-gray-300 rounded-[3px]`}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>}
        </div>
    )
}

export default ChallengePage
