import React, { useEffect } from 'react'
import reactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { resetErrorAuth, resetMessageAuth } from 'src/Redux/Slices/Auth.slice'
import ErrorMessage from '../ErrorMessage'
import SuccessMessage from '../SuccessMessage'

const AlertMessage = () => {
    const dispatch = useDispatch();
    const { error: authError, message: authMessage } = useSelector(state => state.Auth);

    useEffect(() => {
        authError && setTimeout(() => dispatch(resetErrorAuth()), 5100)
        authMessage && setTimeout(() => dispatch(resetMessageAuth()), 5100)
    }, [dispatch, authError, authMessage])

    return reactDom.createPortal(
        <div className="absolute left-[15px] bottom-[30px] z-[99999] flex flex-col gap-[5px]">
            {authError?.map((error, index) => {
                return <ErrorMessage className="message_animation w-[300px] opacity-0" key={index} message={error} />
            })}
            {authMessage?.map((message, index) => {
                return <SuccessMessage className="message_animation w-[300px] opacity-0" key={index} message={message} />
            })}
        </div>,
        document.getElementById('alart-message')
    )
}

export default AlertMessage
