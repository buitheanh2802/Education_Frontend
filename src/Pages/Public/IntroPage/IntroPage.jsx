import React from "react";
import banner_intro_img from "../../../Assets/media/pictures/banner-intro.png";
import intro1_img from "../../../Assets/media/pictures/intro1.png";
import intro2_img from "../../../Assets/media/pictures/intro2.png";
import giatri1_img from "../../../Assets/media/pictures/intro_gtri1.png";
import giatri2_img from "../../../Assets/media/pictures/intro_gtri2.png";
import giatri3_img from "../../../Assets/media/pictures/intro_gtri3.png";
import giatri4_img from "../../../Assets/media/pictures/intro_gtri4.png";
import trinhdo_img from "../../../Assets/media/pictures/intro_trinhdo.png";
import batdau1_img from "../../../Assets/media/pictures/batdau_1.png";
import batdau2_img from "../../../Assets/media/pictures/batdau_2.png";
import batdau3_img from "../../../Assets/media/pictures/batdau_3.png";
const IntroPage = () => {
  return (
    <div className="bg-white">
      <div className=" w-auto">
        <div className="mt-[50px] ">
          <div
            className="h-[200px] lg:h-[280px] bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 9 , 30, 0.35), rgba(4, 9, 30, 0.35)) ,url(${banner_intro_img})`,
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto mb-[80px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[100px] md:gap-[30px] sm:gap-[20px]  ">
          <div className="mt-[-100px] md:mt-[-60px]">
            <img className="w-full" src={intro1_img} alt="" />
          </div>
          <div className="flex items-center">
            <div className="mt-5 md:mt-0">
              <h3 className="lg:text-[36px] font-medium sm:text-[20px] text-[25px] lg:leading-[54px] ">
                CHÚNG TÔI LÀ AI?
              </h3>
              <p className="mt-2 lg:text-[16px] sm:text-[13px]  text-[16px] lg:leading-[24px] text-justify">
                DevStar là một hệ thống và nền tảng tương tác trực tuyến cho
                phép người dùng học, thực hành và đánh giá kỹ năng lập trình của
                mình thông qua các bài tập thực hành, các cuộc thi viết code với
                chức năng tự động chấm điểm để người dùng có thể cải thiện kỹ
                năng và tăng năng suất.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] xl:gap-[100px] mt-8 lg:mt-[50px] ">
          <div className=" col-span-1">
            <h3 className="lg:text-[36px] font-medium sm:text-[20px] text-[25px]">
              NHIỆM VỤ
            </h3>
            <p className="lg:text-[16px] pt-[10px] leading-[24px] md:text-[13px] text-justify">
              Chúng tôi tập trung vào việc phát triển một hệ sinh thái toàn diện
              với các khóa học từ cơ bản đến nâng cao và thực hành các thử thách
              phù hợp với tất cả mọi người. Với các khóa học và thử thách phong
              phú, đa dạng hỗ trợ nhiều ngôn ngữ lập trình khác nhau, DevStar
              giúp người dùng học và thực hành lập trình một cách dễ dàng và
              hiệu quả.
              <br />
              Chúng tôi kết nối tất cả những người có chung niềm đam mê với các
              lĩnh vực khoa học máy tính, sau đó cùng nhau xây dựng một cộng
              đồng vững mạnh.
            </p>
          </div>
          <div className=" hidden md:block h-auto mr-[50px]">
            <div className="flex h-full">
              <img src={intro2_img} alt="" className="m-auto " />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EBF8FF] pb-[40px] lg:pb-[77px] px-[15px] sm:px-[35px] relative ">
        <div className="container section-infor mx-auto">
          <h3 className="text-center lg:text-[36px] text-[26px] font-bold mb-[35px] lg:pt-[75px] pt-[50px]">
            NHỮNG GIÁ TRỊ HỮU ÍCH
          </h3>
          <div className="grid  gap-x-[43px] md:grid-cols-1 lg:grid-cols-2 gap-y-[37px] ">
            <div className="flex  pl-[14px] pr-[22px] bg-[#BEE3F8] py-[25px]">
              <img src={giatri1_img} className="w-[75px] h-[75px] " alt="" />
              <div className="text-left pl-[20px]">
                <h4 className="text-[16px] font-bold  leading-[24px]">
                  Kiến thức
                </h4>
                <p className="text-[14px] font-normal leading-[20px]">
                  Các khóa học trực tuyến từ cơ bản đến nâng cao dành cho mục
                  đích thực hành và học tập của nhiều loại người dùng khác nhau.
                </p>
              </div>
            </div>
            <div className="flex py-[25px] pl-[19px]  pr-[17px] bg-[#FFFFFF]">
              <img src={giatri2_img} className="w-[75px] h-[75px]" alt="" />
              <div className=" ml-[20px]">
                <h3 className="text-[16px] leading-[24px] font-bold">
                  Kiến thức
                </h3>
                <p className="pt-[2px] text-[14px] leading-[20px] font-normal">
                  Một lượng lớn các thách thức thuật toán khuyến khích người
                  dùng tạo ra các giải pháp bằng nhiều ngôn ngữ khác nhau.
                </p>
              </div>
            </div>
            <div className="flex   pt-[23px] pb-[20px] pl-[14px]  pr-[28px] bg-[#FFFFFF]">
              <img src={giatri3_img} className="w-[75px] h-[75px]" alt="" />
              <div className=" ml-[15px]">
                <h3 className="text-[16px] leading-[24px] font-bold pt-[1px]">
                  Sự liên quan
                </h3>
                <p className="pt-[2px] text-[14px] leading-[20px] ">
                  Cộng đồng để các nhà phát triển đến, giải quyết vấn đề cùng
                  nhau và học hỏi lẫn nhau.
                </p>
              </div>
            </div>
            <div className="flex  pt-[25px]  pl-[19px] pb-[20px]  pr-[17px] bg-[#BEE3F8]">
              <img src={giatri4_img} className="w-[75px] h-[75px]" alt="" />
              <div className=" ml-[20px]">
                <h3 className="text-[16px] leading-[24px] font-bold">
                  Niềm vui của khách hàng
                </h3>
                <p className="pt-[2px] text-[14px] leading-[20px] font-normal">
                  Một người bạn đồng hành đáng tin cậy để cung cấp các cuộc thi
                  cho các tổ chức và hỗ trợ các cá nhân lưu trữ các mục tiêu của
                  họ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[40px] lg:mt-[80px] bg-gray-700 px-[15px] sm:px-[35px]">
        <div className="container mx-auto py-[30px]  ">
          <div className="grid  lg:grid-cols-2 grid-cols-1  items-center gap-[30px] xl:gap-[180px] text-[#FFFFFF] justify-items-start xl:px-[80px]">
            <div className=" ">
              <p className="text-[24px] md:text-[28px] leading-[40px] lg:text-[36px] md:leading-[54px] font-bold ">
                ĐÃ ĐẾN LÚC NÂNG CAO TRÌNH ĐỘ CỦA BẠN
              </p>
              <p className="pt-[27px] text-[16px] md:text-[18px] leading-[25px] text-justify">
                Tôi cảm thấy mình thật may mắn khi được truyền cảm hứng sáng tạo
                và theo đuổi những gì tôi đam mê mỗi ngày. Tôi muốn cung cấp cho
                bạn các kiến thức để nâng cao trình độ của bạn, tạo ra một trang
                web tuyệt vời và không cảm thấy bị choáng ngợp bởi quá trình
                này. Tôi muốn giúp bạn dễ dàng chia sẻ câu chuyện của mình và
                phát triển mình theo cách tốt nhất.
              </p>
              <div className="max-w-[300px] md:w-[310px] mx-auto mt-[26px]  bg-blue-400 text-[#FFFFFF] justify-items-center  items-center text-center py-[9px]">
                <button className=" ">THAM GIA CÁC KHÓA HỌC</button>
              </div>
            </div>
            <div className=" mx-auto ">
              <img src={trinhdo_img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-[60px] lg:mt-[100px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[100px] xl:px-[100px]">
          <div className="w-full">
            <div className="w-full">
              <h3 className=" text-[24px] md:text-[30px] :leading-[30px] font-bold sm:text-[28px] sm:leading-[40px]  lg:text-[36px] lg:leading-[54px]">
                CHÚNG TÔI ĐÃ BẮT ĐẦU NHƯ THẾ NÀO
              </h3>
              <p className="pt-[20px] text-[18px] leading-[27px] sm:text-[16px] text-justify">
                DevStar thành lập nên giúp bạn khám phá giới hạn của chính mình.
                Chúng tôi hứa hẹn sẽ mang đến một kênh chia sẻ kiến ​​thức về
                các ngôn ngữ lập trình cho các nhà phát triển không chỉ ở Việt
                Nam mà còn vươn xa hơn.
              </p>
            </div>

            <div className="select-none mt-[40px] md:mt-[20px] lg:mt-[100px] xl:mt-[150px] mb-[30px]">
              <h4 className="text-center  text-[18px] leading-[27px] font-bold mb-[13px]">
                Tháng 12 năm 2021
              </h4>
              <div className="relative">
                <img className="w-full" src={batdau1_img} alt="" />
                <div className="absolute text-center px-[10px] sm:px-[10px] sm:py-[5px] lg:px-[15px] text-[#FFFFFF] w-[70%] bg-[#35a6e7] bg-opacity-[85%] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                  <h4 className="pt-[15px] text-[24px] leading-[36px] sm:text-[15px] sm:pt-[5px] lg:pt-[45px] lg:text-[24px] font-bold">
                    Giới thiệu
                  </h4>
                  <p className=" text-[14px] leading-[21px] pb-[20px] sm:text-[10px] sm:leading-[15px] sm:pb-[10px]  lg:text-[14px] lg:leading-[21px] lg:pb-[48px]">
                    Hệ thống hiện có tên chính thức là DevStar và được các thành
                    viên trong dự án dần hoàn thiện.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-2">
            <div className="select-none relative  mb-[40px]">
              <h4 className="text-center  text-[18px] leading-[27px] font-bold mb-[13px]">
                Tháng 12 năm 2021
              </h4>
              <div className="relative">
                <img className="w-full" src={batdau2_img} alt="" />
                <div className="absolute text-center px-[10px] sm:px-[10px] sm:py-[5px] lg:px-[15px] text-[#FFFFFF] w-[70%] bg-[#35a6e7] bg-opacity-[85%] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                  <h4 className="pt-[15px] text-[24px] leading-[36px] sm:text-[15px] sm:pt-[5px] lg:pt-[45px] lg:text-[24px] font-bold">
                    Ý tưởng đầu tiên
                  </h4>
                  <p className=" text-[14px] leading-[21px] pb-[20px] sm:text-[10px] sm:leading-[15px] sm:pb-[10px]  lg:text-[14px] lg:leading-[21px] lg:pb-[48px]">
                    Giữa năm 2021, những ý tưởng đầu tiên về hệ thống cộng đồng
                    chia sẻ kiến thức đã đến với chúng tôi. Chúng tôi bắt đầu
                    đặt viên gạch đầu tiên xây dựng hệ thống vào tháng 7/2021.
                  </p>
                </div>
              </div>
            </div>
            <div className="select-none relative md:mt-[50px] ">
              <h4 className="text-center  text-[18px] leading-[27px] font-bold mb-[13px]">
                Tháng 12 năm 2021
              </h4>
              <div className="relative">
                <img className="w-full" src={batdau3_img} alt="" />
                <div className="absolute text-center px-[10px] sm:px-[10px] sm:py-[5px] lg:px-[15px] text-[#FFFFFF] w-[70%] bg-[#35a6e7] bg-opacity-[85%] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                  <h4 className="pt-[15px] text-[24px] leading-[36px] sm:text-[15px] sm:pt-[5px] lg:pt-[45px] lg:text-[24px] font-bold">
                    Ra mắt
                  </h4>
                  <p className=" text-[14px] leading-[21px] pb-[20px] sm:text-[10px] sm:leading-[15px] sm:pb-[10px]  lg:text-[14px] lg:leading-[21px] lg:pb-[48px]">
                    Sau 2 tháng phát triển, nhóm đã cho ra đời phiên bản thử
                    nghiệm đầu tiên với hơn 100 người dùng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroPage;
