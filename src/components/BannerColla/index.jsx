import React from 'react';
import urlBannerColla from '../../assets/media/pictures/bg-bannerColla.png';

const BannerColla = () => {
    return (
        <div className="mx-[15px]">
            <div className="relative container mx-auto rounded-[15px] h-[200px] sm:h-[250px] lg:h-[300px] bg-cover bg-conter" style={{ backgroundImage: `url(${urlBannerColla})` }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 rounded-[15px] bg-black bg-opacity-[35%]">
                    <div className="w-[90%] sm:w-2/3 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <h2 className="mb-[5px] text-[20px] sm:text-[25px] lg:text-[28px] ">Bạn mong muốn tham gia vào cộng đồng của chúng tôi để chia sẻ kiến thức và giảng dạy?</h2>
                        <button className="mt-[20px] uppercase border rounded-[3px] px-[20px] py-[5px] lg:px-[30px] lg:py-[8px] text-white text-[16px] border-white hover:border-[#f44336] hover:bg-[#f44336] duration-500">đăng ký ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerColla
