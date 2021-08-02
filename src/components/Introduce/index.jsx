import React from 'react'

const Introduce = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-[15px] sm:gap-[30px] mt-[60px] text-gray-900">
            <div className="md:col-span-3 text-gray-900 text-center">
                <h2 className="text-[20px] sm:text-[30px] lg:text-[36px] font-medium">Lộ trình học chúng tôi cung cấp</h2>
                <p className="text-gray-500 text-[14px] sm:text-[16px]">các khoá học được đầu tư kỹ lưỡng và chất lượng</p>
            </div>
            <div className="unselectable border border-gray-100 cursor-default rounded-[15px] bg-[#FED7D7] bg-opacity-[25%] px-[38px] py-[25px] text-center shadow hover:shadow-lg duration-300">
                <h3 className="font-medium text-[18px] sm:text-[20px]">Nền tảng</h3>
                <p className="mt-[10px] text-gray-500 text-[14px] sm:text-[16px]">chúng tôi sẽ giúp bạn hiểu rõ những kiến thức cơ bản. Từ đó giúp bạn có một nền tảng vững chắc để học hỏi và tiếp cận những kiến thức nâng cao.</p>
            </div>
            <div className="unselectable border border-gray-100 cursor-default rounded-[15px] bg-[#FED7D7] bg-opacity-[25%] px-[38px] py-[25px] text-center shadow hover:shadow-lg duration-300">
                <h3 className="font-medium text-[18px] sm:text-[20px]">Nâng cao</h3>
                <p className="mt-[10px] text-gray-500 text-[14px] sm:text-[16px]">với những kiến thức nền tảng, chúng tôi sẽ bổ sung thêm những kiến thức nâng cao và giúp bạn tiếp cận những công nghệ trên thị trường.</p>
            </div>
            <div className="unselectable border border-gray-100 cursor-default rounded-[15px] bg-[#FED7D7] bg-opacity-[25%] px-[38px] py-[25px] text-center shadow hover:shadow-lg duration-300">
                <h3 className="font-medium text-[18px] sm:text-[20px]">Bứt phá</h3>
                <p className="mt-[10px] text-gray-500 text-[14px] sm:text-[16px]">tổng ôn những kiến thức đã học, tiến hành triển khai dự án dành riêng cho bản thân. Sửa chữa những lỗi mắc phải khi code và hoàn thiện sản phẩm.</p>
            </div>
        </div>
    )
}

export default Introduce
