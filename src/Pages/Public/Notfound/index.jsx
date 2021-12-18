import React from "react";
import NotFound from "../../../Assets/media/pictures/notFound.png";
import Facebook from "../../../Assets/media/pictures/fb.png";
import Ig from "../../../Assets/media/pictures/ig.png";
import Email from "../../../Assets/media/pictures/email.png";
import Copy from "../../../Assets/media/pictures/copy.png";
import { useHistory } from "react-router-dom";
const Notfound = () => {
  window.scrollTo(0, 0);
  const history = useHistory();
  return (
    <div className="container mx-auto mt-[85px] py-[20px]">
      <div className="text-[#4A5568] uppercase md:text-[36px] sm:text-[28px] text-[22px] font-semibold text-center mb-[20px]">
        Xin lỗi trang này không tồn tại !
      </div>
      <div className="mx-auto w-[50%] mb-[20px]">
        <img
          className="w-[100%] mx-auto py-[10px]"
          src={NotFound}
          alt="Not-found"
        />
      </div>
      <div className="text-center py-[15px]">
        <div className="mb-[20px]">
          <button
            onClick={() => {
              history.push("/");
            }}
            className="bg-blue-600 opacity-60 rounded-[5px] md:py-[8px] sm:py-[5px] py-[3px] px-[16px] mx-auto text-white hover:bg-blue-800"
          >
            Đi tới trang chủ
          </button>
        </div>
        <div className="font-semibold md:text-[30px] sm:text-[26px] text-[20px] py-[10px]">
          Liên hệ với chúng tôi
        </div>
        <div className="md:text-[16px] sm:text-[12px] text-[10px] text-[#4A5568] pb-[5px]">
          để chất lượng học tập ngày càng nâng cao, nếu bạn có thắc mắc hoặc có
          ý kiến đóng góp, hãy liên hệ ngay với chúng tôi thông qua các nên tảng
          sau đây.
        </div>
        <div className="my-[25px]">
          <button className="mx-[10px]">
            <img className="w-[40px]" src={Facebook} alt="" />
          </button>
          <button className="mx-[10px]">
            <img className="w-[40px]" src={Ig} alt="" />
          </button>
          <button className="mx-[10px]">
            <img className="w-[40px]" src={Email} alt="" />
          </button>
          <button className="mx-[10px]">
            <img className="w-[40px]" src={Copy} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
