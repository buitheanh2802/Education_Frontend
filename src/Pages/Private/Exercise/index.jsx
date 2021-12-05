import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Icon } from 'src/Components/Icon';
import { ActionGetsChallengeCate } from 'src/Redux/Actions/ChallengeCate.action';
import EditExercise from './Components/EditExercise';
import FormExercise from './Components/FormExercise';

const Exercise = () => {
    const dispatch = useDispatch();
    const { challengeCates, pagination } = useSelector(state => state.ChallengeCate);
    const [isShowModle, setIsShowModle] = useState(null);
    useEffect(() => {
        dispatch(ActionGetsChallengeCate())
    }, [dispatch]);
    return (
        <>
            {isShowModle === "add"
                ? <FormExercise
                    isShowModle={isShowModle}
                    setIsShowModle={setIsShowModle} />
                : isShowModle === "edit"
                && <EditExercise
                    isShowModle={isShowModle}
                    setIsShowModle={setIsShowModle} />}
            <div className="w-full">
                <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
                    <div className="rounded-2xl bg-white dark:bg-gray-700 w-full">
                        <div className="flex items-center justify-between p-4">
                            <p className="font-bold text-md text-black dark:text-white">
                                Danh mục bài tập
                                <span className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                                    ({pagination?.countDocuments})
                                </span>
                            </p>

                            <button onClick={() => setIsShowModle("add")} className="flex my-auto hover:bg-[#0d61c7] bg-[#1273eb] text-white rounded px-[10px] gap-[5px] py-[10px] md:py-[5px] text-[14px] ">Thêm danh mục</button>
                        </div>
                        <div className="text-sm">
                            <ul className="flex items-center gap-5 text-gray-600 dark:text-gray-200 border-b-2 border-gray-100 dark:border-gray-800 px-[20px] font-bold py-3">
                                <li className="min-w-[50px] text-center">STT</li>
                                <li className="min-w-[80px] lg:min-w-[120px]">Avatar</li>
                                <li className="w-full">Title</li>
                                <li className="whitespace-nowrap min-w-[50px]p text-center">Thao tác</li>
                            </ul>
                            {challengeCates?.map((item, index) => {
                                return (
                                    <ul className="flex items-center gap-5 text-gray-600 dark:text-gray-200 border-b-2 border-gray-100 dark:border-gray-800 px-[20px] py-3">
                                        <li className="min-w-[50px] text-center font-medium">{index + 1}</li>
                                        <li className="min-w-[80px] lg:min-w-[120px]">
                                            <div className="w-[100px] h-[60px] rounded border border-gray-300">
                                                <img className="object-cover w-full h-full" src={item?.avatar} alt={item?.title} />
                                            </div>
                                        </li>
                                        <li className="w-full">{item?.title}</li>
                                        <li className="whitespace-nowrap min-w-[50px] text-center">
                                            <button onClick={() => setIsShowModle("edit")} className="p-2 bg-yellow-500 rounded">
                                                <Icon.Pen className="fill-current w-[15px] text-white" />
                                            </button>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exercise
