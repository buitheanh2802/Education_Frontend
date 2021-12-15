import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SulotionApi from 'src/Apis/SulotionApi'
import { OpenWindownTab } from 'src/Helpers/';

const DetailSulotion = ({ isModel, setIsModel }) => {
    const [sulution, setSulution] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data: resData } = await SulotionApi.get(isModel);
                const { data, status } = resData;
                if (status) return setSulution(data)
            } catch (error) { }
        })()
    }, [])

    if (!isModel) return null
    return createPortal(
        <div onClick={() => setIsModel(false)} className="fixed z-[99999] inset-0 bg-black bg-opacity-50">
            <div className="animation_preview fixed z-[999999] w-[98vw] h-[98vh] bg-white rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-between px-5 py-3 border-b">
                    <p className="font-medium text-xl">Bản xem trước</p>
                    <div className="flex gap-2">
                        <button onClick={() => OpenWindownTab(sulution?.repoUrl)} className="h-[35px] border rounded px-4 text-sm bg-[#2a8ec7] hover:bg-blue-600 hover:shadow-md duration-300 text-white">Code</button>
                        <button onClick={() => setIsModel(null)} className="h-[35px] border rounded px-4 text-sm bg-gray-100 hover:bg-red-600 hover:shadow-md duration-300 text-gray-800 hover:text-white">Đóng</button>
                    </div>
                </div>
                <iframe className="w-full h-[92%] rounded" src={sulution?.demoUrl} frameBorder="0"></iframe>
            </div>
        </div>,
        document.getElementById('modals-devstar')
    )
}

export default DetailSulotion
