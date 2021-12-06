import React from 'react'
import { createPortal } from 'react-dom'

const CreateCateChallen = () => {
    return createPortal(
        <>
            <div className="fixed z-[99999] inset-0 bg-black bg-opacity-80"></div>
            <div className="fixed z-[999999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[60vw]">
                <form className="w-full h-full relative bg-white rounded">
                </form>
            </div>
        </>,
        document.getElementById('modals-devstar')
    )
}

export default CreateCateChallen
