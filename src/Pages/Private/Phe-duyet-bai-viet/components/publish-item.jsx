import React from 'react';
import Loading from 'src/Components/Loading';

const PublishItem = (props) => {
    const { } = props;
    return (
        <div className="nav bg-white border-b  text-[15px] p-[10px] grid grid-cols-10 ">
            <div className="col-span-1 font-medium">1</div>
            <div className="col-span-2">Tiêu đề</div>
            <div className="col-span-3">Nội dung</div>
            <div className="col-span-1">Tạo bởi</div>
            <div className="col-span-1">Thời gian tạo</div>
            <div className="col-span-2 text-center ">
                <button className="px-[10px] py-[5px] bg-green-600 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                    <Loading />
                    Chi tiết
                </button>
                <button className="px-[10px] py-[5px] bg-blue-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                    Duyệt
                </button>
                <button className="px-[10px] py-[5px] bg-red-500 disabled:bg-gray-400 mr-[5px] text-white rounded-md ">
                    Hủy bỏ
                </button>
            </div>
        </div>
    );
};

export default PublishItem;