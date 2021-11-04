import React, { useState, useEffect } from 'react'
import Navigation from '../Commons/Navigation'
import { path } from '../../../Constants/index';
import { Icon } from 'src/Components/Icon'
import DetailTagView from '../Commons/DetailTagView'
import FeaturedTag from '../Commons/FeaturedTag'
import { Images } from 'src/Constants/'
import NavigationInDetailTag from '../Commons/NavigationInDetailTag'
import TagAPi from 'src/Apis/TagApi'
import { Link, useParams } from 'react-router-dom';

const DetailTagPage = () => {
    const { slug } = useParams();
    const [tag, setTag] = useState({});

    useEffect(() => {
        const detailTag = async () => {
            try {
                console.log(slug);
                const { data: tag } = await TagAPi.getDetail(slug);
                setTag(tag);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        detailTag();
    }, []);

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
    
    return (
        <div className="container mx-auto mt-[80px]">
            <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
                <div className="col-start-1 col-span-3 w-full  rounded">
                    <div className="flex py-[30px] px-[10px] mb-[20px] bg-white">
                        <div>
                            <img width="150px" src={tag?.data?.avatar?.avatarUrl} alt={tag?.data?.name} />
                        </div>
                        <div className="ml-[30px] my-auto">
                            <div className="">
                                <h3 className="text-[30px] font-semibold inline-block">{tag?.data?.name}</h3>
                                <Icon.Star className="w-[20px] mb-[15px] ml-[10px] inline-block" />
                            </div>
                            <button className="mt-[10px] bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">+ Theo dõi</button>
                        </div>
                    </div>
                    <div className="w-full shadow-sm bg-white rounded">
                        <NavigationInDetailTag path={pathName} button={button} />
                        <DetailTagView data={fieldQuestions} ></DetailTagView>
                    </div>
                </div>
                <div className=" min-w-100 max-w-100 bg-white shadow rounded">
                    <FeaturedTag tag={tag}></FeaturedTag>
                </div>
            </div>
        </div>
    )

}
export default DetailTagPage;