import React from 'react';

const PublishNav = () => {
    return (
        <div className="nav bg-[#dceafe] text-[15px] p-[10px] font-medium grid 
        grid-cols-[60px,1fr,2.5fr,0.5fr,0.5fr,1.2fr] ">
            <div >STT</div>
            <div >Tiêu đề</div>
            <div >Nội dung</div>
            <div >Tạo bởi</div>
            <div >Thời gian tạo</div>
            <div className="text-center ">Action</div>
        </div>
    );
};

export default PublishNav;