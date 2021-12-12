import React, { useState, useEffect } from 'react'
import { Icon } from 'src/Components/Icon'
import PostInTag from './components/PostInTag'
import FeaturedTag from './components/FeaturedTag'
import TagAPi from 'src/Apis/TagApi'
import FollowApi from 'src/Apis/FollowApi';
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import FollowerTag from './components/FollowerTag'
import { useParams, useHistory, useLocation, Switch, Route, NavLink } from "react-router-dom";
import QuestionInTag from './components/QuestionInTag'
import { path } from 'src/Constants/'

const DetailTagPage = () => {
    const location = useLocation();
    const { slug } = useParams();
    const [tag, setTag] = useState([]);
    const [tags, setTags] = useState({});
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [followers, setFollowers] = useState([]);
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

        const list = async () => {
            try {
                dispatch(setLoading(true))
                if (location.pathname === `/tag/${slug}`) {
                    const { data: posts } = await TagAPi.getPostInTag(slug)
                    setPosts(posts.data.models);
                    dispatch(setLoading(false))
                } else if (location.pathname === `/tag/${slug}/question`) {
                    const { data: questions } = await TagAPi.getQuestionInTag(slug)
                    setQuestions(questions.data.models);
                    dispatch(setLoading(false))
                } else if (location.pathname === `/tag/${slug}/follower`) {
                    const { data: followers } = await TagAPi.getFollowInTag(slug)
                    setFollowers(followers.data.models);
                    dispatch(setLoading(false))
                }
            } catch (error) {
                console.log(error);
            }
        };
        list();
        
    }, [location.pathname]);

    const handleFollow = async (id) => {
        dispatch(setLoading(true))
        if (token === null) {
            history.push("/auth/login");
            dispatch(setLoading(false))
            return;
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

    const pathName = [
        { path: `/tag/${slug}`, value: "Bài viết" },
        { path: `/tag/${slug}/question`, value: "Câu hỏi" },
        { path: `/tag/${slug}/follower`, value: "Người theo dõi" },
    ];

    return (
        <div className="container mx-auto mt-[80px]">
            <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
                <div className="col-start-1 col-span-3 w-full mb-[20px] rounded">
                    <div className="flex py-[30px] px-[10px] bg-white rounded mb-[15px]">
                        <div>
                            {tag?.avatar?.avatarUrl ?
                                <img
                                    src={tag?.avatar?.avatarUrl}
                                    alt={tag?.name}
                                    className="w-[150px] rounded-[5px]"
                                /> :
                                <div className="w-[150px] h-[150px] bg-blue-400 flex justify-center items-center rounded-[5px]">
                                    <p className="text-white text-[32px]">{tag?.name?.toUpperCase().substring(0, 1)}</p>
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
                                {pathName?.map((item, index) => (
                                    <NavLink
                                        exact
                                        key={index}
                                        to={item?.path}
                                        activeClassName="after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
                                        className="relative text-[15px] px-[10px] text-gray-600 hover:text-blue-600" >
                                        {item?.value}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <Switch>
                            <Route
                                exact
                                path={path.TAGS_ID}
                                render={(props) => (
                                    <PostInTag data={posts} {...props} />
                                )}
                            >
                            </Route>
                            <Route
                                exact
                                path={path.TAGS_QUESTION}
                                render={(props) => (
                                    <QuestionInTag data={questions} {...props} />
                                )}
                            >  
                            </Route>
                            <Route
                                exact
                                path={path.TAGS_FOLLOWER}
                                render={(props) =>
                                    <FollowerTag follower={followers} {...props} />
                                }
                            >
                            </Route>
                        </Switch>
                    </div>
                </div>
                <div className="min-w-100 max-w-100 bg-white shadow rounded mb-[20px]">
                    <FeaturedTag tag={tag} popTag={tags}></FeaturedTag>
                </div>
            </div>
        </div>
    )

}
export default DetailTagPage;