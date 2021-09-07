import React from 'react';
import { Icon } from 'src/Components/Icon'
import { Link } from 'react-router-dom'
const PostsDetail = () => {
    return (
     <>
      <div className="mt-[80px] container mx-auto bg-white rounded-[5px] shadow">
         <div className="px-[10px] sm:px-[15px] py-[10px]">
            <p className="text-gray-500 text-[14px] md:text-[16px]">Trang chủ / Bài viết / <span className="text-blue-500">Tìm hiểu về Middleware trong NodeJs</span></p>
         </div>
      </div>
      <div className="w-full container mx-auto grid grid-cols-1 lg:grid-cols-[2.8fr,1.2fr] gap-[30px] mt-[20px]">
          <div className="">
            <div className="bg-white rounded-[5px] shadow px-[5px] sm:px-[15px] py-[20px] ">
                <div className="block lg:hidden">
                    <div className="flex items-center mb-[5px] ">
                        <Link to="" >
                            <img className="max-w-[40px] max-h-[40px] rounded-full" src="https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg" alt="" />
                        </Link>
                        <div className="ml-2">
                            <p className="text-blue-500 text-[14px] sm:text-[16px] font-medium flex items-center">Trần Quang Vĩnh
                                <span className=" text-[12px] sm:text-[14px] text-gray-500 hidden sm:block"> - @tranquangvinh</span>
                                <span><button className="mt-1 sm:mt-0 ml-2 border border-blue-500 text-[12px] text-blue-500 px-[5px] py-[1px] hover:text-white hover:bg-blue-500">Theo dõi</button></span>
                            </p>
                            <div className="flex items-center mt-[3px]">
                                <p className="flex items-center text-gray-500">
                                    <Icon.Point className="fill-current w-[12px] sm:w-[15px] " />
                                    <span className="text-[12px] sm:text-[14px] ml-1">48</span>
                                </p>
                                <p className="flex items-center text-gray-500 ml-[10px]">
                                    <Icon.Pen className="fill-current  w-[12px] sm:w-[13px] " />
                                    <span className="text-[12px] sm:text-[14px] ml-1">20</span>
                                </p>
                                <p className="flex items-center text-gray-500 ml-[10px]">
                                    <Icon.Questions className="fill-current w-[12px] sm:w-[13px] " />
                                    <span className="text-[12px] sm:text-[14px] ml-1">12</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-between  ">
                    <p className="text-[18px] sm:text-[24px] font-medium">Tìm hiểu về Middleware trong NodeJs</p>
                    <Icon.DotsVertical className=" w-[13px]" />
                </div>
                <div className="flex items-center mt-[10px]">
                    <p className="flex items-center text-gray-500">
                        <Icon.Eye className="fill-current w-[15px] " />
                        <span className="text-[12px] sm:text-[14px] ml-1">48 lượt xem</span>
                    </p>
                    <p className="flex items-center text-gray-500 ml-[10px]">
                        <Icon.Chat className="fill-current w-[13px] " />
                        <span className="text-[12px] sm:text-[14px] ml-1">20 bình luận</span>
                    </p>
                    <p className="flex items-center text-gray-500 ml-[10px]">
                        <Icon.Bookmark className="fill-current w-[13px] " />
                        <span className="text-[12px] sm:text-[14px] ml-1">12 đã lưu</span>
                    </p>
                </div>
                <div className="flex items-center mt-[8px]">
                    <p className="flex items-center text-gray-500">
                        <Icon.Tags className="fill-current w-[13px] " />
                        <span className="text-[14px] ml-1">Tags</span>
                    </p>
                    <span >
                        <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">JavaScript</button>
                        <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">JavaScript</button>
                        <button className="bg-[#E2E8F0] rounded-[3px] px-[5px] py-[2px] text-[12px] ml-2">JavaScript</button>
                    </span>
                </div>
                <p className="text-gray-500 text-[12px] sm:text-[14px] mt-[8px]">Đã đăng vào thg 8 23, 12:04 PM</p>
                <div className="mt-[20px] h-96 bg-gray-500"></div>
                <div className="mt-[20px] flex items-center">
                    <button className="text-blue-500 px-2 md:px-4 py-[1px] border border-blue-500 rounded-[3px] flex items-center hover:bg-blue-500 hover:text-white">
                        <Icon.Like className="fill-current w-[13px]" />
                        <span className="text-[12x] md:text-[14x] ml-1">Like</span>
                    </button>
                    <button className="ml-2 text-red-500 px-2 md:px-4 py-[1px] border border-red-500 rounded-[3px] flex items-center hover:bg-red-500 hover:text-white">
                        <Icon.Dislike className="fill-current w-[13px]" />
                        <span className="text-[12x] md:text-[14x] ml-1">Dislike</span>
                    </button>
                </div>
            </div>
          </div>
          <div className="hidden lg:block">
              <div className="bg-white shadow rounded-[5px] ">
                  <div className="flex py-[7px] block-avt">
                        <Link to="" className="m-auto ">
                            <img className="max-w-[55px] max-h-[55px] rounded-full" src="https://images.viblo.asia/avatar/afc7299e-8b69-48e5-a2e4-8bd52b38123e.jpg" alt="" />
                        </Link>
                  </div>
                  <div className="p-[10px]  border-b border-gray-100 flex justify-between items-center">
                      <p className="text-[16px] font-medium ">
                          <span className="block">Trần Quang Vĩnh</span>                        
                          <span className="block text-[14px] text-gray-500 font-normal">@tranquangvinh</span>
                      </p>
                      <button className="border border-blue-500 px-4 py-[3px] text-[14px] text-blue-500  rounded-[3px] hover:bg-blue-500 hover:text-white">Theo dõi</button>
                  </div>
                  <div className="py-[10px] flex border-b border-gray-100">
                        <div className="m-auto flex">
                            <p className="text-center  ">
                                <span className="flex items-center text-[14px] text-gray-500">
                                    <Icon.Point className="fill-current w-[13px]  mr-[3px]" />
                                    Điểm                                                                     
                                </span>
                                <span className="block ">100</span>
                            </p>
                            <p className="text-center ml-[10px] ">
                                <span className="flex items-center text-[14px] text-gray-500">
                                    <Icon.Pen className="fill-current w-[13px]  mr-[3px]" />
                                    Bài viết                                                                     
                                </span>
                                <span className="block ">100</span>
                            </p> <p className="text-center ml-[10px]">
                                <span className="flex items-center text-[14px] text-gray-500">
                                    <Icon.Questions  className="fill-current w-[13px]  mr-[3px]" />
                                    Câu hỏi                                                                     
                                </span>
                                <span className="block ">100</span>
                            </p>
                        </div>
                  </div>
                  <div className="p-[15px]">
                    <button className="text-blue-500 w-full  py-[3px] border border-blue-500 rounded-[3px] flex justify-center items-center hover:bg-blue-500 hover:text-white">
                        <Icon.Bookmark className="fill-current w-[13px]" />
                        <span className="text-[14x] ml-1">Bookmark bài viết này</span>
                    </button>
                  </div>
              </div>
              <div className="bg-white shadow rounded-[5px] mt-[20px] p-[15px] ">
                  <div className="leading-[15px]">
                        <p className="text-[18px] font-medium text-gray-600">BÀI VIẾT MỚI NHẤT</p>
                        <span className="inline-block w-[60px] h-[3px] bg-gray-600 "></span>
                  </div>
                  <div className="mt-[5px]">
                      <div className="py-[10px] border-b border-gray-100">
                          <p className="text-black font-medium">Module Pattern trong Javascript</p>
                          <p className="flex items-center ">
                              <span className="text-[14px] font-medium text-blue-500">Trần Quang Vĩnh</span>
                              <span className="text-[12px] text-gray-500 ml-2">Khoảng 14h trước</span>
                          </p>
                          <div className="flex items-center mt-[5px]">
                            <p className="flex items-center text-gray-500">
                                <Icon.Eye className="fill-current w-[15px] " />
                                <span className="text-[14px] ml-1">48</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Chat className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">20</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Like className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Dislike className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                        </div>
                      </div> <div className="py-[10px] border-b border-gray-100">
                          <p className="text-black font-medium">Module Pattern trong Javascript</p>
                          <p className="flex items-center ">
                              <span className="text-[14px] font-medium text-blue-500">Trần Quang Vĩnh</span>
                              <span className="text-[12px] text-gray-500 ml-2">Khoảng 14h trước</span>
                          </p>
                          <div className="flex items-center mt-[5px]">
                            <p className="flex items-center text-gray-500">
                                <Icon.Eye className="fill-current w-[15px] " />
                                <span className="text-[14px] ml-1">48</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Chat className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">20</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Like className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Dislike className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                        </div>
                      </div>     <div className="py-[10px] border-b border-gray-100">
                          <p className="text-black font-medium">Module Pattern trong Javascript</p>
                          <p className="flex items-center ">
                              <span className="text-[14px] font-medium text-blue-500">Trần Quang Vĩnh</span>
                              <span className="text-[12px] text-gray-500 ml-2">Khoảng 14h trước</span>
                          </p>
                          <div className="flex items-center mt-[5px]">
                            <p className="flex items-center text-gray-500">
                                <Icon.Eye className="fill-current w-[15px] " />
                                <span className="text-[14px] ml-1">48</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Chat className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">20</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Like className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Dislike className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                        </div>
                      </div>     <div className="py-[10px] border-b border-gray-100">
                          <p className="text-black font-medium">Module Pattern trong Javascript</p>
                          <p className="flex items-center ">
                              <span className="text-[14px] font-medium text-blue-500">Trần Quang Vĩnh</span>
                              <span className="text-[12px] text-gray-500 ml-2">Khoảng 14h trước</span>
                          </p>
                          <div className="flex items-center mt-[5px]">
                            <p className="flex items-center text-gray-500">
                                <Icon.Eye className="fill-current w-[15px] " />
                                <span className="text-[14px] ml-1">48</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Chat className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">20</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Like className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Dislike className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                        </div>
                      </div>     <div className="py-[10px] border-b border-gray-100">
                          <p className="text-black font-medium">Module Pattern trong Javascript</p>
                          <p className="flex items-center ">
                              <span className="text-[14px] font-medium text-blue-500">Trần Quang Vĩnh</span>
                              <span className="text-[12px] text-gray-500 ml-2">Khoảng 14h trước</span>
                          </p>
                          <div className="flex items-center mt-[5px]">
                            <p className="flex items-center text-gray-500">
                                <Icon.Eye className="fill-current w-[15px] " />
                                <span className="text-[14px] ml-1">48</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Chat className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">20</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Like className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                            <p className="flex items-center text-gray-500 ml-[10px]">
                                <Icon.Dislike className="fill-current w-[13px] " />
                                <span className="text-[14px] ml-1">12</span>
                            </p>
                        </div>
                      </div>        
                  </div>
              </div>
          </div>
      </div>
     </>
    )
}

export default PostsDetail