import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorClass, setCursorClass] = useState('');

  useEffect(() => {
    const updateCursorPos = (e) => {
      setTimeout(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const enableCursor = () => setCursorClass('');
    const disableCursor = () => setCursorClass('disabled');

    document.body.addEventListener('mousemove', updateCursorPos);
    document.body.addEventListener('mouseover', enableCursor);
    document.body.addEventListener('mouseout', disableCursor);

    return () => {
      document.body.removeEventListener('mousemove', updateCursorPos);
      document.body.removeEventListener('mouseover', enableCursor);
      document.body.removeEventListener('mouseout', disableCursor);
    };
  }, []);

  return (
    <>
      <div
        data-cursor
        style={{ top: `${cursorPos.y}px`, left: `${cursorPos.x}px` }}
        className={`custom-cursor cursor ${cursorClass}`}
      />
    </>
  );
};

export default CustomCursor;
