import React, { useState } from 'react';
import { Icon } from 'src/Components/Icon';
import { timeFormatter } from 'src/Helpers/Timer';
import FormEdit from '../Modals/FormEdit';
import ChallengeApi from 'src/Apis/ChallengeApi';

const PublishItem = ({ data, index, isReload, setIsReload }) => {
    const [isModals, setIsModals] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const deleteItem = async (id) => {
        const comform = window.confirm('Xác nhận xoá bài tập')
        if (comform) {
            try {
                setIsLoading(true)
                await ChallengeApi.delete(id);
                setIsReload(!isReload)
                setIsLoading(false)
            } catch (error) { }
        }
    }

    return (
        <>
            {isModals && <FormEdit isModals={isModals} setIsModals={setIsModals} />}
            <div className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[65px,1fr,4fr,1fr,0.5fr] items-center">
                <div className="font-medium pl-2">{index + 1}</div>
                <div className="mr-[30px]">
                    <div className="h-[85px] rounded border border-gray-300 overflow-hidden">
                        <img className="object-cover w-full h-full" src={data?.avatar} alt={data?.title} />
                    </div>
                </div>
                <div className="font-medium mr-[30px] text-blue-800 text-base">{data?.title}</div>
                <div className="text-[13px]">{timeFormatter(data?.createdAt)}</div>
                <div className="text-[13px] flex justify-center">
                    <button onClick={() => deleteItem(data?._id)} className="h-[35px] px-2 flex items-center disabled:bg-gray-400 mr-[5px] text-red-400 hover:text-red-600 rounded-md" title="Chỉnh sửa">
                        {isLoading
                            ? <Icon.Loading className="w-[25px] fill-current" />
                            : <Icon.Detele className="w-[25px] fill-current" />}
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