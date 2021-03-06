import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactApi from "src/Apis/ContactApi";
import { Icon } from "src/Components/Icon";
import Swal from "sweetalert2";
import { path, regex } from "src/Constants/";
import { AlertMessage } from "src/Components/AlertMessage";

const Footer = () => {
  const { pathname } = useLocation;
  const date = new Date();

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

  const onSubmit = async (data) => {
    try {
      setResponse({ ...response, isLoading: true });
      await ContactApi.sendContact(data);
      await AlertMessage.fire({
        icon: "success",
        title: "Gửi thành công",
      });
      reset();
    } catch (error) {
      await AlertMessage.fire({
        icon: "error",
        title: "Gủi thất bại",
      });
    }
  };
  const resetRespone = (filed) => {
    clearErrors(filed);
    setResponse({ isLoading: false, error: null, message: null });
  };
  return (
    <footer
      className={`pt-[30px] xl:mb-[50px] text-center md:text-left ${
        pathname !== path.HOME &&
        "bg-gradient-to-t to-white from-gray-50 border-t"
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 xl:flex xl:justify-between text-gray-900 md:gap-x-[50px] xl:gap-x-[30px]">
        <ul className="md:col-span-2 xl:flex-[2.5] md:order-1 md:pr-[60px]">
          <li className="mb-[20px]">
            <Link
              to={path.HOME}
              className="flex items-center  justify-center md:justify-start"
            >
              <Icon.Logo className="sm:w-[45px] w-[35px]" />
              <span className="sm:text-[33px] text-[30px] font-bold ml-[5px]">
                DevStar
              </span>
            </Link>
          </li>
          <li className="mb-[15px] text-gray-800">
            Website cộng đồng IT devStar
          </li>
          <li className="mb-[15px] text-gray-800">
            Là nơi chia sẻ kinh nghiệm, giao lưu học hỏi để nâng cao kiến thức
          </li>
          <li className="mb-[15px] text-gray-500 mt-[60px] hidden xl:block">
            © {date.getFullYear()}{" "}
            <Link to={path.HOME} className="text-blue-500 hover:text-blue-700">
              DevStar
            </Link>{" "}
            đăng ký bản quyền
          </li>
        </ul>
        <ul className="xl:flex-[1] mt-[20px] md:order-2">
          <li className="font-bold mb-[24px] text-[18px]">Chúng tôi</li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.INTRO}>
              Giới thiệu
            </Link>
          </li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.CONTACT}>
              Liên hệ
            </Link>
          </li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.HOME}>
              Cộng đồng
            </Link>
          </li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.NOT_FOUND}>
              Câu hỏi thường gặp
            </Link>
          </li>
        </ul>
        <ul className="xl:flex-[1] mt-[20px] md:order-3">
          <li className="font-bold mb-[24px] text-[18px]">Sản phẩm</li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.HOME}>
              Devstar
            </Link>
          </li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.TAGS}>
              Tag
            </Link>
          </li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.USERS}>
              Tác giả
            </Link>
          </li>
        </ul>
        <ul className="xl:flex-[1] mt-[20px] md:order-5 xl:order-4">
          <li className="font-bold mb-[24px] text-[18px]">Hỗ trợ</li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.CONTACT}>
              Hỗ trợ
            </Link>
          </li>
          <li className="mb-[15px] text-gray-800">
            <Link className="hover:text-blue-700" to={path.NOT_FOUND}>
              Đóng góp
            </Link>
          </li>
        </ul>
        <ul className="md:col-span-2 xl:flex-[1.5] mt-[20px] md:order-4 xl:order-5">
          <li className="font-bold mb-[24px] text-[18px]">Theo dõi</li>
          <li className="mb-[15px] text-gray-800">
            Nhập email để đăng ký nhận những thông tin hữu ích từ eduford.
          </li>
          <li className="mb-[15px]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="sm:w-2/3 mx-auto md:w-full"
            >
              <div className="mb-[10px]">
                <input
                  className="outline-none text-gray-900 px-[10px] py-[5px] text-[14px] w-full border border-solid border-[#48BB78] rounded-[5px]"
                  type="text"
                  placeholder="Email của bạn..."
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
              <button
                className="w-full md:w-auto bg-[#48BB78] px-[15px] py-[5px] uppercase rounded-[5px] text-white"
                type="submit"
              >
                Đăng ký
              </button>
            </form>
          </li>
        </ul>
      </div>
      <ul className="container mx-auto text-center xl:text-left mt-[30px] lg:mt-0 xl:hidden">
        <li className="mb-[15px] text-gray-500">
          © {date.getFullYear()}{" "}
          <Link to={path.HOME} className="text-blue-500 hover:text-blue-700">
            eduford
          </Link>{" "}
          đăng ký bản quyền
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
