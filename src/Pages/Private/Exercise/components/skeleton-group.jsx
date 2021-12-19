import React from 'react';
import Skeleton from 'react-loading-skeleton'

const SkeletonGroup = () => {
    return (
        <>
            {[...Array(10)].map((item, index) => {
                return (
                    <div key={index} className="bg-white py-[10px] px-[5px] grid grid-cols-[65px,1fr,4fr,1fr,0.5fr] items-center">
                        <div className="mr-5" ><Skeleton duration={1} /></div>
                        <div className="mr-5" ><Skeleton className='h-20' duration={1} /></div>
                        <div className="mr-5" >
                            <Skeleton duration={1} />
                            <Skeleton className='w-1/2' duration={1} />
                        </div>
                        <div className="mr-5" ><Skeleton duration={1} /></div>
                        <div className="mr-5" ><Skeleton duration={1} /></div>
                    </div>
                )
            })}
        </>
    );
};

export default SkeletonGroup;