import React, { useState, useCallback } from "react"
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ErrorMessage from 'src/Components/ErrorMessage'
import SuccessMessage from 'src/Components/SuccessMessage'
import ResponseMessage from 'src/Constants/ResponseMessage'
import AuthApi from "src/Apis/AuthApi"
import LoadingIcon from "src/Components/Loading/LoadingIcon";

const ChangePersonal = ({ profile }) => {
    const [loading, setLoading] = useState({
        error: false,
        success: false,
    });
    const history = useHistory();
    const [response, setResponse] = useState({ isLoading: false, error: null, message: null })
    const { isLoading, error, message } = response;
    const { register, handleSubmit, formState: { errors }, clearErrors, getValues } = useForm({
        defaultValue: {
            fullname: profile?.fullname,
            photo: profile?.avatar?.avatarUrl,
            email: profile?.email,
            birthday: profile?.birthday,
            address: profile?.address,
            descriptions: profile?.descriptions,
            hobbies: profile?.hobbies,
            skills: profile?.skills
        }
    });
    const [ hobbies, setHobbies ] = useState(profile?.hobbies);
    const  [ skills, setSkills ] = useState(profile?.skills);

    let listHobbies = [
        { "label": "Ăn uống", "value": "1" },
        { "label": "Mua sắm", "value": "2" },
        { "label": "Chơi game", "value": "3" },
        { "label": "Đọc sách", "value": "4" },
        { "label": "Chơi thể thao", "value": "5" },
        { "label": "Nghe nhạc", "value": "6" }
    ]
    let listSkills = [
        { "label": "Front-End", "value": "1" },
        { "label": "Back-End", "value": "2" },
        { "label": "Mobile App(IOS)", "value": "3" },
        { "label": "Mobile App(Android)", "value": "4" },
        { "label": "Xử lí dữ liệu", "value": "5" }
    ]

    const renderHobbies = useCallback(() => {
        return (
            <>
                {listHobbies.map(item => {
                    return (
                        <div className="flex my-[5px]">
                            <input type="checkbox" value={item.value} onChange={(e) => handleAddHobby(e, item.label)}
                                defaultChecked={hobbies?.find(ele => ele.toLowerCase() === item.label.toLowerCase())}
                                className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" id="" />
                            <span>{item.label}</span>
                        </div>
                    )
                })}
            </>
        )
    }, [hobbies])

    const renderSkills = useCallback(() => {
        return (
            <>
                {listSkills.map(item => {
                    return (
                        <div className="flex my-[5px]">
                            <input type="checkbox" value={item.value} onChange={(e) => handleAddSkill(e, item.label)}
                                defaultChecked={skills?.find(ele => ele.toLowerCase() === item.label.toLowerCase())}
                                className="px-[6px] py-[8px] mx-[10px] border rounded-[5px] my-[5px] outline-none" id="" />
                            <span>{item.label}</span>
                        </div>
                    )
                })}
            </>
        )
    }, [skills])

    const handleAddHobby = useCallback ((e, hobby) => {
        if (e.target.checked) {
            setHobbies([...hobbies, hobby]);
        } else {
            setHobbies(hobbies.filter(item => item !== hobby));
        }
    }, [hobbies])

    const handleAddSkill = useCallback((e, skill) => {
        if (e.target.checked) {
            setSkills([...skills, skill])
        } else {
            setSkills(skills.filter(item => item !== skill))
        }
    }, [skills])

    const onSubmit = async (data) => {
        try {
            setResponse({ isLoading: false, error: null, message: null })
            if (data) setLoading({ ...loading, success: true });
            let uploads = new FormData();
            if (data.photo) { uploads.append("photo", data.photo[0]) }
            if (data.birthday) { uploads.append("birthday", data.birthday) }
            if (data.address) { uploads.append("address", data.address) }
            if (data.descriptions) { uploads.append("descriptions", data.descriptions) }
            if (hobbies) { uploads.append("hobbies", hobbies) };
            if (skills) { uploads.append("skills", skills) };
            const { data: res } = await AuthApi.changeInfo(uploads);
            if (res) setLoading({ ...loading, success: false });
            setResponse({
                ...response,
                error: null,
                message: "Đổi thông tin thành công",
            })
            setTimeout(() => {
                history.push('/profile/me/change-info')
            }, 2000);
        } catch (error) {
            setResponse({
                ...response,
                error: ResponseMessage(error?.response?.data?.message[0]),
                message: null
            })
            setLoading({ ...loading, success: false });
        }
    }

    return (
        <>
            <div className="px-[20px] lg:px-[50px] pt-[15px] pb-[50px]">
                <p className="text-gray-800 font-bold text-[23px]">Thông tin cá nhân</p>
                <p className="text-gray-800 text-[15px] py-[10px]">
                    Quản lý thông tin cá nhân của bạn.
                </p>
                <div className="w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mx-auto w-[220px]">
                            {profile?.avatar?.avatarUrl ?
                                <img className="w-[120px] h-[120px] mx-auto rounded-full" src={profile?.avatar?.avatarUrl} alt="Image" />
                                :
                                <div className="w-[120px] h-[120px] leading-[120px] text-white mx-auto rounded-full px-[8px] bg-blue-200">
                                    Choose image
                                </div>
                            }
                            <input type="file"
                                onChangeCapture={() => { clearErrors('photo') }}
                                {...register('photo')}
                                className="mx-auto my-[5px] w-[100%] outline-none"
                            />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Tên tài khoản:
                            </p>
                            <input defaultValue={profile?.fullname} disabled className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Email:
                            </p>
                            <input defaultValue={profile?.email} disabled className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Ngày sinh:
                            </p>
                            <input type="date" defaultValue={profile?.birthday}
                                onChangeCapture={() => { clearErrors('birthday') }}
                                {...register('birthday')}
                                className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Địa chỉ:
                            </p>
                            <input type="text" defaultValue={profile?.address}
                                onChangeCapture={() => { clearErrors('address') }}
                                {...register('address')}
                                className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Mô tả:
                            </p>
                            <textarea defaultValue={profile?.descriptions}
                                rows={6}
                                onChangeCapture={() => { clearErrors('descriptions') }}
                                {...register('descriptions')}
                                className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Sở thích:
                            </p>
                            <form id="hobbies" className="grid grid-cols-3">
                                {renderHobbies()}
                            </form>
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                Kỹ năng:
                            </p>
                            <form id="skills" className="grid grid-cols-3">
                                {renderSkills()}
                            </form>
                        </div>
                        {error && <ErrorMessage message={error} />}
                        {message && <SuccessMessage message={message} />}
                        <div className="flex justify-end">
                            <button
                                onClick={() => { history.push('/profile/me/change-info') }}
                                className="mx-[10px] bg-blue-200 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-gray-200 hover:text-blue-600 focus:border-blue-600"
                                type="submit"
                            >
                                hủy bỏ
                            </button>
                            <button
                                className="flex bg-blue-500 text-white rounded-[5px] py-[6px] px-[10px] mt-[15px] text-[15px] hover:bg-blue-800 focus:border-blue-600"
                                type="submit"
                            >
                                {loading.success && (
                                    <LoadingIcon className="w-[20px] fill-current mr-[5px] h-[20px] " />
                                )}
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ChangePersonal;