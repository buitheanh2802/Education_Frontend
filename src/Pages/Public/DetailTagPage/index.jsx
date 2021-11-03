import React from 'react'
import Navigation from '../Commons/Navigation'
import { path } from 'src/Constants/'
import { Icon } from 'src/Components/Icon'
import DetailTagView from '../Commons/DetailTagView'
import FeaturedTag from '../Commons/FeaturedTag'
import { Images } from 'src/Constants/'
import NavigationInDetailTag from '../Commons/NavigationInDetailTag'
const DetailTagPage = () => {
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
    const detailTag = [
        {
            path: "/",
            fullname: "Nguyễn Thành Đạt",
            username: "@ntdat",
            avatar: "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.30497-1/cp0/p60x60/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=T_q5miqWSkYAX_u-MBq&_nc_ht=scontent.fhan5-2.fna&oh=0206790f65d4fd5a206390b1c7a86f33&oe=615CC225",
            point: 155,
            question: 238,
            follower: 235,
            following: 85,
            post: 29,
            tags: 'ReactJS'
        }
    ]
    const fieldQuestions = [{
        user: {
            fullname: "Bùi Thế Anh",
            avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
            path: "/profile/buitheanh"
        },
        post: {
            title: "Tìm hiểu về ExpressJS",
            time: "T5, 5:00 PM",
            view: 150,
            comment: 87,
            bookmark: 25,
            link: 120,
            dislike: 20,
            path: path.POSTS_ID,
            tags: [
                { path: path.TAGS_ID, value: "Javascript" }
            ]
        }
    }]
    // tags
    const tags = [
        {
            path: "/",
            value: "NodeJS"
        }
    ]
    return (
        <div className="container mx-auto mt-[80px]">
            <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
                <div className="col-start-1 col-span-3 w-full  rounded">
                    <div className="flex py-[30px] px-[10px] mb-[20px] bg-white">
                        <div>
                            <img width="150px" src={Images.JSImage} />
                        </div>
                        <div className="ml-[30px] my-auto">
                            <div className="">
                                <h3 className="text-[30px] font-semibold inline-block">Javascript</h3>
                                <Icon.Star className="w-[20px] mb-[15px] ml-[10px] inline-block" />
                            </div>
                            <button className="mt-[10px] bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">+ Theo dõi</button>
                        </div>
                    </div>
                    <div className="w-full shadow-sm bg-white rounded">
                        <NavigationInDetailTag path={pathName} button={button} />

                        <DetailTagView data={fieldQuestions}></DetailTagView>
                    </div>
                </div>
                <div className=" min-w-100 max-w-100 bg-white shadow rounded">
                    <FeaturedTag detailTag={detailTag}></FeaturedTag>
                </div>

            </div>
        </div>
    )

}
export default DetailTagPage;