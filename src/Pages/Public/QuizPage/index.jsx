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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
                <div className="shadow-sm bg-white rounded  course-item p-[15px] relative" >
                    <div className="w-full h-[220px] bg-no-repeat bg-cover   bg-center rounded  cursor-pointer" style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2yuHuE_KiWXOfDSMKzBFbAFiolnyJ9gtbQ&usqp=CAU)` }}> </div>
                    <div className="w-full" >
                        <div className="flex justify-between items-center mt-[12px]">
                            <span className="text-[20px] font-bold  cursor-pointer">Hoc thiet ke giao dien don gian</span>
                        </div>
                        <p className="text-[16px] leading-[24px] mt-[4px] text-blue-500">
                            Giup ban ren luyen cac ky nang code Html, Css
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPage
