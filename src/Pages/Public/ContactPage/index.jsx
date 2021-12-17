import React, { useState } from "react";
import { Icon } from "src/Components/Icon";
import inner_page_banner from "../../../Assets/media/pictures/contact-image.png";
import { useForm } from "react-hook-form";
import { regex } from "src/Constants/";
import ContactApi from "src/Apis/ContactApi";
import Swal from "sweetalert2";

const ContactPage = () => {
  window.scrollTo(0, 0);
  const [response, setResponse] = useState({
    isLoading: false,
    error: null,
    message: null,
  });
  const { isLoading, error, message } = response;
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    getValues,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    // timerProgressBar: true,
    background: "#EFF6FF",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const onSubmit = async (data) => {
    try {
      setResponse({ ...response, isLoading: true });
      await ContactApi.sendContact(data);
      await Toast.fire({
        icon: "success",
        title: "Gửi thành công",
      });
      reset();
    } catch (error) {
      await Toast.fire({
        icon: "error",
        title: "Gủi thất bại",
      });
      console.log(error);
      // setResponse({
      //     ...response,
      //     error: ResponseMessage(error?.response?.data?.message[0]),
      //     isLoading: false
      // })
    }
  };

  const resetRespone = (filed) => {
    clearErrors(filed);
    setResponse({ isLoading: false, error: null, message: null });
  };
  return (
    <>
      <div
        className="py-[20px] md:py-[30px] h-[170px] lg:h-[225px] bg-center bg-no-repeat mt-[30px] flex items-center"
        style={{
          backgroundImage: `url(${inner_page_banner})`,
          backgroundSize: "100%",
        }}
      >
        <div className="container mx-auto">
          <p className="hidden md:block text-white text-center text-[40px] mb-[15px] leading-[45px] font-bold">
            Liên hệ - Góp ý
          </p>
          <p className="text-white text-center">
            Góp ý hoặc liên hệ với DevStart nếu bạn có nhu cầu về dịch vụ hoặc
            những thắc mắc khác
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-[15px] md:mx-[30px] lg:max-w-[55%] lg:mx-auto mt-[90px]  "
      >
        <p className="text-center text-[24px] md:text-[28px] leading-[36px] font-medium ">
          GỬI THÔNG TIN LIÊN HỆ - GÓP Ý
        </p>
        <div className=" mt-[30px]">
          <input
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder=" Họ và tên"
            id="name"
            onChangeCapture={() => {
              resetRespone("name");
            }}
            {...register("name", {
              required: regex.REQUIRED_FULLNAME,
            })}
            disabled={isLoading}
            autoComplete="off"
          />
          <span className="text-red-500 text-[12px]">
            {errors?.name && errors?.name?.message}
          </span>
        </div>

        <div className="mt-[10px] grid grid-cols-2 gap-[10px]">
          <div>
            <input
              type="text"
              className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
              placeholder=" Email"
              id="email"
              onChangeCapture={() => {
                resetRespone("email");
              }}
              {...register("email", {
                required: regex.REQUIRED_EMAIL,
                pattern: regex.EMAIL,
              })}
              disabled={isLoading}
              autoComplete="off"
            />
            <span className="text-red-500 text-[12px]">
              {errors?.email && errors?.email?.message}
            </span>
          </div>
          <div>
            <input
              type="text"
              className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
              placeholder="Số điện thoại"
              onChangeCapture={() => {
                resetRespone("phone");
              }}
              {...register("phone", {
                required: regex.REQUIRED_PHONE,
                pattern: regex.PHONE,
              })}
              disabled={isLoading}
              autoComplete="off"
            />
            <span className="text-red-500 text-[12px]">
              {errors?.phone && errors?.phone?.message}
            </span>
          </div>
        </div>
        <div className="mt-[10px] ">
          <input
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px] bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder=" Tiêu đề"
            onChangeCapture={() => {
              resetRespone("title");
            }}
            {...register("title", {
              required: regex.REQUIRED_TITLE,
            })}
            disabled={isLoading}
            autoComplete="off"
          />
          <span className="text-red-500 text-[12px]">
            {errors?.title && errors?.title?.message}
          </span>
        </div>
        <div className="mt-[10px] ">
          <textarea
            rows="5"
            type="text"
            className="border border-[#e1e1e1] w-full min-h-[50px] text-[14px] px-[20px] py-[5px]  bg-[#f8f8f8] focus:outline-none focus:border focus:border-gray-600"
            placeholder="Mô tả lỗi"
            onChangeCapture={() => {
              resetRespone("content");
            }}
            {...register("content", {
              required: regex.REQUIRED_DESC,
            })}
            disabled={isLoading}
            autoComplete="off"
          />
          <span className="text-red-500 text-[12px]">
            {errors?.content && errors?.content?.message}
          </span>
        </div>
        <div className="text-center mt-[25px]">
          <button
            type="submit"
            className="bg-[#17a5e9] text-white border-none height-[50px] min-w-[170px] text-[14px] hover:bg-[#25d8ed] rounded-[100px] py-[15px] text-center font-bold"
          >
            GỬI NGAY
          </button>
        </div>
      </form>
      <div className="mt-[100px] mb-[70px]">
        <p className="text-center text-[24px] md:text-[26px] leading-[36px] font-medium relative before:content-[''] before:absolute before:w-[100px] before:h-[5px] before:bg-blue-400 before:top-[60px] before:left-[50%] before:translate-x-[-50%]">
          THÔNG TIN LIÊN HỆ KHÁC
        </p>
        <div className="mx-[15px] md:mx-[30px] lg:max-w-[55%] lg:mx-auto  mt-[70px] py-[50px] border-t border-b border-[#e1e1e1]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
            <div className="text-center">
              <span className="inline-block mx-auto text-[#039ee3] text-[30px]">
                <Icon.Email className="fill-current w-[30px]" />
              </span>
              <p className="text-[16px] font-medium text-[#000] pt-[10px]">
                Email
              </p>
              <p className="text-[14px] underline text-blue-400 cursor-pointer">
                Vinhtq030901@gmail.com
              </p>
            </div>
            <div className="text-center">
              <span className="inline-block mx-auto text-[#039ee3] text-[30px]">
                <Icon.Instagram className="fill-current w-[30px]" />
              </span>
              <p className="text-[16px] font-medium text-[#000] pt-[10px]">
                Instagram
              </p>
              <p className=" text-[14px] underline text-blue-400 cursor-pointer">
                http://www.instagram.com/devstar
              </p>
            </div>

            <div className="text-center">
              <span className="inline-block mx-auto text-[#039ee3] text-[30px]">
                <Icon.Facebook className="fill-current w-[30px]" />
              </span>
              <p className="text-[16px] font-medium text-[#000] pt-[10px]">
                Facebook
              </p>
              <p className=" text-[14px] underline text-blue-400 cursor-pointer">
                https://www.facebook.com/groups/devstar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
