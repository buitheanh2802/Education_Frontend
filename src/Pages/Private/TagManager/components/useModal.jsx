import { useState } from 'react';

const UseModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingEdit, setIsShowingEdit] = useState(false)
  const toggle = () => {
    setIsShowing(!isShowing);
  }
  const toggleEdit = () => {
    setIsShowingEdit(!isShowingEdit)
  }

  return {
    isShowing,
    toggle,
    isShowingEdit,
    toggleEdit
  }
};

export default UseModal;