import React from 'react';

const Contact = () => {
    return (
        <div className="mx-[15px]">
            <div className="container mx-auto mt-[70px] text-center md:px-[30px]">
                <h2 className="font-bold text-[36px]">Liên hệ với chúng tôi</h2>
                <p className="max-w-[760px] mt-[7px] mx-auto text-[16px] leading-[24px] text-gray-700">Để chất lượng học tập ngày càng nâng cao, nếu bạn có thắc mắc hoặc có ý kiến đóng góp, hãy liên hệ ngay với chúng tôi thông qua các nên tảng sau đây.</p>
                <div className="text-center mt-[40px] mb-[70px]">
                    <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="fa fa-facebook-f mt-[50%] translate-y-[-50%]"></i></span>
                    <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="far fa-envelope mt-[50%] translate-y-[-50%]"></i></span>
                    <span className=" inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="fa fa-instagram mt-[50%] translate-y-[-50%]"></i></span>
                    <span className="inline-block w-[45px] h-[45px] rounded-full border border-red-500 mx-2 sm:mx-[16px] text-red-500 hover:bg-red-500 hover:text-white"><i className="fa fa-link mt-[50%] translate-y-[-50%]"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Contact