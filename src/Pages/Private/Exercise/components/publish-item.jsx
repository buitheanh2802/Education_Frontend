import React, { useState } from 'react';
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';
import { timeFormatter } from 'src/Helpers/Timer';
import { Link, useHistory } from 'react-router-dom';
import FormCateChallen from '../Modals/FormCateChallen';
import ChallengeCateApi from 'src/Apis/ChallengeCateApi';

const PublishItem = ({ data, index, isReload, setIsReload }) => {
    const history = useHistory();
    const [isModals, setIsModals] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const deleteCate = async (id) => {
        try {
            if (!window.confirm('Xác nhập xoá thể loại bài tập')) return
            setIsLoading(true)
            await ChallengeCateApi.delete(id)
            setIsLoading(false)
            setIsReload(!isReload)
        } catch (error) { setIsLoading(false) }
    }
    return (
        <>
            {isModals && <FormCateChallen isModals={isModals} setIsModals={setIsModals} />}
            <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[65px,1fr,4fr,1fr,0.5fr] items-center">
                <div className="font-medium pl-2">{index + 1}</div>
                <div className="mr-[30px]">
                    <div className="h-[85px] rounded border border-gray-300 overflow-hidden">
                        <img onClick={() => history.push(`${path.SULOTION_MANAGER}/${data?._id}`)} className="object-cover w-full h-full cursor-pointer" src={data?.avatar} alt={data?.title} />
                    </div>
                </div>
                <div className="font-medium mr-[30px] text-blue-900 hover:underline text-base cursor-pointer">
                    <Link to={`${path.SULOTION_MANAGER}/${data?._id}`}>{data?.title}</Link>
                </div>
                <div className="text-[13px]">{timeFormatter(data?.createdAt)}</div>
                <div className="text-[13px] flex justify-center">
                    <button onClick={() => deleteCate(data?._id)} className="h-[35px] px-2 flex items-center disabled:bg-gray-400 mr-[5px] text-red-400 hover:text-red-600 rounded-md" title="Chi tiết">
                        {isLoading ? <Icon.Loading className="w-[25px] fill-current" /> : <Icon.Detele className="w-[25px] fill-current" />}
                    </button>
                    <button onClick={() => setIsModals(data)} className="h-[35px] px-2 flex items-center disabled:bg-gray-400 mr-[5px] text-yellow-400 hover:text-blue-600 rounded-md" title="Chỉnh sửa">
                        <Icon.Pen className="w-[20px] fill-current" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default PublishItem;