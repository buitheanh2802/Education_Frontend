import React from 'react';
import { createPortal } from 'react-dom';
import { Icon } from 'src/Components/Icon';

const FormExercise = ({ isShowModle, setIsShowModle }) => {
    if (!isShowModle) return
    return createPortal(
        <>
            <div onClick={() => setIsShowModle(false)} className="fixed z-[99999] inset-0 bg-black bg-opacity-80"></div>
            <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[60vw]">
                <form className="w-full h-full relative bg-white rounded">
                    <div className="flex justify-between p-[10px] border-b">
                        <p className="text-[20px] font-medium">Gửi giải pháp</p>
                        <button onClick={() => setIsShowModle(false)}><Icon.Close className="w-[20px] h-[20px] hover:text-red-500 fill-current" /></button>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default FormExercise
