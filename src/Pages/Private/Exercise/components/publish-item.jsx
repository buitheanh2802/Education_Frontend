import React from 'react';
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';
import { timeFormatter } from 'src/Helpers/Timer';
import { useHistory } from 'react-router-dom';

const PublishItem = ({ data, index }) => {
    const history = useHistory();
    return (
        <div key={data?._id} className="nav bg-white border-b text-[15px] p-[10px] grid grid-cols-[65px,1fr,4fr,1fr,0.5fr] items-center">
            <div className="font-medium pl-2">{index + 1}</div>
            <div className="mr-[30px]">
                <div className="h-[85px] rounded border border-gray-300 overflow-hidden">
                    <img className="object-cover w-full h-full" src={data?.avatar} alt={data?.title} />
                </div>
            </div>
            <div className="font-medium mr-[30px] text-blue-800 text-base">{data?.title}</div>
            <div className="text-[13px]">{timeFormatter(data?.createdAt)}</div>
            <div className="text-[13px] flex justify-center">
                <button onClick={() => history.push(`${path.SULOTION_MANAGER}/${data?._id}`)} className="h-[35px] px-2 flex items-center disabled:bg-gray-400 mr-[5px] text-gray-400 hover:text-blue-600 rounded-md" title="Chỉnh sửa">
                    <Icon.Form className="w-[28px] fill-current" />
                </button>
            </div>
        </div>
    );
};

export default PublishItem;