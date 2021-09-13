import React from 'react'
import Navigation from '../Commons/Navigation'
import { path } from 'src/Constants/'
import { Icon } from 'src/Components/Icon'
import Profile from '../Commons/Profile'
import QuestionInProfile from '../Commons/QuestionInProfile'
const ProfilePage = () => {
    const pathName = [
        {
            path: path.POSTS,
            value: "Bài viết"
        },
        {
            path: path.PROFILE,
            value: "Câu hỏi"
        },
        {
            path: path.QUESTIONS_BOOK_MARK,
            value: "Bookmark của tôi"
        },
        {
            path: path.TAGS,
            value: "Tags"
        }

    ]
    const button = { path: path.QUESTIONS_CREATE, icon: Icon.questions, value: "Đặt câu hỏi" }

    // authors
    const authors = [
        {
            path: "/",
            fullname: "Nguyễn Thành Đạt",
            username: "@ntdat",
            avatar: "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.30497-1/cp0/p60x60/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=T_q5miqWSkYAX_u-MBq&_nc_ht=scontent.fhan5-2.fna&oh=0206790f65d4fd5a206390b1c7a86f33&oe=615CC225",
            point: 155,
            question: 238,
            follower: 235,
            following: 85,
            post: 29,
            tags: 'ReactJS'
        }
    ]
    const fieldQuestions = [{
        user: {
            fullname: "Bùi Thế Anh",
            avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
            path: "/profile/buitheanh"
        },
        post: {
            title: "Tìm hiểu về ExpressJS",
            time: "T5, 5:00 PM",
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
    }]
    // tags
    const tags = [
        {
            path: "/",
            value: "NodeJS"
        }
    ]
    return (
        <div className="container mx-auto mt-[80px]">
            <Navigation path={pathName} button={button} />
            <div className="mt-[15px] lg:grid lg:grid-cols-4 gap-3">
                <div className=" min-w-100 max-w-100 bg-white shadow rounded">
                    <Profile authors={authors}></Profile>
                </div>
                <div className="col-start-2 col-span-4 w-full shadow-sm bg-white rounded">
                    <QuestionInProfile data={fieldQuestions}></QuestionInProfile>
                </div>

            </div>
        </div>
    )
}
export default ProfilePage;