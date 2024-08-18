import { useEffect, useState } from 'react';
import { InputField } from './components/InputField';
import { List } from './components/List/List';
import { Layout } from './components/Layout';

import type { IListItemType } from './types/listItemType';

function App() {
  const [list, setList] = useState<IListItemType[]>(
    localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')!) : [],
  );

  useEffect(() => {
    if (list.length) {
      localStorage.setItem('list', JSON.stringify(list));
    }
  }, [list]);

  return (
    <Layout>
      <InputField setList={setList} />
      <List list={list} setList={setList} />
    </Layout>
  );
}

export default App;
