import React, { useState, useEffect } from 'react'
import { Icon } from 'src/Components/Icon'
import DetailTagView from '../Commons/DetailTagView'
import FeaturedTag from '../Commons/FeaturedTag'
import TagAPi from 'src/Apis/TagApi'
import FollowApi from 'src/Apis/FollowApi';
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import FollowerTag from '../Commons/DetailTagView/FollowerTag'
import { useParams, useHistory } from "react-router-dom";

const DetailTagPage = () => {
    const { slug } = useParams();
    const [tag, setTag] = useState([]);
    const [tags, setTags] = useState({});
    const dispatch = useDispatch();
    const [dataTag, setDataTag] = useState({
        posts: [],
        questions: [],
        followers: []
    });
    const [tab, setTab] = useState(1);
    const history = useHistory();
    const token = localStorage.getItem("_token_");

    useEffect(() => {
        const detailTag = async () => {
            try {
                dispatch(setLoading(true))
                const { data: tag } = await TagAPi.getDetail(slug);
                setTag(tag.data);
                dispatch(setLoading(false))
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        detailTag();

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
        dispatch(setLoading(true))
        Promise.all([
            TagAPi.getPostInTag(slug),
            TagAPi.getQuestionInTag(slug),
            TagAPi.getFollowInTag(slug),
        ]).then(data => {
            console.log(data);
            const postTags = data[0].data.data.models;
            const questions = data[1].data.data.models;
            const followers = data[2].data.data.models;
            setDataTag({
                posts: postTags,
                questions: questions,
                followers: followers
            })
            dispatch(setLoading(false))
        }).catch(error => {
            console.log(error)
        })
    }, [slug])

    const handleFollow = async (id) => {
        dispatch(setLoading(true))
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
        }
        if (tag?.isFollowing) {
            await FollowApi.unFollowTag(id);
            setTag({ ...tag, isFollowing: false })
            dispatch(setLoading(false))
        } else {
            await FollowApi.followTag(id);
            setTag({ ...tag, isFollowing: true })
            dispatch(setLoading(false))
        }
    }

    const path = [
        {
            label: "Bài viết",
            value: 1
        },
        {
            label: "Câu hỏi",
            value: 2
        },
        {
            label: "Người theo dõi",
            value: 3
        }
    ]

    return (
        <div className="container mx-auto mt-[80px]">
            <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
                <div className="col-start-1 col-span-3 w-full  rounded">
                    <div className="flex py-[30px] px-[10px] mb-[20px] bg-white">
                        <div>
                            {tag?.avatar?.avatarUrl ?
                                <img
                                    src={tag?.avatar?.avatarUrl}
                                    alt=""
                                    className="w-[150px] rounded-[5px]"
                                /> :
                                <div className="w-[150px] h-[150px] bg-blue-400 flex justify-center items-center rounded-[5px]">
                                    <p className="text-white text-[12px]">{tag?.name?.toUpperCase().substring(0, 1)}</p>
                                </div>
                            }
                        </div>
                        <div className="ml-[30px] my-auto">
                            <div className="">
                                <h3 className="text-[30px] font-semibold inline-block">{tag?.name}</h3>
                                <Icon.Star className="w-[20px] mb-[15px] ml-[10px] inline-block" />
                            </div>
                            {tag?.isFollowing ?
                                <button onClick={() => handleFollow(tag?._id)} className="mt-[10px] bg-[#0d61c7] border border-[#0d61c7] hover:bg-[#fff] hover:text-[#0d61c7] text-[#fff] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">
                                    - Bỏ theo dõi
                                </button>
                                :
                                <button onClick={() => handleFollow(tag?._id)} className="mt-[10px] bg-[#fff] border border-[#0d61c7] hover:bg-[#0d61c7] hover:text-[#BEE3F8] text-[#0d61c7] rounded md:px-[10px] md:py-[5px] md:text-[14px] px-[10px] py-[5px] sm:text-[14px] lg:px-[8px] lg:py-[5px] lg:text-[10px] xl:px-[8px] xl:py-[5px] xl:text-[14px] ">
                                    + Theo dõi
                                </button>
                            }
                        </div>
                    </div>
                    <div className="w-full shadow-sm bg-white rounded">
                        <div className="md:flex md:justify-between sm:grid sm:grid-cols-1 shadow-sm bg-white px-[5px] rounded">
                            <div className=" py-[15px] flex items-center">
                                {path?.map((item, index) => (
                                    <p key={index} onClick={() => setTab(item.value)}
                                        className={item.value === tab ? "after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black relative text-[12px] sm:text-[15px] px-[0px] sm:px-[5px] text-gray-600 hover:text-blue-600 sm:mr-[20px] mr-[15px]" : "relative text-[12px] sm:text-[15px] px-[0px] sm:px-[5px] text-gray-600 hover:text-blue-600 sm:mr-[20px] mr-[15px]"} >
                                        {item?.label}
                                    </p>
                                ))}
                            </div>
                            <div className="self-center">
                                <select name="" className="border border-[#707885] rounded px-[10px] py-[5px]">
                                    <option value="">Tất cả</option>
                                    <option value="">Xem nhiều nhất</option>
                                    <option value="">Mới nhất</option>
                                </select>
                            </div>
                        </div>
                        {tab !== 3 ? <DetailTagView data={tab === 1 ? dataTag.posts : dataTag.questions} /> : <FollowerTag follower={dataTag.followers} />}
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