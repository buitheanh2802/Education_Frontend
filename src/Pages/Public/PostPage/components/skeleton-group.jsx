import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonGroup = () => {
  return (
    <>
      {[...Array(15)].map((item) => {
        return (
          <div className="w-full flex px-[10px] py-[15px] border-b">
            <div className="mr-[15px] hidden sm:block">
              <Skeleton circle={true} className="w-[50px] h-[50px] " />
            </div>
            <div className="w-full">
              <Skeleton className="w-[100px] " />
              <Skeleton height={50} className="mb-[10px]" />
              <div className="flex gap-[10px] ">
                <Skeleton width={50} />
                <Skeleton width={50} />
                <Skeleton width={50} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkeletonGroup;
