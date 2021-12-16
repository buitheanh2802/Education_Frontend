import React from "react";

const ResultSearchTag = ({ dataSearchTag }) => {
  return (
    <div>
      {dataSearchTag?.length === 0 ? (
        <div>
          <p className="text-center text-[18px] leading-[30px] py-[35px] font-bold text-gray-500">
            Không có gì ở đây cả
          </p>
        </div>
      ) : (
        <>
          {dataSearchTag?.map((item, index) => {
            return (
              <div className="w-full flex px-[10px] py-[15px] border-b"></div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ResultSearchTag;
