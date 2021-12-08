import React, { useState, useEffect } from "react";
import PostView from '../Commons/PostView'
import FeaturedAuthor from '../Commons/FeaturedAuthor'
import TrendingTags from '../Commons/TrendingTags'
import { Icon } from 'src/Components/Icon'
import PostApi from "src/Apis/PostApi"
import { useHistory, NavLink, Switch, Route } from "react-router-dom";
import { path } from "src/Constants/";
import { useLocation } from "react-router";
import TagAPi from "src/Apis/TagApi";
import UserApi from "src/Apis/UserApi";
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";

const PostPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [featuredAuthors, setFeaturedAuthor] = useState([]);
    const [tagPopulars, setTagPopular] = useState([]);
    const [newests, setNewests] = useState([]);
    const [trendings, setTrendings] = useState([]);
    const [follows, setFollows] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

  // Navigation
  const pathName = [
    { path: path.POSTS, value: "Mới cập nhật" },
    { path: path.POSTS_POPULAR, value: "Thịnh hành" },
    { path: path.POSTS_FOLLOW, value: "Đang theo dõi" },
    { path: path.POSTS_BOOK_MARK, value: "Bookmark của tôi" },
  ];

  const button = { path: path.POSTS_CREATE, icon: Icon.Pen, value: "Viết bài" };

    useEffect(() => {
        const listNew = async () => {
            try {
                dispatch(setLoading(true))
                if (location.pathname === path.POSTS) {
                    const { data: newests } = await PostApi.getPostNew()
                    setNewests(newests.data);
                    dispatch(setLoading(false))
                } else if (location.pathname === path.POSTS_POPULAR) {
                    const { data: trendings } = await PostApi.getPostTren()
                    setTrendings(trendings.data);
                    dispatch(setLoading(false))
                } else if (location.pathname === path.POSTS_FOLLOW) {
                    const token = localStorage.getItem("_token_");
                    if (token) {
                        const { data: follows } = await PostApi.getPostFol()
                        setFollows(follows.data);
                        dispatch(setLoading(false))
                    }
                        dispatch(setLoading(false))
                } else if (location.pathname === path.POSTS_BOOK_MARK) {
                    const token = localStorage.getItem("_token_");
                    if (token) {
                        const { data: bookmarks } = await PostApi.getPostMark()
                        setBookmarks(bookmarks.data);
                        dispatch(setLoading(false))
                    }
                    dispatch(setLoading(false))
                }
            } catch (error) {
                console.log(error);
            }
        };
        listNew();

    const listFeaturedAuthor = async () => {
      try {
        const { data: FeaturedAuthor } = await UserApi.getFeaturedAuthor();
        setFeaturedAuthor(FeaturedAuthor?.data);
      } catch (error) {
        console.log(error);
      }
    };
    listFeaturedAuthor();

    const listTagPopular = async () => {
      try {
        const { data: tagsPopular } = await TagAPi.getTagPopular();
        setTagPopular(tagsPopular?.data);
      } catch (error) {
        console.log(error);
      }
    };
    listTagPopular();
  }, [location.pathname]);

  return (
    <div className="container mx-auto mt-[55px] py-[25px]">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-1 shadow-sm px-[10px] bg-white rounded">
        <div className=" py-[15px] flex items-center">
          {pathName?.map((item, index) => (
            <NavLink
              exact
              key={index}
              to={item?.path}
              activeClassName="after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
              className="relative text-[15px] px-[10px] text-gray-600 hover:text-blue-600"
            >
              {item?.value}
            </NavLink>
          ))}
        </div>
        {button && (
          <div className="self-center whitespace-nowrap">
            <button
              onClick={() => {
                history.push(button?.path);
              }}
              className="flex my-auto hover:bg-[#0d61c7] bg-[#1273eb] text-white rounded px-[10px] gap-[5px] py-[10px] md:py-[5px] text-[14px] "
            >
              <div className="self-center">
                <button.icon className="w-[15px] fill-current" />{" "}
              </div>
              <span className="hidden md:block">{button?.value}</span>
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-10 gap-[20px] mt-[20px]">
        <div className="col-span-10 lg:col-span-7 shadow-sm bg-white px-[5px] rounded">
          <Switch>
            <Route
              exact
              path={path.POSTS}
              render={(props) => <PostView posts={newests} {...props} />}
            ></Route>
            <Route
              exact
              path={path.POSTS_POPULAR}
              render={(props) => <PostView posts={trendings} {...props} />}
            ></Route>
            <Route
              exact
              path={path.POSTS_FOLLOW}
              render={(props) => <PostView posts={follows} {...props} />}
            ></Route>
            <Route
              exact
              path={path.POSTS_BOOK_MARK}
              render={(props) => <PostView posts={bookmarks} {...props} />}
            ></Route>
          </Switch>
        </div>
        <div className="col-span-10 lg:col-span-3 bg-white shadow rounded">
          <FeaturedAuthor authors={featuredAuthors} />
          <TrendingTags tags={tagPopulars} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
