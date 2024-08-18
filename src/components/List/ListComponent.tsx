import { FC } from 'react';

import type { IListType } from './List.types';

export const ListCompletedList: FC<IListType> = ({ list, changeHandler, clickHendler }) => {
  return (
    <ul className="overflow-auto">
      {list.map((item) => (
        <li key={item.id} className="mb-2 flex justify-start items-center">
          <input
            type={'checkbox'}
            className="mr-2"
            onChange={() => changeHandler(item.id)}
            checked={item.checked}
          />
          <div>{item.value}</div>
          <button
            className="ml-2 px-2 border-2 border-indigo-600 rounded"
            onClick={() => clickHendler(item.id)}>
            Del
          </button>
        </li>
      ))}
    </ul>
  );
};
