import { FC, MouseEvent, useRef } from 'react';

import type { IModalType } from './Modal.types';

export const Modal: FC<IModalType> = ({ children, closeHandler, customButton }) => {
  const ref = useRef(null);

  const clickHandler = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (ref.current && e.target === ref.current) {
      closeHandler();
    }
  };

  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
      onClick={(e) => clickHandler(e)}
      ref={ref}>
      <div className="h-[150px] w-[400px] bg-white p-2 rounded-lg">
        <div className="text-center text-xl mb-4">{children}</div>
        <div className="flex justify-start items-start flex-col">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={customButton.handler}>
            {customButton.value}
          </button>
          <button
            className="w-full mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={closeHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
