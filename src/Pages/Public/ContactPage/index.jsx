import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'src/Components/Icon'
import { path, Images } from 'src/Constants/'
const ContactPage = () => {
return (
<div className="">
    <div className="relative text-center ">
        <img className=" w-full" src={Images.BgContact} alt="" />
        <div className="absolute text-center top-1/2 translate-x-[150%] translate-y-[50%] sm:top-1/2 sm:translate-x-[8%] md:top-1/2 lg:top-1/2 md:translate-x-[25%] lg:translate-x-[25%] lg:translate-y-[17%] xl:top-1/2 xl:translate-x-[35%]  xl:translate-y-[8%]">
            <h3 className="font-semibold sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[32px] lg:leading-[54px] md:leading-[35px] text-white">Liên hệ - Góp ý</h3>
            <p className=" hidden md:block md:text-[16px] lg:text-[20px] lg:leading-[36px] md:leading-[25px] text-white">Góp ý hoặc liên hệ với DevStar nếu bạn có nhu cầu dịch
                vụ hoặc những thắc mắc khác</p>
        </div>
    </div>
    <div className="container mx-auto mt-[30px]">
        <div className="grid lg:grid-cols-2 gap-[30px]">
            <div className="bg-white  border rounded-[10px]">
                <h4
                    className="pt-[20px] text-[24px] leading-[36px] font-light text-center bg-[#E3DEDE] rounded-t-[10px] pb-[13px]">
                    GỬI THÔNG TIN LIÊN HỆ - GÓP Ý</h4>
                <form action="" className="px-[40px] md:px-[70px] pb-[40px]">
                    <p className="mt-[20px] text-left text-[18px] leading-[26px]">Góp ý hoặc liên hệ với DevStar nếu như
                        bạn có nhu cầu về dịch vụ hoặc thắc mắc khác.</p>
                    <div className="grid grid-cols-2 gap-[25px]">
                        <div className="col-span-2 mt-[10px]">
                            <label className="text-[16px] text-left leading-[24px] mt-[10px]">Họ và tên</label>
                            <input type="text" value="" placeholder="Nguyễn Văn A"
                                class="text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />
                        </div>

                        <div className="">
                            <div className="">
                                <h5 className="text-[16px] text-left leading-[24px] ">Email</h5>
                                <input type="text" value="" placeholder="Email"
                                    class="w-full text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light  text-[#4B4848] mt-[10px]" />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h5 className="text-[16px] text-left leading-[24px] ">SĐT</h5>
                                <input type="text" value="" placeholder="Số điện thoại"
                                    class="w-full text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light text-[#4B4848] mt-[10px]" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="text-[16px] text-left leading-[24px] mt-[10px]">Tiêu đề</label>
                            <input type="text" value="" placeholder="Tiêu đề"
                                class="text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />
                        </div>
                        <div className="col-span-2">
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
            <h4 className="pt-[20px] text-[24px] leading-[36px] font-light text-center bg-[#E3DEDE] rounded-t-[10px] pb-[13px]">THÔNG TIN LIÊN HỆ KHÁC</h4>
                <div className="px-[40px] md:px-[70px] pb-[40px]">
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
)
}
export default ContactPage


// <form action="" className="px-[70px] pb-[40px]">
// <p className="mt-[20px] text-left text-[18px] leading-[26px]">Góp ý hoặc liên hệ với DevStar nếu như
//     bạn có nhu cầu về dịch vụ hoặc thắc mắc khác.</p>
// <label className="text-[16px] text-left leading-[24px] mt-[10px]">Họ và tên</label>
// <input type="text" value="" placeholder="Nguyễn Văn A"
//     class="text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />
// <div className="flex justify-between  ">
//     <div className="">
//         <label className="text-[16px] text-left leading-[24px] mt-[10px]">Email</label>
//         <input type="text" value="" placeholder="Email"
//             class=" text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light  text-[#4B4848] mt-[10px]" />
//     </div>
//     <div className="">
//         <label className="text-[16px] text-left leading-[24px] mt-[10px]">SĐT</label>
//         <input type="text" value="" placeholder="Số điện thoại"
//             class=" text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light text-[#4B4848] mt-[10px]" />
//     </div>
// </div>
// <label className="text-[16px] text-left leading-[24px] mt-[10px]">Tiêu đề</label>
// <input type="text" value="" placeholder="Tiêu đề"
//     class="text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />
// <label className="text-[16px] text-left leading-[24px] mt-[10px]">Nội dung</label>
// <textarea type="text" value="" placeholder="Nội dung"
//     class="text-[14px] leading-[24px] border rounded-[4px] py-[7px] pl-[18px] italic font-light w-full text-[#4B4848] mt-[10px]" />

// </form>