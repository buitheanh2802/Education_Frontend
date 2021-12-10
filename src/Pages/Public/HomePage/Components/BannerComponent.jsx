import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ParticleNetwork } from 'src/Helpers/Canvas';

const BannerComponent = () => {
    useEffect(() => {
        ParticleNetwork('particle-canvas', 'slow');
    }, []);

    return (
        <div className="relative">
            <div className="w-full h-screen bg-gradient-to-tl from-[#7e588b] via-[#4193aa] to-[#67d4a7]" id="particle-canvas"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-10">
                <div className="absolute top-1/2 transform translate-y-[-55%] md:translate-y-[-70%] left-0 right-0">
                    <div className="container mx-auto text-white">
                        <h3 className='text-[35px] xl:text-[50px] mb-[10px] font-bold'>Cộng đồng đam mê lập trình.</h3>
                        <p className='text-[18px] xl:text-[20px] mb-[20px] sm:mb-[10px]'>Bạn đã sẵn sàng để trở thành một lập trình viên chuyên nghiệp trong tương lai.</p>
                        <p className='text-[14px] sm:text-[16px] italic mb-[30px]'>"Hãy theo đuổi ước mơ ! thành công sẽ theo đuổi bạn."</p>
                        <Link to="/posts" className="bg-gradient-to-b from-[#1273eb] to-[#0051b5] hover:to-[#1273eb] hover:from-[#0051b5] uppercase rounded mt-[20px] px-[20px] py-[10px]">
                            Tham gia ngay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerComponent
