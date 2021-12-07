import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "src/Redux/Slices/Loading.slice";
import Sidebar from "./../Sidebar";

const ChangePersonal = ({ profile }) => {

    return (
        <>
            <div className="px-[20px] lg:px-[50px] pt-[15px] pb-[50px]">
                <p className="text-gray-800 font-bold text-[23px]">Thông tin cá nhân</p>
                <p className="text-gray-800 text-[15px] py-[10px]">
                    Quản lý thông tin cá nhân của bạn.
                </p>
                <div className="w-full">
                    <form>
                        <div className="mx-auto w-[220px]">
                            {profile?.avatar?.avatarUrl ?
                                <img className="mx-auto" src={profile?.avatar?.avatarUrl} alt="Avatar" />
                                :
                                <div className="w-[120px] h-[120px] leading-[120px] text-white mx-auto rounded-full px-[8px] bg-blue-200">
                                    Choose image
                                </div>
                            }
                            <input className="mx-auto my-[5px] w-[100%] outline-none" type="file" name="" id="" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Tên tài khoản:
                            </p>
                            <input disabled className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Email:
                            </p>
                            <input disabled className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px]" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Ngày sinh:
                            </p>
                            <input type="date" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Địa chỉ:
                            </p>
                            <input type="text" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Mô tả:
                            </p>
                            <textarea className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Sở thích:
                            </p>
                            <input type="text" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                        <div className="py-[5px]">
                            <p className="text-gray-800 text-[15px] py-[5px]">
                                <span className="text-red-600 font-bold mr-[5px]">*</span>
                                Kỹ năng:
                            </p>
                            <input type="text" className="px-[6px] w-[100%] py-[8px] border rounded-[5px] my-[5px] outline-none" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ChangePersonal;