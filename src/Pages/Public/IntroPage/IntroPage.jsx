import React from "react";
import banner_intro from "../../../Assets/media/pictures/inner_page_banner.jpg";
import team from "../../../Assets/media/pictures/teamwork.png";
import intro_img from "../../../Assets/media/pictures/intro2.png";
import giatri1_img from "../../../Assets/media/pictures/intro_gtri1.png";
import giatri2_img from "../../../Assets/media/pictures/intro_gtri2.png";
import giatri3_img from "../../../Assets/media/pictures/intro_gtri3.png";
import giatri4_img from "../../../Assets/media/pictures/intro_gtri4.png";
import trinhdo_img from "../../../Assets/media/pictures/intro_trinhdo.png";
import batdau1_img from "../../../Assets/media/pictures/batdau_1.png";
import batdau2_img from "../../../Assets/media/pictures/batdau_2.png";
import batdau3_img from "../../../Assets/media/pictures/batdau_3.png";
import theanh from "../../../Assets/media/pictures/theanh.png";
import nguyen from "../../../Assets/media/pictures/hnguyen.png";
import dat from "../../../Assets/media/pictures/dat.png";
import hai from "../../../Assets/media/pictures/nguyenhai.png";
import my from "../../../Assets/media/pictures/myy.png";
import vinh from "../../../Assets/media/pictures/vinh.png";
import cong from "../../../Assets/media/pictures/cong.png";
import { Link } from "react-router-dom";

