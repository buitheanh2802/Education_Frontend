import React, { useState, useEffect } from "react";
import Navigation from '../Commons/Navigation'
import PostView from '../Commons/PostView'
import FeaturedAuthor from '../Commons/FeaturedAuthor'
import TrendingTags from '../Commons/TrendingTags';
import { path } from 'src/Constants/'
import { Icon } from 'src/Components/Icon'
import Scrollbar from 'react-smooth-scrollbar';
import PostApi from "src/Apis/PostApi";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";

const PostPage = () => {
  const history = useHistory()
  const location = useLocation();
  const [dataPost, setDataPost] = useState({
    newest: [],
    trendings: [],
    followings: [],
    bookmarks: []
  });
  const [tab, setTab] = useState(1)

  // Navigation
  const path = [
    { value: 1, label: "Mới cập nhật" },
    { value: 2, label: "Thịnh hành" },
    { value: 3, label: "Đang theo dõi" },
    { value: 4, label: "Bookmark của tôi" },
  ];
  const button = { path: path.POSTS_CREATE, icon: Icon.Pen, value: "Viết bài" };

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
    }
  ]

  // tags
  const tags = [
    {
      path: "/",
      value: "NodeJS"
    }
  ]

  useEffect(() => {
    Promise.all([
      PostApi.getPostNew(),
      PostApi.getPostTren(),
      PostApi.getPostFol(),
      PostApi.getPostMark()
    ]).then(data => {
      const newest = data[0].data;
      const trendings = data[1].data;
      const followings = data[2].data;
      const bookmarks = data[2].data;
      setDataPost({
        newest: newest,
        trendings: trendings,
        followings: followings,
        bookmarks: bookmarks
      })
    }).catch(error => {
      console.log('error')
    })
  }, [])


  return (
    <div className="container mx-auto mt-[55px] py-[20px]">
      <div className="md:flex md:justify-between sm:grid sm:grid-cols-1 shadow-sm px-[10px] bg-white  rounded">
        <div className=" py-[15px] flex items-center">
          {path?.map((item, index) => (
            <p key={index} onClick={() => setTab(item.value)}
              className={item.value === tab ? "after:absolute after:w-full after:h-[1px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black relative text-[12px] sm:text-[15px] px-[0px] sm:px-[5px] text-gray-600 hover:text-blue-600 sm:mr-[20px] mr-[15px]" : "relative text-[12px] sm:text-[15px] px-[0px] sm:px-[5px] text-gray-600 hover:text-blue-600 sm:mr-[20px] mr-[15px]"} >
              {item?.label}
            </p>
          ))}
        </div>
        {button &&
          <div className="self-center whitespace-nowrap">
            <button onClick={() => { history.push(button?.path); button?.event() }} className="flex my-auto hover:bg-[#0d61c7] bg-[#1273eb] text-white rounded px-[10px] gap-[5px] py-[10px] md:py-[5px] text-[14px] ">
              <div className="self-center"><button.icon className="w-[15px] fill-current" /> </div>
              <span className="hidden md:block">{button?.value}</span>
            </button>
          </div>
        }
      </div>
      <div className="grid grid-cols-10 gap-[20px] mt-[20px]">
        <Scrollbar className="col-span-10 lg:col-span-7 shadow-sm bg-white px-[5px] rounded h-screen">
          <PostView posts={tab === 1 ? dataPost.newest : (tab === 2 ? dataPost.trendings : (tab === 3 ? dataPost.followings : dataPost.bookmarks))} />
        </Scrollbar>
        <Scrollbar className="col-span-10 lg:col-span-3 bg-white shadow rounded h-screen">
          <FeaturedAuthor authors={authors} />
          <TrendingTags tags={tags} />
        </Scrollbar>
      </div>
    </div>
  )
}

export default PostPage;