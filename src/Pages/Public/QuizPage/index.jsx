import React from 'react'
import { Icon } from 'src/Components/Icon'
import { path } from 'src/Constants/'
import Navigation from 'src/Pages/Public/Commons/Navigation'

const QuizPage = () => {
    const pathName = [
        { path: path.CHALLENGE, value: "Danh mục bài tập" },
        { path: path.QUIZ, value: "Quiz" }
    ]
    const button = { path: path.QUIZ_CREATE, icon: Icon.About, value: "Thêm quiz" }
    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <Navigation path={pathName} button={button} />
        </div>
    )
}

export default QuizPage
