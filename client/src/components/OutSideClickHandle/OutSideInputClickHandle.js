import React, { useRef, useEffect, useState } from 'react';

const OutsideClickHandler = ({ onClickOutside, children }) => {
  const ref = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isInputFocused) {
        onClickOutside();
        setIsInputFocused(false); // Reset state after calling onClickOutside
      }
    };

    const handleFocus = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        setIsInputFocused(true);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('focusin', handleFocus, true); // Listen for focus events

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('focusin', handleFocus, true);
    };
  }, [onClickOutside, isInputFocused]);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClickHandler;
