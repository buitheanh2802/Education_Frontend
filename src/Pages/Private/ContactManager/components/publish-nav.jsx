import React from "react";

const PublishNav = () => {
  return (
    <div
      className="nav bg-[#dceafe] text-[15px] p-[10px] font-medium grid 
        grid-cols-[60px,1.5fr,0.7fr,0.9fr,0.6fr,1.2fr] "
    >
      <div>VS</div>
      <div>Tiêu đề</div>
      <div>Người gửi</div>
      <div>Email</div>
      <div>Thời gian tạo</div>
      <div className="text-center ">Action</div>
    </div>
  );
};

export default PublishNav;
