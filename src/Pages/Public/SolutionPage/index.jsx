import React from 'react'
import Navigation from 'src/Pages/Public/Commons/Navigation'
import { useParams } from 'react-router'
import { path } from 'src/Constants/';

const SolutionPage = () => {
    const { challengeId } = useParams();

    const pathName = [
        { path: `${path.CHALLENGE}/detail/${challengeId}`, value: "Chi tiết bài tập" },
        { path: `${path.CHALLENGE_SOLUTION}/${challengeId}`, value: "Giải pháp" }
    ]

    return (
        <div className="container mx-auto mt-[55px] py-[20px]">
            <Navigation path={pathName} />
            <div className="mt-[25px]">
                <h3 className="text-[20px] font-bold text-blue-900">Các giải pháp</h3>
                {/* <div className="bg-white rounded border px-[15px] py-[10px] mt-[10px]">
                    phần này là giải pháp
                </div> */}
            </div>
        </div>
    )
}

export default SolutionPage
