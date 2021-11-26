import React from 'react';
import { Link } from 'react-router-dom';
import Loading from 'src/Components/Loading';
import { timeFormatter } from 'src/Helpers/Timer';

const PublishItem = (props) => {
    const { title,content,index,createBy,createAt } = props;
    return (
        <div className="nav bg-white border-b  text-[15px] p-[10px] grid 
        grid-cols-[40px,1fr,2fr,1fr,1fr,1.2fr] ">
            <div className="font-medium ">{index}</div>
            <div className="font-medium mr-[30px] ">{title}</div>
            <div dangerouslySetInnerHTML={{__html : content}} className="mr-[30px] text-ellipsis "></div>
            <div className="">
                <Link className="text-blue-500 underline " to="">{createBy.fullname}</Link>
            </div>
            <div className="text-[13px] ">{timeFormatter(createAt)}</div>
            <div className="">
                <button className="h-[35px] px-[10px] mb-[5px] inline-flex items-center py-[5px] bg-green-600 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                    
                    Chi tiết
                </button>
                <button className="h-[35px] px-[10px] mb-[5px] inline-flex items-center py-[5px] bg-blue-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                    
                    Duyệt
                </button>
                <button className="h-[35px] px-[10px] mb-[5px] inline-flex items-center py-[5px] bg-red-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                    
                    Hủy bỏ
                </button>
            </div>
        </div>
    );
};

export default PublishItem;