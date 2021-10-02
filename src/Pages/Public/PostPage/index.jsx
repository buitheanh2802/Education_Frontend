import React from 'react';
import { Icon } from 'src/Components/Icon';
import { path } from 'src/Constants/';
import Navigation from '../Commons/Navigation';

const PostPage = () => {

    // Navigation
    const pathName = [
        { path: path.POSTS, value: "Mới cập nhật" },
        { path: path.POSTS_POPULAR, value: "Thịnh hành" },
        { path: path.POSTS_FLOW, value: "Đang theo dõi" },
        { path: path.POSTS_BOOK_MARK, value: "Bookmark của tôi" },
    ]
    const button = { path: path.POSTS_CREATE, icon: Icon.Pen, value: "Viết bài" }

    return (
        <div className="mt-[55px] container mx-auto py-[20px]">
            <Navigation path={pathName} button={button} />
        </div>
    )
}

export default PostPage
