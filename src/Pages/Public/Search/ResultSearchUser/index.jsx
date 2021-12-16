import React from "react";

const ResultSearchUser = ({ dataSearchUser }) => {
  return (
    <div>
      {dataSearchUser?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có gì ở đây cả
          </p>
        </div>
      ) : (
        <>
          {dataSearchUser?.map((item, index) => {
            return (
              <div className="w-full flex px-[10px] py-[15px] border-b"></div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ResultSearchUser;
