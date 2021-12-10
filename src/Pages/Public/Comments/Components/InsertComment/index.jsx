import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Icon } from 'src/Components/Icon'
import { path } from 'src/Constants/'

const InsertComment = ({ shortId }) => {
    const history = useHistory();
    const [isShow, setIsShow] = useState(false);
    const { profile } = useSelector(state => state.Auth);
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
        defaultValues: {
            postOrQuestionId: shortId
        },
        mode: "onSubmit",
        reValidateMode: "onBlur"
    });

    const handleOnSubmit = async (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full border border-gray-200 border-solid rounded">
            <div className="w-full relative">
                <textarea
                    {...register('content', {
                        required: {
                            value: true,
                            message: "Yêu cầu nhập trường này"
                        }
                    })}
                    onInput={() => clearErrors("content")}
                    onBlur={() => clearErrors("content")}
                    onFocus={(e) => {
                        e.target.style.height = "80px";
                        setIsShow(true)
                        if (!profile) return history.push(path.AUTH)
                    }}
                    className={`block w-full h-[36px] overflow-y-hidden resize-none outline-none text-sm px-3 py-2 focus:ring-1 focus:ring-blue-200 ${errors?.content && "focus:ring-red-200"} duration-300 rounded-t`}
                    placeholder="Ý kiến của bạn"
                ></textarea>
                {(errors?.content) && <span
                    className="absolute top-[calc(100%+10px)] left-1 text-xs text-red-500 bg-red-100 bg-opacity-95 px-2 py-1 rounded-sm max-w-[80%] before:absolute before:top-[-5px] before:rotate-[45deg] before:left-[5px] before:w-[10px] before:h-[10px] before:bg-red-100 duration-300">
                    {errors?.content?.message}
                </span>}
            </div>
            {(profile && isShow) && <div className="flex justify-between items-center p-1 border-t border-solid border-gray-200 mt-[0.5px] duration-300">
                <div className="flex gap-2 items-center">
                    <span className="w-[28px] h-[28px] rounded-full border border-solid border-gray-300 flex items-center justify-center text-sm text-gray-500 bg-gray-200 font-bold overflow-hidden">
                        {profile?.avatar?.avatarUrl?.length > 0 ? <img className="w-full h-full object-cover" src={profile?.avatar?.avatarUrl} /> : profile?.fullname?.slice(0, 1)?.toUpperCase()}
                    </span>
                    <p className="text-sm font-medium">Nguyễn Thành Đạt</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-blue-500 text-white rounded-sm px-3 md:px-5 text-sm h-[30px] flex items-center gap-2"> <Icon.Send className="fill-current w-[10px] h-[10px] md:w-[12px] md:h-[12px]" /> <span className="hidden md:block">Gửi</span></button>
                </div>
            </div>}
        </form>
    )
}

export default InsertComment
