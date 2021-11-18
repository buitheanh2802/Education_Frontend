import React, { useState, useEffect } from 'react'
import { Icon } from 'src/Components/Icon'
import DetailTagView from '../Commons/DetailTagView'
import FeaturedTag from '../Commons/FeaturedTag'
import NavigationInDetailTag from '../Commons/NavigationInDetailTag'
import TagAPi from 'src/Apis/TagApi'
import { useParams } from "react-router-dom";
import FollowApi from 'src/Apis/FollowApi';
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import { Switch, Route } from "react-router-dom";
import FollowerTag from '../Commons/DetailTagView/FollowerTag'

const DetailTagPage = () => {
    const { slug } = useParams();
    const [tag, setTag] = useState([]);
    const [tags, setTags] = useState({});
    const [postTag, setPostTag] = useState([]);
    const [questionTag, setQuestionTag] = useState([]);
    const [follower, setFollower] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const detailTag = async () => {
            try {
                const { data: tag } = await TagAPi.getDetail(slug);
                setTag(tag.data);
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

        const postTag = async () => {
            try {
                const { data: posts } = await TagAPi.getPostInTag(slug);
                setPostTag(posts.data.models);
            } catch (error) {
                console.log(error);
            }
        };
        postTag();

        const questionTag = async () => {
            try {
                const { data: questions } = await TagAPi.getQuestionInTag(slug);
                setQuestionTag(questions.data.models);
            } catch (error) {
                console.log(error);
            }
        };
        questionTag();

        const followerTag = async () => {
            try {
                const { data: follower } = await TagAPi.getFollowInTag(slug);
                setFollower(follower.data.models);
                console.log(follower.data.models);

            } catch (error) {
                console.log(error);
            }
        };
        followerTag();
    }, []);

    const handleFollow = async (id) => {
        dispatch(setLoading(true))
        if (tag?.isFollowing) {
            await FollowApi.unFollowTag(id);
            setTag({ ...tag, isFollowing: false })
            dispatch(setLoading(false))
        } else {
            await FollowApi.followTag(id);
            setTag({...tag, isFollowing: true})
            dispatch(setLoading(false))
        }
    }

    const pathName = [
        {
            path: `/tag/${slug}`,
            value: "Bài viết"
        },
        {
            path: `/tag/${slug}/question`,
            value: "Câu hỏi"
        },
        {
            path: `/tag/${slug}/follower`,
            value: "Người theo dõi"
        }
    ]

    return (
        <div className="container mx-auto mt-[80px]">
            <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
                <div className="col-start-1 col-span-3 w-full  rounded">
                    <div className="flex py-[30px] px-[10px] mb-[20px] bg-white">
                        <div>
                            <img width="150px" src={tag?.avatar?.avatarUrl} alt={tag?.name} />
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
                                 + theo dõi
                            </button>
                            }   
                        </div>
                    </div>
                    <div className="w-full shadow-sm bg-white rounded">
                        <NavigationInDetailTag path={pathName} />
                        <Switch>
                            <Route
                                exact
                                path={`/tag/${slug}`}
                                render={(props) => (
                                <DetailTagView data={postTag} {...props} />
                                )}>
                            </Route>
                            <Route
                                exact
                                path={`/tag/${slug}/question`}
                                render={(props) => (
                                <DetailTagView data={questionTag} {...props} />
                                )}>
                            </Route>
                            <Route
                                exact
                                path={`/tag/${slug}/follower`}
                                render={(props) => 
                                <FollowerTag follower={follower} {...props} /> 
                                }>
                            </Route>
                        </Switch>
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