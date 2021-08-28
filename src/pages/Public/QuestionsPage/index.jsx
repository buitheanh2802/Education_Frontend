import React from 'react'
import { Icon } from '../../../components/Icon'
import Navigation from '../../../components/Navigation'
import { path } from '../../../constants'

const QuestionsPage = () => {
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
    return (
        <div className="mt-[60px]">
            <Navigation path={pathName} button={button} />
        </div>
    )
}

export default QuestionsPage
