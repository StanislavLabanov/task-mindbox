import { FC, useState } from 'react';
import { Modal } from '../Modal';
import { ListCompletedList } from './ListComponent';

import { ETypeList, type IList } from './List.types';

export const List: FC<IList> = ({ list, setList }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [itemId, setItemId] = useState<string | null>(null);
  const [typeItem, setTypeItem] = useState<ETypeList>(ETypeList.NOCOMPLETED);

  const changeHandler = (id: string) => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
    );
  };

  const clickHendler = (id: string) => {
    setModalVisible(true);
    setItemId(id);
  };

  const deleteItemHandler = () => {
    setList((prev) => prev.filter((item) => item.id !== itemId));
    setItemId(null);
    setModalVisible(false);
  };

  const closeHandler = () => {
    setModalVisible(false);
    setItemId(null);
  };

  return (
    <>
      <>
        {typeItem === ETypeList.COMPLETED ? (
          <ListCompletedList
            list={list.filter((item) => item.checked)}
            clickHendler={clickHendler}
            changeHandler={changeHandler}
          />
        ) : (
          <ListCompletedList
            list={list.filter((item) => !item.checked)}
            clickHendler={clickHendler}
            changeHandler={changeHandler}
          />
        )}
        <div className="flex flex-col m-4">
          <button
            className={`${
              typeItem === ETypeList.NOCOMPLETED ? 'bg-slate-300 text-white' : ''
            } w-full border-double border-4 border-indigo-600 rounded-lg`}
            onClick={() => setTypeItem(ETypeList.NOCOMPLETED)}>
            Невыполненные
          </button>
          <button
            className={`${
              typeItem === ETypeList.COMPLETED ? 'bg-slate-300 text-white' : ''
            } w-full border-double border-4 border-indigo-600 mt-2 rounded-lg`}
            onClick={() => setTypeItem(ETypeList.COMPLETED)}>
            Выполненные
          </button>
        </div>
      </>
      {modalVisible && (
        <Modal
          closeHandler={closeHandler}
          customButton={{ handler: deleteItemHandler, value: 'Delete' }}>
          Delete this element?
        </Modal>
      )}
    </>
  );
};
