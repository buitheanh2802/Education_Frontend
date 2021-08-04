import React from 'react';
import facebook_icon from '../../assets/media/icons/facebook.svg'
import email_icon from '../../assets/media/icons/email.svg'
import instagram_icon from '../../assets/media/icons/instagram.svg'
import link_icon from '../../assets/media/icons/link.svg'

const Contact = () => {
    return (
        <div className="mx-[15px]">
            <div className="container mx-auto mt-[70px] text-center md:px-[30px]">
                <h2 className="font-bold text-[36px]">Liên hệ với chúng tôi</h2>
                <p className="max-w-[760px] mt-[7px] mx-auto text-[16px] leading-[24px] text-gray-700">Để chất lượng học tập ngày càng nâng cao, nếu bạn có thắc mắc hoặc có ý kiến đóng góp, hãy liên hệ ngay với chúng tôi thông qua các nên tảng sau đây.</p>
                <div className="text-center mt-[40px] mb-[70px]">
                    <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px]  cursor-pointer"><img className="mt-[50%] translate-y-[-50%] ml-[50%] translate-x-[-50%]" src={facebook_icon} alt="" /></span>
                    <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px]  cursor-pointer"><img className="mt-[50%] translate-y-[-50%] ml-[50%] translate-x-[-50%]" src={email_icon} alt="" /></span>
                    <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px]  cursor-pointer"><img className="mt-[50%] translate-y-[-50%] ml-[50%] translate-x-[-50%]" src={instagram_icon} alt="" /></span>
                    <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px]  cursor-pointer"><img className="mt-[50%] translate-y-[-50%] ml-[50%] translate-x-[-50%]" src={link_icon} alt="" /></span>

                </div>
            </div>
        </div>
    )
}

export default Contact