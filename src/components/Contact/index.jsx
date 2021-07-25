import React from 'react';
import urlFb from '../../assets/media/icons/facebook.png';
import urlIg from '../../assets/media/icons/instagram.png';
import urlEmail from '../../assets/media/icons/email.png';
import urlLink from '../../assets/media/icons/link.png';

const Contact = () => {
    return (
        <div className="mx-[15px]">
            <div className="container mx-auto text-center">
                <h2 className="text-[20px] sm:text-[30px] lg:text-[36px] font-medium">Liên hệ với chúng tôi</h2>
                <p class="text-gray-500 text-[14px] sm:text-[16px] w-[65%] mx-auto">Để chất lượng học tập ngày càng nâng cao, nếu bạn có thắc mắc hoặc có ý kiến đóng góp, hãy liên hệ ngay với chúng tôi thông qua các nên tảng sau đây.</p>
                <div>
                    <button className="border border-solid border-[#f44336] rounded-full w-[25px] h-[25px]"><img src={urlFb} alt="" /></button>
                    <button><img src={urlIg} alt="" /></button>
                    <button><img src={urlEmail} alt="" /></button>
                    <button><img src={urlLink} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Contact
