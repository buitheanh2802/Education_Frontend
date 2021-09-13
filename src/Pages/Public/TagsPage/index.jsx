import React from 'react'
import Navigation from '../Commons/Navigation'
import FeaturedAuthor from '../Commons/FeaturedAuthor'
import { path } from 'src/Constants/'
import { Icon } from '../../../Components/Icon'

// tôi là bùi thế anh
const TagsPage = () => {
// navigation


const pathName = [
{
path: path.TAGS,
value: "Mới cập nhật"
},
{
path: path.TAGS_ID,
value: "Thịnh hành"
},
{
path: path.TAGS_FLOW,
value: "Đang theo dõi"
}
]


const button = { path: path.QUESTIONS_CREATE, icon: Icon.questions, value: "Đặt câu hỏi" }

 // authors
 const authors = [
    {
        path: "/",
        fullname: "Nguyễn Thành Đạt",
        username: "@nguyenthanhdat",
        avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
        point: 567,
        question: 234,
        folow: 345
    },
    {
        path: "/",
        fullname: "Nguyễn Thành Đạt",
        username: "@nguyenthanhdat",
        avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
        point: 567,
        question: 234,
        folow: 345
    }
]
return (
<div className="container mx-auto mt-[80px]  ">
    <Navigation path={pathName} button={button} />
    <div className="flex justify-between mt-[15px]  gap-[30px] ">
        <div className="flex justify-between flex-wrap max-[200px] px-[15px] sm:px-[35px] xl:gap-x-[95px]  sm:gap-x-[60px]  gap-y-[20px] mb-[30px] pb-[45px] w-full  py-[15px] bg-white shadow rounded  ">
            <div className="item md:text-[16px] text-[14px] w-max-[200px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">Javascript </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+ Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">MySql </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">jQuery </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">Node Js </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">Bootstrap </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">Java </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">React </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px] ">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">C# </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
            <div className="item md:text-[16px] text-[14px]">
                <div className="flex items-center">
                    <h3 className="text-[24px] leading-[36px] ">MySql </h3>
                    <Icon.Star className="w-[14px] ml-[10px] " />
                </div>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">12</span> Bài viết</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">123</span> Câu hỏi</p>
                <p className="text-[#8A8A8A]"><span className="font-bold leading-[24px]">124</span> Người theo dõi</p>
                <button className="mt-[5px]  my-auto text-[#6C91F0]  border border-[#6C91F0] font-bold rounded px-[25px] md:px-[30px] py-[8px]  text-[16px] hover:bg-[#1273eb] hover:text-white">+
                    Theo dõi</button>
            </div>
        </div>
        <div className="w-[350px] min-w-[350px] max-w-[350px] bg-white shadow rounded hidden lg:block">
        <FeaturedAuthor authors={authors} />
        </div>
    </div>

</div>
)
}
export default TagsPage
