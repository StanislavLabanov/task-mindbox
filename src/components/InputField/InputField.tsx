import { ChangeEvent, FC, FormEvent, memo, useState } from 'react';
import { generateItemId } from '../../utils/handleSubmit';

import type { IInputField } from './InputField.types';

export const InputField: FC<IInputField> = memo(({ setList }) => {
  const [value, setValue] = useState('');
  const [lengthInput, setLengthInput] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length) {
      setList((prev) => [{ id: generateItemId(), value, checked: false }, ...prev]);
      setValue('');
    } else setLengthInput(true);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (lengthInput) {
      setLengthInput(false);
    }
  };

  return (
    <>
      <form
        data-testid="form"
        onSubmit={onSubmit}
        className="flex justify-center items-center mb-2">
        <div className="border-2 border-indigo-600 rounded">
          <input
            value={value}
            type="text"
            className="ml-2 outline-none m-0.5"
            placeholder="Example label"
            onChange={changeHandler}
          />
        </div>
        <button type={'submit'} className="ml-2 border-2 border-indigo-600 rounded py-0.5 px-2">
          Add Item
        </button>
      </form>
      {lengthInput && <div className="text-red-600">Введите текст</div>}
    </>
  );
});
