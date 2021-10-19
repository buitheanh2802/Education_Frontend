import React from 'react'
import Navigation from '../Commons/Navigation'
import PostView from '../Commons/PostView'
import FeaturedAuthor from '../Commons/FeaturedAuthor'
import TrendingTags from '../Commons/TrendingTags'
import { path } from 'src/Constants/'
import { Icon } from 'src/Components/Icon'
import Scrollbar from 'react-smooth-scrollbar'
import TestComponents from '../Commons/TestComponents'

const PostPage = () => {

    // Navigation
    const pathName = [
        { path: path.POSTS, value: "Mới cập nhật" },
        { path: path.POSTS_POPULAR, value: "Thịnh hành" },
        { path: path.POSTS_FLOW, value: "Đang theo dõi" },
        { path: path.POSTS_BOOK_MARK, value: "Bookmark của tôi" },
    ]
    const button = { path: path.POSTS_CREATE, icon: Icon.Pen, value: "Viết bài" }

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

    // Posts
    // const fieldPosts = [
    //     {
    //         user: {
    //             fullname: "Nguyễn Thành Đạt",
    //             avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
    //             path: "/profile/nguyenthanhdat"
    //         },
    //         post: {
    //             title: "Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS ",
    //             time: "Khoảng 2h trước",
    //             view: 150,
    //             comment: 87,
    //             bookmark: 25,
    //             link: 120,
    //             dislike: 20,
    //             path: path.POSTS_ID,
    //             tags: [
    //                 { path: path.TAGS_ID, value: "NodeJS" },
    //                 { path: path.TAGS_ID, value: "ExpressJS" }
    //             ]
    //         }
    //     },
    //     {
    //         user: {
    //             fullname: "Nguyễn Thành Đạt",
    //             avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
    //             path: "/profile/nguyenthanhdat"
    //         },
    //         post: {
    //             title: "Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS ",
    //             time: "Khoảng 2h trước",
    //             view: 150,
    //             comment: 87,
    //             bookmark: 25,
    //             link: 120,
    //             dislike: 20,
    //             path: path.POSTS_ID,
    //             tags: [
    //                 { path: path.TAGS_ID, value: "NodeJS" },
    //                 { path: path.TAGS_ID, value: "ExpressJS" }
    //             ]
    //         }
    //     }
    // ]

    const fieldPosts = [
        {
            _id: "âhbcsjascjbajschbajschjacvfdvf",
            fullname: "Nguyễn Thành Đạt",
            avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
            title: "Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS ",
            view: 78,
            comment: 90,
            bookmark: 789,
            time: "Khoảng 2h trước"
        },
        {
            _id: "âhbcsjascjbajschbajschjacbsds",
            fullname: "Nguyễn Thành Đạt",
            avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
            title: "Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS ",
            view: 78,
            comment: 90,
            bookmark: 789,
            time: "Khoảng 2h trước"
        },
        {
            _id: "âhbcsjascjbajschbajschjasdccb",
            fullname: "Nguyễn Thành Đạt",
            avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
            title: "Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS ",
            view: 78,
            comment: 90,
            bookmark: 789,
            time: "Khoảng 2h trước"
        },
        {
            _id: "âhbcsjascjbajschsdcbajschjacb",
            fullname: "Nguyễn Thành Đạt",
            avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
            title: "Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS ",
            view: 78,
            comment: 90,
            bookmark: 789,
            time: "Khoảng 2h trước"
        }
    ]

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <Navigation path={pathName} button={button} />
            <div className="grid grid-cols-10 gap-[20px] mt-[20px]">
                <Scrollbar className="col-span-10 lg:col-span-7 shadow-sm bg-white px-[5px] rounded h-screen">
                    {/* <PostView data={fieldPosts} /> */}
                    {/* <TestComponents data={ } /> */}
                    {fieldPosts?.map((item, index) => {
                        return <TestComponents key={index} data={item} />
                    })}
                </Scrollbar>
                <Scrollbar className="col-span-10 lg:col-span-3 bg-white shadow rounded h-screen">
                    <FeaturedAuthor authors={authors} />
                    <TrendingTags tags={tags} />
                </Scrollbar>
            </div>
        </div>
    )
}

export default PostPage
