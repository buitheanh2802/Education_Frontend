import React from 'react';

const PublishNav = () => {
    return (
        <div className="nav bg-[#dceafe] text-[15px] p-[10px] font-medium grid grid-cols-10 ">
            <div className="col-span-1">STT</div>
            <div className="col-span-2">Tiêu đề</div>
            <div className="col-span-3">Nội dung</div>
            <div className="col-span-1">Tạo bởi</div>
            <div className="col-span-1">Thời gian tạo</div>
            <div className="col-span-2 text-center ">Action</div>
        </div>
    );
};

export default PublishNav;