import React from 'react';
import { Icon } from '../../../components/Icon';
import Navigation from '../../../components/Navigation';
import PostView from '../../../components/PostView';
import { path } from '../../../constants';

const PostPage = () => {

    // Navigation
    const pathName = [
        { path: path.POSTS, value: "Mới cập nhật" },
        { path: path.POSTS_POPULAR, value: "Thịnh hành" },
        { path: path.POSTS_FLOW, value: "Đang theo dõi" },
        { path: path.POSTS_BOOK_MARK, value: "Bookmark của tôi" },
    ]
    const button = { path: path.POSTS_CREATE, icon: Icon.Pen, value: "Viết bài" }

    // PostView
    const fieldPost = [
        {
            user: {
                fullname: "Nguyễn Thàn Đạt",
                avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
                path: "/profile/nguyenthanhdat"
            },
            post: {
                title: "Tìm hiểu về middleware trong NodeJS",
                time: "Khoảng 2h trước",
                view: 150,
                comment: 87,
                bookmark: 25,
                link: 120,
                dislike: 20,
                path: path.POSTS_ID,
                tags: [
                    { path: path.TAGS_ID, value: "NodeJS" },
                    { path: path.TAGS_ID, value: "ExpressJS" }
                ]
            }
        },
        {
            user: {
                fullname: "Bùi Thế Anh",
                avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
                path: "/profile/buitheanh"
            },
            post: {
                title: "Tìm hiểu về ExpressJS",
                time: "Khoảng 3h trước",
                view: 150,
                comment: 87,
                bookmark: 25,
                link: 120,
                dislike: 20,
                path: path.POSTS_ID,
                tags: [
                    { path: path.TAGS_ID, value: "ExpressJS" }
                ]
            }
        }
    ]

    return (
        <div className="mt-[80px]">
            <Navigation path={pathName} button={button} />
            <div className="mt-[15px]">
                <PostView data={fieldPost} />
            </div>
        </div>
    )
}

export default PostPage
