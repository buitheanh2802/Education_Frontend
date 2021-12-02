import React, { useState, useEffect } from "react";
import Navigation from "../Commons/Navigation";
import PostView from "../Commons/PostView";
import FeaturedAuthor from "../Commons/FeaturedAuthor";
import TrendingTags from "../Commons/TrendingTags";
import { path } from "src/Constants/";
import { Icon } from "src/Components/Icon";
import Scrollbar from "react-smooth-scrollbar";
import PostApi from "src/Apis/PostApi";
import { useHistory, useLocation } from "react-router";
import Loading from "src/Components/Loading";
import "./index.css";
import SkeletonGroup from "./components/skeleton-group";
import UserApi from "src/Apis/UserApi";
import TagAPi from "src/Apis/TagApi";

const PostPage = () => {
  const location = useLocation();
  const [posts, setPost] = useState([]);
  const [featuredAuthor, setFeaturedAuthor] = useState([]);
  const [tagPopular, setTagPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Navigation
  const pathName = [
    { path: path.POSTS, value: "Mới cập nhật" },
    { path: path.POSTS_POPULAR, value: "Thịnh hành" },
    { path: path.POSTS_FLOW, value: "Đang theo dõi" },
    { path: path.POSTS_BOOK_MARK, value: "Bookmark của tôi" },
  ];
  const button = { path: path.POSTS_CREATE, icon: Icon.Pen, value: "Viết bài" };

  // authors
  const authors = [
    {
      path: "/",
      fullname: "Nguyễn Thành Đạt",
      username: "@nguyenthanhdat",
      avatar:
        "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
      point: 567,
      question: 234,
      folow: 345,
    },
  ];

  // tags
  const tags = [
    {
      path: "/",
      value: "NodeJS",
    },
  ];

  useEffect(() => {
    const listPost = async () => {
      try {
        let endPoint;
        if (location.pathname === "/posts") {
          endPoint = "newest";
        } else if (location.pathname === "/posts/popular") {
          endPoint = "trending";
        } else if (location.pathname === "/posts/flow") {
          endPoint = "following";
        } else {
          endPoint = "bookmark";
        }
        setLoading(true);
        const { data: posts } = await PostApi.getPost(endPoint);
        setPost(posts);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Failed to get data", error.response);
      }
    };
    listPost();

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
    <div className="container mx-auto mt-[55px] py-[20px]">
      <Navigation path={pathName} button={button} />
      <div className="grid grid-cols-10 gap-[20px] mt-[20px]">
        <Scrollbar
          alwaysShowTracks={true}
          className="col-span-10 lg:col-span-7 shadow-sm bg-white px-[5px] rounded h-screen"
        >
          {loading && <SkeletonGroup />}
          <PostView posts={posts} />
        </Scrollbar>
        <Scrollbar className="col-span-10 lg:col-span-3 bg-white shadow rounded h-screen">
          <FeaturedAuthor authors={featuredAuthor} />
          <TrendingTags tags={tagPopular} />
        </Scrollbar>
      </div>
    </div>
  );
};

export default PostPage;
