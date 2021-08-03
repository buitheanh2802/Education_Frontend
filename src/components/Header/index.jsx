import React from 'react';
import Nav from '../Nav';

const Header = () => {
    return (
        <header className="h-screen bg-center bg-cover relative" style={{ backgroundImage: "linear-gradient(rgba(4, 9 , 30, 0.55), rgba(4, 9, 30, 0.55)), url(https:thanhdat19521.github.io/eduford/images/banner.png)" }}>
            <Nav />
            <div className="text-center px-[15px] absolute top-1/2 right-0 left-0 transform -translate-y-1/2">
                <h1 className="text-[#ffffff] text-[35px] lg:text-[60px] font-bold mb-[15px]">Học lập trình ngay hôm nay</h1>
                <p className="text-[#ffffff] text-[14px] sm:text-[16px] sm:w-[58%] mx-auto mb-[60px]">Lập trình hiện là một trong những ngành nghề phát triển không chỉ trong nước mà còn cả trên thế giới.
                    Bạn có ước mơ trở thành môt lập trinh viên chuyên nghiêp? <br />
                    Hãy bắt đầu ngay với Eduford.</p>
                <button className="border rounded-[3px] px-[20px] py-[5px] lg:px-[45px] lg:py-[8px] text-white text-[16px] border-1 border-white hover:border-[#f44336] hover:bg-[#f44336] duration-500">Tìm hiểu thêm</button>
            </div>
        </header>
    );
}

export default Header
