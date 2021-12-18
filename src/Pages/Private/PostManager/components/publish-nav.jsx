import React from "react";

const PublishNav = () => {
  return (
    <div
      className="nav bg-[#dceafe] text-[15px] p-[10px] font-medium grid 
        grid-cols-[60px,1.5fr,0.8fr,0.5fr,1.1fr] "
    >
      <div>STT</div>
      <div>Tiêu đề</div>
      <div>Tạo bởi</div>
      <div>Thời gian tạo</div>
      <div className="text-center ">Action</div>
    </div>
  );
};

export default PublishNav;
