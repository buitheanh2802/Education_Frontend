import React, { useEffect } from 'react';
import { ParticleNetwork } from '../../../../helpers/canvas';

const BannerComponent = () => {
    useEffect(() => {
        ParticleNetwork('particle-canvas', 'slow');
    }, []);
    return (
        <div className="w-full h-screen bg-gradient-to-tl from-[#7e588b] via-[#4193aa] to-[#67d4a7]" id="particle-canvas"></div>
    )
}

export default BannerComponent
