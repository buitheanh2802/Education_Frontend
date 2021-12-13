import React, { useEffect, useState } from "react";
import FeaturedAuthor from "../Commons/FeaturedAuthor";
import { Icon } from "../../../Components/Icon";
import TagAPi from "src/Apis/TagApi";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FollowApi from "src/Apis/FollowApi";
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import UserApi from "src/Apis/UserApi";

const TagsPage = () => {
    window.scrollTo(0,0);
    const dispatch = useDispatch();
    const token = localStorage.getItem("_token_");
    const history = useHistory();
    const [featuredAuthors, setFeaturedAuthor] = useState([]);

    const handleUnFollow = async (id) => {
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false));
            return;
        }
        dispatch(setLoading(true))
        await FollowApi.unFollowTag(id);
        const tagClone = [...tags];
        tagClone.map((tag) => {
            if (tag._id === id) {
                tag.isFollowing = false;
            }
            return tag;
        })
        setTags(tagClone);
        dispatch(setLoading(false))
    }

    const handleFollow = async (id) => {
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
            return;
        }
        dispatch(setLoading(true))
        await FollowApi.followTag(id);
        const tagClone = [...tags];
        tagClone.map((tag) => {
            if (tag._id === id) {
                tag.isFollowing = true;
            }
            return tag;
        })
        setTags(tagClone);
        dispatch(setLoading(false))
    }

    const [tags, setTags] = useState([]);
    useEffect(() => {
        const tag = async () => {
            try {
                dispatch(setLoading(true))
                const { data: tags } = await TagAPi.getAll();
                setTags(tags.data.models);
                dispatch(setLoading(false))
            } catch (error) {
                console.log(error);
            }
        };
        tag();

        const listFeaturedAuthor = async () => {
            try {
                const { data: featuredAuthors } = await UserApi.getFeaturedAuthor();
                setFeaturedAuthor(featuredAuthors?.data);
            } catch (error) {
                console.log(error);
            }
        };
        listFeaturedAuthor();
    }, []);

    return (
        <div className="container mx-auto mt-[80px]  ">
            <div className="flex justify-between mt-[15px]  gap-[30px]">
                <div className="max-[200px] px-[15px] sm:px-[35px] xl:gap-x-[95px] sm:gap-x-[60px] gap-y-[20px] mb-[30px] pb-[45px] w-full py-[15px] bg-white shadow rounded">
                    <div className="grid grid-cols-1 gap-[20px] xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2">
                        {tags?.map((item, index) => {
                            return (
                                <div key={index} className="item md:text-[16px] text-[14px] w-max-[200px] px-[10px] py-[10px]">
                                    <Link className="grid grid-cols-3 gap-[10px] justify-center items-center" to={`/tag/${item?.slug}`} >
                                        <div className="mx-auto">
                                            {item?.avatar?.avatarUrl ?
                                                <img
                                                    src={item?.avatar?.avatarUrl}
                                                    alt=""
                                                    className="w-[80px] rounded-[5px]"
                                                /> :
                                                <div className="w-[80px] h-[80px] bg-blue-400 flex justify-center items-center rounded-[5px]">
                                                    <p className="text-white text-[20px]">{item?.name?.toUpperCase().substring(0, 1)}</p>
                                                </div>
                                            }
                                        </div>
                                        <div className="col-span-2 ml-[10px]">
                                            <div className="flex items-center">
                                                <h3 className="text-[18px] leading-[20px] ">
                                                    {item?.name}
                                                </h3>
                                                <Icon.Star className="w-[14px] ml-[10px] " />
                                            </div>
                                            <p className="text-[#8A8A8A] text-[14px]">
                                                <span className="font-bold leading-[20px] ">
                                                    {item?.postCounts}
                                                </span>{" "}
                                                Bài viết
                                            </p>
                                            <p className="text-[#8A8A8A] text-[14px]">
                                                <span className="font-bold leading-[20px] ">
                                                    {item?.questionCounts}
                                                </span>{" "}
                                                Câu hỏi
                                            </p>
                                            <p className="text-[#8A8A8A] text-[14px]">
                                                <span className="font-bold leading-[20px] ">
                                                    {item?.followerCounts || item?.followers}
                                                </span>{" "}
                                                Người theo dõi
                                            </p>
                                        </div>
                                    </Link>
                                    {item?.isFollowing ? (
                                        <div onClick={() => handleUnFollow(item._id)} className="mt-[10px] xl:[mx-10px] text-center my-auto text-white border border-[#6C91F0] font-bold rounded text-[15px] bg-[#1273eb] hover:bg-blue-200 hover:text-[#6C91F0]">
                                            <button className="font-bold px-[20px] md:px-[30px] py-[5px] ">
                                                {" "}
                                                - Bỏ theo dõi
                                            </button>
                                        </div>
                                    ) : (
                                        <div onClick={() => handleFollow(item._id)} className="mt-[10px] xl:[mx-10px] text-center my-auto text-[#6C91F0] border border-[#6C91F0] font-bold rounded text-[15px] hover:bg-[#1273eb] hover:text-white">
                                            <button className="font-bold px-[20px] md:px-[30px] py-[5px] ">
                                                {" "}
                                                + Theo dõi
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div >
                </div >
                <div className="w-[350px] min-w-[350px] max-w-[350px] bg-white shadow rounded hidden lg:block mb-[30px]">
                    <FeaturedAuthor authors={featuredAuthors} />
                </div>
            </div >
        </div >
    );
};
export default TagsPage;