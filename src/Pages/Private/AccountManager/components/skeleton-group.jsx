import React from 'react';
import Skeleton from 'react-loading-skeleton'

const SkeletonGroup = () => {
    return (
        <>
            {[...Array(15)].map(item => {
                return (
                    <div className="bg-white py-[10px] px-[5px] grid 
                       grid-cols-[60px,1.5fr,1.5fr,1.5fr,0.6fr,0.6fr,0.8fr]">
                        <div className="mr-[15px] " ><Skeleton duration={1} /></div>
                        <div className="mr-[15px] " ><Skeleton duration={1}  /></div>
                        <div className="mr-[15px] " ><Skeleton duration={1}  /></div>
                        <div className="mr-[15px] " ><Skeleton duration={1}  /></div>
                        <div className="mr-[15px] " ><Skeleton duration={1}  /></div>
                        <div className="mr-[15px] " ><Skeleton duration={1}  /></div>
                        <div className="text-center "><Skeleton duration={1}  /></div>
                    </div>
                )
            })}
        </>
    );
};

export default SkeletonGroup;