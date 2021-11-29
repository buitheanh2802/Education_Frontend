import React from 'react';
import { createPortal } from 'react-dom';

const ModalSolution = ({ isShowModle }) => {
    // if (!isShowModle) return
    return createPortal(
        <>
            <div className="fixed z-50 inset-0 bg-black bg-opacity-80"></div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default ModalSolution
