import React from 'react';
import Skeleton from 'react-loading-skeleton'

const SkeletonGroup = () => {
    return (
        <>
            {[...Array(15)].map(item => {
                return (
                    <div className="bg-white py-[10px] px-[5px] grid grid-cols-[65px,1fr,4fr,1fr,0.5fr] items-center">
                        <div className="mr-5" ><Skeleton duration={1} /></div>
                        <div className="mr-5" ><Skeleton duration={1} /></div>
                        <div className="mr-5" >
                            <Skeleton duration={1} />
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