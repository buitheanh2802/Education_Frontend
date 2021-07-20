import React from 'react';
import BannerUrl from '../../assets/media/pictures/banner-2.png';

const Banner = () => {
    return (
        <div className="mt-[60px] relative">
            <img className="w-full" src={BannerUrl} alt="" /> 
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-[35%]">
                <div className="w-2/3 absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 className="lg:text-[30px] font-medium">Những gì người khác làm được thì bạn cũng có thể làm được</h2>
                    <p className="text-[14px] sm:text-[16px] lg:mt-[15px]">Hãy bắt đầu ngay với chúng tôi để bạn có thể thoả sức sáng tạo với nhũng dòng code</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
