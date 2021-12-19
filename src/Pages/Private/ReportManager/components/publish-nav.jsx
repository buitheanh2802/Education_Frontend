import React from 'react';

const PublishNav = ({ setChecked }) => {
    const handelChecked = (e) => {
        setChecked(e.target.checked)
    }
    return (
        <div className="nav bg-[#dceafe]  gap-3 text-[15px] p-[10px] font-medium grid grid-cols-[60px,1fr,3fr,1.2fr,0.5fr]">
            <div className='pl-2'><input type="checkbox" className='cursor-pointer' onChange={handelChecked} /></div>
            <div>Người báo cáo</div>
            <div>Nội dung báo cáo</div>
            <div className='text-center'>Thời gian</div>
            <div className="text-center ">Action</div>
        </div>
    );
};

export default PublishNav;