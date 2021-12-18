import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'src/Components/Icon'
import { path } from 'src/Constants/'
import Navigation from 'src/Pages/Public/Commons/Navigation'

const QuizPage = () => {
    const { profile } = useSelector(state => state.Auth)
    const pathName = [
        { path: path.CHALLENGE, value: "Danh mục bài tập" },
        { path: path.QUIZ, value: "Quiz" }
    ]
    const button = { path: path.QUIZ_CREATE, icon: Icon.About, value: "Thêm quiz" }
    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <Navigation path={pathName} button={profile?.role && button} />
            <div className="mt-[25px]">
                <p className='text-yellow-500 font-extralight text-2xl text-center'>Xin lỗi chức năng này đang được phát triển</p>
            </div>
        </div>
    )
}

export default QuizPage
