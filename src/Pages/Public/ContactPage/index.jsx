import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'
import { path, Images } from 'src/Constants/'
const ContactPage = () => {
return (
<div className="">
    <div className="relative text-center  ">
        <div className="">
            <div className="mt-[50px] ">
                <div className="h-[50vh] bg-no-repeat bg-center bg-cover"
                    style={{ backgroundImage: `linear-gradient(rgba(4, 9 , 30, 0.55), rgba(4, 9, 30, 0.55)) ,url(${Images.BgContact})` }}>
                </div>
            </div>
        </div>
        <div
            className="absolute px-[15px] text-center  top-1/3 translate-x-[50%] translate-y-[%] sm:top-0 sm:translate-x-[5%] sm:translate-y-[150%] md:top-0  md:translate-x-[10%] md:translate-y-[130%] lg:top-0 lg:translate-x-[30%]  lg:translate-y-[80%] xl:top-0  xl:translate-x-[35%] xl:translate-y-[100%]  ">
            <h3
                className="font-semibold text-[24px]  lg:text-[30px] xl:text-[32px] lg:leading-[54px] md:leading-[35px] text-white">
                Liên hệ - Góp ý</h3>
            <p className=" text-[16px] md:text-[18px] lg:text-[20px] lg:leading-[36px] md:leading-[25px] text-white">
                Góp ý hoặc liên hệ với DevStar nếu bạn có nhu cầu dịch
                vụ hoặc những thắc mắc khác</p>
        </div>

    </div>
    <div className="px-[15px] sm:px-[35px]">
        <div className="max-w-[1000px] mx-auto mt-[30px] ">
            <div className="grid md:grid-cols-2 gap-[30px] ">
                <div className="bg-white  border rounded-[10px] ">
                    <h4 className="pt-[20px] text-[20px] lg:text-[24px] leading-[36px] font-light text-center bg-[#E3DEDE] rounded-t-[10px] pb-[13px]">
                        GỬI THÔNG TIN LIÊN HỆ - GÓP Ý</h4>
                    <form action="" className="px-[10px] lg:px-[50px] pb-[30px]">
                        <p className="mt-[20px] text-left text-[18px] leading-[26px]">Góp ý hoặc liên hệ với DevStar nếu
                            như  bạn có nhu cầu về dịch vụ hoặc thắc mắc khác.</p>
                        <div className="grid grid-cols-2 gap-[15px] md:gap-[25px]">
                            <div className="col-span-2 mt-[10px]">
                                <label className="text-[16px] text-left leading-[24px] mt-[10px]">Họ và tên</label>
                                <input type="text" value="" placeholder="Nguyễn Văn A"
                                    class="text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />
                            </div>

                            <div className="col-span-2 md:col-span-1">
                                <div className="">
                                    <h5 className="text-[16px] text-left leading-[24px] ">Email</h5>
                                    <input type="text" value="" placeholder="Email"
                                        class="w-full text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light  text-[#4B4848] mt-[10px]" />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <div className="">
                                    <h5 className="text-[16px] text-left leading-[24px] ">SĐT</h5>
                                    <input type="text" value="" placeholder="Số điện thoại"
                                        class="w-full text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light text-[#4B4848] mt-[10px]" />
                                </div>
                            </div>
                            <div className="col-span-2 sm:col-span-1 ">
                                <label className="text-[16px] text-left leading-[24px] mt-[10px]">Tiêu đề</label>
                                <input type="text" value="" placeholder="Tiêu đề"
                                    class="input text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />
                            </div>
                            <div className="col-span-2 ">
                                <label className="text-[16px] text-left leading-[24px] mt-[10px]">Nội dung</label>
                                <textarea type="text" value="" placeholder="Nội dung"
                                    class="text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />
                                </div> 
                        </div>
                        <div className="flex justify-center ">
                        <button className="mt-[15px] py-[7px] px-[50px] rounded-[4px]  text-white text-center italic font-light bg-[#1B57F2]">Gửi</button>
                        </div>
                    </form>
            </div>
       
       
            <div className="bg-white  border rounded-[10px]">
            <h4 className="pt-[20px] text-[20px] lg:text-[24px] leading-[36px] font-light text-center bg-[#E3DEDE] rounded-t-[10px] pb-[13px]">THÔNG TIN LIÊN HỆ KHÁC</h4>
                <div className="px-[20px] lg:px-[50px] pb-[30px] ">
                    <p className="mt-[20px] text-left text-[18px] leading-[26px]">Mọi thông tin đóng góp ý kiến hoặc hỗ trợ, người dùng có thể liên hệ trực tiếp qua các kênh sau:</p>
                    <div className="flex mt-[10px] items-center">
                    <button type="button" className="bg-[#093AB7] border hover:bg-gray-200   h-[40px] w-[40px]">
                            <Icon.Facebook className="w-[20px] bg-white mx-auto" />
                    </button>
                    <div className="ml-[10px]">
                    <h5>Facebook</h5>
                    <a href="" className="text-[#1B57F2] hover:underline">http://www.facebook.com/abcxyz</a>
                    </div>
                    
                    </div>
                    <div className="flex mt-[10px] items-center">
                    <button type="button" className="bg-gray-200 border hover:bg-[#093AB7]   h-[40px] w-[40px]">
                            <Icon.Link className="w-[20px] origin-center transform rotate-150 text-white mx-auto" />
                    </button>
                    <div className="ml-[10px]">
                    <h5>Website</h5>
                    <a href="" className="text-[#1B57F2] hover:underline">abcxyz.com</a>
                    </div>
                    
                    </div>
               
                </div>
            </div>
      
        </div>
    </div>
    </div>
</div>
)
}
export default ContactPage
