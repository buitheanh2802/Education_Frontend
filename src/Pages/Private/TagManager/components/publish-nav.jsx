import React from 'react';

const PublishNav = () => {
    return (
        <div className="nav bg-[#dceafe] text-[15px] p-[10px] font-medium grid 
            grid-cols-[60px,1.5fr,1fr,0.75fr,0.75fr,1.2fr]">
            <div >STT</div>
            <div >Tên tag</div>
            <div >Số người theo dõi</div>
            <div >Số bài viết</div>
            <div >Số câu hỏi</div>
            <div className="text-center">Hành động</div>
        </div>
    );
};

export default PublishNav;