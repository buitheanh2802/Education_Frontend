import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonGroup = () => {
  return (
    <>
      {[...Array(15)].map((item) => {
        return (
          <div
            className="bg-white py-[10px] px-[5px] grid 
                       grid-cols-[60px,0.9fr,1.7fr,0.7fr,0.9fr,0.6fr,1.2fr]  "
          >
            <div className="mr-[15px] ">
              <Skeleton duration={1} />
            </div>
            <div className="mr-[15px] ">
              <Skeleton duration={1} />
            </div>
            <div className="mr-[15px] ">
              <Skeleton duration={1} />
            </div>

            <div className="mr-[15px] ">
              <Skeleton duration={1} />
            </div>
            <div className="mr-[15px] ">
              <Skeleton duration={1} />
            </div>
            <div className="mr-[15px] ">
              <Skeleton duration={1} />
            </div>

            <div className="text-center ">
              <Skeleton duration={1} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkeletonGroup;