const IntroPage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="bg-white pb-[20px]">
      <div className="w-auto pt-[20px]">
        <div className="mt-[50px] ">
          <div
            className="h-[200px] lg:h-[280px] bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `linear-gradient(rgba(4, 9 , 30, 0.35), rgba(4, 9, 30, 0.35)) ,url(${banner_intro})`,
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto mb-[80px]">
        <div className="grid xl:px-[100px] grid-cols-1 md:grid-cols-2 lg:gap-[100px] md:gap-[30px] sm:gap-[20px]">
          <div className="mt-[-100px] md:mt-[-60px]">
            <img className="w-full" src={team} alt="" />
          </div>
          <div className="flex items-center">
            <div className="mt-5 md:mt-0">
              <h3 className="lg:text-[36px] font-medium sm:text-[20px] text-[25px] lg:leading-[54px] ">
                CH??NG T??I L?? AI?
              </h3>
              <p className="mt-2 lg:text-[16px] sm:text-[13px]  text-[16px] lg:leading-[24px] text-justify">
                DevStar l?? m???t h??? th???ng v?? n???n t???ng t????ng t??c tr???c tuy???n cho
                ph??p ng?????i d??ng h???c, th???c h??nh, chia s???, h???i ????p v?? ????nh gi?? k???
                n??ng l???p tr??nh c???a m??nh th??ng qua c??c b??i t???p th???c h??nh, c??c b??i
                quiz ????? ng?????i d??ng c?? th??? c???i thi???n k??? n??ng v?? t??ng n??ng su???t.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] xl:gap-[100px] xl:px-[100px] mt-8 lg:mt-[50px]">
          <div className="col-span-1">
            <h3 className="lg:text-[36px] font-medium sm:text-[20px] text-[25px]">
              NHI???M V???
            </h3>
            <p className="lg:text-[16px] pt-[10px] leading-[24px] md:text-[13px] text-justify">
              Ch??ng t??i t???p trung v??o vi???c ph??t tri???n m???t h??? sinh th??i to??n di???n
              v???i c??c b??i th???c h??nh t??? c?? b???n ?????n n??ng cao v?? b??i vi???t chia s???
              ki???n th???c ph?? h???p v???i t???t c??? m???i ng?????i. DevStar gi??p ng?????i d??ng
              h???c v?? th???c h??nh l???p tr??nh m???t c??ch d??? d??ng v?? hi???u qu???.
              <br />
              Ch??ng t??i k???t n???i t???t c??? nh???ng ng?????i c?? chung ni???m ??am m?? v???i c??c
              l??nh v???c khoa h???c m??y t??nh, sau ???? c??ng nhau x??y d???ng m???t c???ng
              ?????ng v???ng m???nh.
            </p>
          </div>
          <div className=" hidden md:block h-auto mr-[50px]">
            <div className="flex h-full">
              <img src={intro_img} alt="" className="m-auto " />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EBF8FF] pb-[40px] lg:pb-[77px] relative">
        <div className="container xl:px-[100px] section-infor mx-auto">
          <h3 className="text-center lg:text-[36px] text-[26px] font-bold mb-[35px] lg:pt-[75px] pt-[50px]">
            NH???NG GI?? TR??? H???U ??CH
          </h3>
          <div className="grid  gap-x-[43px] md:grid-cols-1 lg:grid-cols-2 gap-y-[37px] ">
            <div className="flex  pl-[14px] pr-[22px] bg-[#BEE3F8] py-[25px]">
              <img src={giatri1_img} className="w-[75px] h-[75px] " alt="" />
              <div className="text-left pl-[20px]">
                <h4 className="text-[16px] font-bold  leading-[24px]">
                  Ki???n th???c
                </h4>
                <p className="text-[14px] font-normal leading-[20px]">
                  C??c b??i chia s???, kh??a h???c tr???c tuy???n t??? c?? b???n ?????n n??ng cao
                  d??nh cho m???c ????ch th???c h??nh v?? h???c t???p c???a nhi???u lo???i ng?????i
                  d??ng kh??c nhau.
                </p>
              </div>
            </div>
            <div className="flex py-[25px] pl-[19px]  pr-[17px] bg-[#FFFFFF]">
              <img src={giatri2_img} className="w-[75px] h-[75px]" alt="" />
              <div className=" ml-[20px]">
                <h3 className="text-[16px] leading-[24px] font-bold">
                  Ki???n th???c
                </h3>
                <p className="pt-[2px] text-[14px] leading-[20px] font-normal">
                  M???t l?????ng l???n c??c th??ch th???c thu???t to??n khuy???n kh??ch ng?????i
                  d??ng t???o ra c??c gi???i ph??p b???ng nhi???u ng??n ng??? kh??c nhau.
                </p>
              </div>
            </div>
            <div className="flex pt-[23px] pb-[20px] pl-[14px]  pr-[28px] bg-[#FFFFFF]">
              <img src={giatri3_img} className="w-[75px] h-[75px]" alt="" />
              <div className=" ml-[15px]">
                <h3 className="text-[16px] leading-[24px] font-bold pt-[1px]">
                  S??? li??n quan
                </h3>
                <p className="pt-[2px] text-[14px] leading-[20px] ">
                  C???ng ?????ng ????? c??c nh?? ph??t tri???n ?????n, gi???i quy???t v???n ????? c??ng
                  nhau v?? h???c h???i l???n nhau.
                </p>
              </div>
            </div>
            <div className="flex pt-[25px] pl-[19px] pb-[20px] pr-[17px] bg-[#BEE3F8]">
              <img src={giatri4_img} className="w-[75px] h-[75px]" alt="" />
              <div className=" ml-[20px]">
                <h3 className="text-[16px] leading-[24px] font-bold">
                  Ni???m vui
                </h3>
                <p className="pt-[2px] text-[14px] leading-[20px] font-normal">
                  M???t ng?????i b???n ?????ng h??nh ????ng tin c???y ????? cung c???p c??c cu???c thi
                  cho c??c t??? ch???c v?? h??? tr??? c??c c?? nh??n l??u tr??? c??c m???c ti??u c???a
                  h???.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[60px]">
        <div className="container mx-auto xl:px-[100px]">
          <h3 className="text-[24px] md:text-[30px] font-semibold sm:text-[28px] sm:leading-[40px] text-center lg:text-[36px] lg:leading-[54px] uppercase text-blue-300">
            Nh??m ch??ng t??i
          </h3>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[30px] mt-[40px]">
            <div className="mx-auto">
              <img
                src={theanh}
                className="rounded-full my-[10px] max-w-[220px]"
                alt="TheAnh"
              />
              <div className="text-center font-bold uppercase">B??i Th??? Anh</div>
              <div className="text-center">Back-End Developer</div>
            </div>
            <div className="mx-auto">
              <img
                src={hai}
                className="rounded-full my-[10px] max-w-[220px]"
                alt="Hai"
              />
              <div className="text-center font-bold uppercase">
                Nguy???n H???ng H???i
              </div>
              <div className="text-center">Back-End Developer</div>
            </div>
            <div className="mx-auto">
              <img
                src={dat}
                className="rounded-full my-[10px] max-w-[220px]"
                alt="Dat"
              />
              <div className="text-center font-bold uppercase">
                Nguy???n Th??nh ?????i
              </div>
              <div className="text-center">Front-End Developer</div>
            </div>
            <div className="mx-auto">
              <img
                src={nguyen}
                className="rounded-full my-[10px] max-w-[220px]"
                alt="Nguyen"
              />
              <div className="text-center font-bold uppercase">
                Ki???u Th??? H???nh Nguy??n
              </div>
              <div className="text-center">Front-End Developer</div>
            </div>
            <div className="mx-auto">
              <img
                src={vinh}
                className="rounded-full my-[10px] max-w-[220px]"
                alt="Vinh"
              />
              <div className="text-center font-bold uppercase">
                Tr???n Quang V??nh
              </div>
              <div className="text-center">Front-End Developer</div>
            </div>
            <div className="mx-auto">
              <img
                src={my}
                className="rounded-full my-[10px] max-w-[220px]"
                alt="My"
              />
              <div className="text-center font-bold uppercase">
                Nguy???n Th??? M??? M???
              </div>
              <div className="text-center">Tester</div>
            </div>
            <div className="mx-auto">
              <img
                src={cong}
                className="rounded-full my-[10px] max-w-[220px]"
                alt="Cong"
              />
              <div className="text-center font-bold uppercase">
                Ph???m Minh C??ng
              </div>
              <div className="text-center">Content Doc</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[60px] bg-blue-400">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-[30px] xl:gap-[180px] text-[#FFFFFF] justify-items-start xl:px-[100px]">
            <div className="">
              <p className="text-[24px] md:text-[28px] leading-[40px] lg:text-[36px] md:leading-[54px] font-bold ">
                ???? ?????N L??C N??NG CAO TR??NH ????? C???A B???N
              </p>
              <p className="pt-[27px] text-[16px] md:text-[18px] leading-[25px] text-justify">
                T??i c???m th???y m??nh th???t may m???n khi ???????c truy???n c???m h???ng s??ng t???o
                v?? theo ??u???i nh???ng g?? t??i ??am m?? m???i ng??y. T??i mu???n cung c???p cho
                b???n c??c ki???n th???c ????? n??ng cao tr??nh ????? c???a b???n, t???o ra m???t trang
                web tuy???t v???i v?? kh??ng c???m th???y b??? cho??ng ng???p b???i qu?? tr??nh
                n??y. T??i mu???n gi??p b???n d??? d??ng chia s??? c??u chuy???n c???a m??nh v??
                ph??t tri???n m??nh theo c??ch t???t nh???t.
              </p>
              <div className="text-center mt-[26px]">
                <Link
                  to="/"
                  className="max-w-[300px] md:w-[310px] mx-auto bg-blue-600 hover:bg-blue-800 text-[#FFFFFF] justify-items-center px-[10px] py-[9px] rounded"
                >
                  THAM GIA C??C KH??A H???C
                </Link>
              </div>
            </div>
            <div className="mx-auto">
              <img src={trinhdo_img} className="max-w-[600px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[60px] lg:mt-[100px]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[100px] xl:px-[100px]">
          <div className="w-full">
            <div className="w-full">
              <h3 className=" text-[24px] md:text-[30px] :leading-[30px] font-bold sm:text-[28px] sm:leading-[40px]  lg:text-[36px] lg:leading-[54px]">
                CH??NG T??I ???? B???T ?????U NH?? TH??? N??O
              </h3>
              <p className="pt-[20px] text-[18px] leading-[27px] sm:text-[16px] text-justify">
                DevStar th??nh l???p n??n gi??p b???n kh??m ph?? gi???i h???n c???a ch??nh m??nh.
                Ch??ng t??i h???a h???n s??? mang ?????n m???t k??nh chia s??? ki???n ??????th???c v???
                c??c ng??n ng??? l???p tr??nh cho c??c nh?? ph??t tri???n kh??ng ch??? ??? Vi???t
                Nam m?? c??n v????n xa h??n.
              </p>
            </div>

            <div className="select-none mt-[40px] md:mt-[20px] lg:mt-[100px] xl:mt-[150px] mb-[30px]">
              <h4 className="text-center  text-[18px] leading-[27px] font-bold mb-[13px]">
                Th??ng 12 n??m 2021
              </h4>
              <div className="relative">
                <img className="w-full" src={batdau1_img} alt="" />
                <div className="absolute text-center px-[10px] sm:px-[10px] sm:py-[5px] lg:px-[15px] text-[#FFFFFF] w-[70%] bg-[#35a6e7] bg-opacity-[85%] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                  <h4 className="pt-[15px] text-[24px] leading-[36px] sm:text-[15px] sm:pt-[5px] lg:pt-[45px] lg:text-[24px] font-bold">
                    Gi???i thi???u
                  </h4>
                  <p className=" text-[14px] leading-[21px] pb-[20px] sm:text-[10px] sm:leading-[15px] sm:pb-[10px]  lg:text-[14px] lg:leading-[21px] lg:pb-[48px]">
                    H??? th???ng hi???n c?? t??n ch??nh th???c l?? DevStar v?? ???????c c??c th??nh
                    vi??n trong d??? ??n d???n ho??n thi???n.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-2">
            <div className="select-none relative  mb-[40px]">
              <h4 className="text-center  text-[18px] leading-[27px] font-bold mb-[13px]">
                Th??ng 12 n??m 2021
              </h4>
              <div className="relative">
                <img className="w-full" src={batdau2_img} alt="" />
                <div className="absolute text-center px-[10px] sm:px-[10px] sm:py-[5px] lg:px-[15px] text-[#FFFFFF] w-[70%] bg-[#35a6e7] bg-opacity-[85%] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                  <h4 className="pt-[15px] text-[24px] leading-[36px] sm:text-[15px] sm:pt-[5px] lg:pt-[45px] lg:text-[24px] font-bold">
                    ?? t?????ng ?????u ti??n
                  </h4>
                  <p className=" text-[14px] leading-[21px] pb-[20px] sm:text-[10px] sm:leading-[15px] sm:pb-[10px]  lg:text-[14px] lg:leading-[21px] lg:pb-[48px]">
                    Gi???a n??m 2021, nh???ng ?? t?????ng ?????u ti??n v??? h??? th???ng c???ng ?????ng
                    chia s??? ki???n th???c ???? ?????n v???i ch??ng t??i. Ch??ng t??i b???t ?????u
                    ?????t vi??n g???ch ?????u ti??n x??y d???ng h??? th???ng v??o th??ng 7/2021.
                  </p>
                </div>
              </div>
            </div>
            <div className="select-none relative md:mt-[50px] ">
              <h4 className="text-center  text-[18px] leading-[27px] font-bold mb-[13px]">
                Th??ng 12 n??m 2021
              </h4>
              <div className="relative">
                <img className="w-full" src={batdau3_img} alt="" />
                <div className="absolute text-center px-[10px] sm:px-[10px] sm:py-[5px] lg:px-[15px] text-[#FFFFFF] w-[70%] bg-[#35a6e7] bg-opacity-[85%] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]">
                  <h4 className="pt-[15px] text-[24px] leading-[36px] sm:text-[15px] sm:pt-[5px] lg:pt-[45px] lg:text-[24px] font-bold">
                    Ra m???t
                  </h4>
                  <p className=" text-[14px] leading-[21px] pb-[20px] sm:text-[10px] sm:leading-[15px] sm:pb-[10px]  lg:text-[14px] lg:leading-[21px] lg:pb-[48px]">
                    Sau 2 th??ng ph??t tri???n, nh??m ???? cho ra ?????i phi??n b???n th???
                    nghi???m ?????u ti??n v???i h??n 100 ng?????i d??ng.
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
