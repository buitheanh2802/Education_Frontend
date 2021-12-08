import React from 'react';

const PublishNav = () => {
    return (
        <div className="nav bg-[#dceafe] text-[15px] p-[10px] font-medium grid 
        grid-cols-[60px,1fr,1.5fr,2fr,0.5fr,1.2fr] ">
            <div >STT</div>
            <div >Tên đầy đủ</div>
            <div >Username</div>
            <div >Email</div>
            <div >Thời gian tạo</div>
            <div className="text-center ">Action</div>
        </div>
    );
};

export default PublishNav;