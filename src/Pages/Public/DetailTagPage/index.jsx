import React, { useState, useEffect } from 'react'
import { path } from 'src/Constants/'
import { Icon } from 'src/Components/Icon'
import DetailTagView from '../Commons/DetailTagView'
import FeaturedTag from '../Commons/FeaturedTag'
import NavigationInDetailTag from '../Commons/NavigationInDetailTag'
import TagAPi from 'src/Apis/TagApi'
import { useLocation } from "react-router";
import { Switch, Route, useParams } from "react-router-dom";
  
const DetailTagPage = () => {
    const location = useLocation();
    const { slug } = useParams();

    const [tag, setTag] = useState({});
    const [tags, setTags] = useState({});
    const [navs, setNav] = useState([]);

    useEffect(() => {
        const detailTag = async () => {
            try {
                const { data: tag } = await TagAPi.getDetail(slug);
                setTag(tag);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        detailTag();
    }, []);

    useEffect(() => {
        const popTag = async () => {
            try {
                const { data: tags } = await TagAPi.getTagPopular();
                setTags(tags);
            } catch (error) {
                console.log(error);
            }
        };
        popTag();
    }, []);

    useEffect(() => {
        const tagNav = async () => {
            try {
                if(location.pathname === `/tag/${slug}`) {
                    const { data: navs } = await TagAPi.getPostInTag(slug);
                    setNav(navs.data.models);
                } else if(location.pathname === `/tag/${slug}question`) {
                    const { data: navs } = await TagAPi.getQuestionInTag(slug);
                    setNav(navs.data.models);                    
                }
            } catch (error) {
                console.log(error);
            }
        };
        tagNav();
    }, [location.pathname]);

    const pathName = [
        {
            path: `/tag/${slug}`,
            value: "Bài viết"
        },
        {
            path: `/tag/${slug}/question`,
            value: "Câu hỏi"
        }
    ]
    
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
                        <NavigationInDetailTag path={pathName} />
                        <DetailTagView data={navs} path={pathName}/>
                    </div>
                </div>
                <div className=" min-w-100 max-w-100 bg-white shadow rounded">
                    <FeaturedTag tag={tag} popTag={tags}></FeaturedTag>
                </div>
            </div>
        </div>
    )

}
export default DetailTagPage;