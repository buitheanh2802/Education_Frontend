import React from 'react';

const PublishNav = () => {
    return (
        <div className="nav bg-[#dceafe] border-b text-[15px] p-[10px] grid grid-cols-[65px,1fr,4fr,1fr,0.5fr] items-center font-medium">
            <div >STT</div>
            <div >Ảnh</div>
            <div >Tên bài tập</div>
            <div >Thời gian tạo</div>
            <div className="text-center">Thao tác</div>
        </div>
    );
};

export default PublishNav;