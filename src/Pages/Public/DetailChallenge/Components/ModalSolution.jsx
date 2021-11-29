import React from 'react';
import { createPortal } from 'react-dom';

const ModalSolution = ({ isShowModle, setIsShowModle }) => {
    if (!isShowModle) return
    return createPortal(
        <>
            <div onClick={() => setIsShowModle(false)} className="fixed z-[99999] inset-0 bg-black bg-opacity-80"></div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default ModalSolution
