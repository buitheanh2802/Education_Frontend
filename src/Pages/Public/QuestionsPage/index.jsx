import React from 'react'
import Navigation from '../Commons/Navigation'
import QuestionView from '../Commons/QuestionView'
import FeaturedAuthor from '../Commons/FeaturedAuthor'
import TrendingTags from '../Commons/TrendingTags'
import { path } from 'src/Constants/'
import { Icon } from 'src/Components/Icon'

const QuestionsPage = () => {

    // navigation
    const pathName = [
        {
            path: path.QUESTIONS,
            value: "Mới cập nhật"
        },
        {
            path: path.QUESTIONS_FLOW,
            value: "Đang theo dõi"
        },
        {
            path: path.QUESTIONS_BOOK_MARK,
            value: "Bookmark của tôi"
        }
    ]
    const button = { path: path.QUESTIONS_CREATE, icon: Icon.questions, value: "Đặt câu hỏi" }

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


    // Questions
    const fieldQuestions = [
        {
            user: {
                fullname: "Nguyễn Thành Đạt",
                avatar: "https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg",
                path: "/profile/nguyenthanhdat"
            },
            post: {
                title: "Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS Tìm hiểu về middleware trong NodeJS ",
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
        <div className="container mx-auto mt-[80px]">
            <Navigation path={pathName} button={button} />
            <div className="mt-[15px] gap-[15px] flex justify-between">
                <div className="w-full shadow-sm bg-white px-[5px] rounded">
                    <QuestionView data={fieldQuestions} />
                </div>
                <div className="w-[350px] min-w-[350px] max-w-[350px] bg-white shadow rounded">
                    <FeaturedAuthor authors={authors} />
                    <TrendingTags tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default QuestionsPage
