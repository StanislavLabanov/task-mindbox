import { Dispatch, SetStateAction } from 'react';
import { IListItemType } from './listItemType';

export type setListType = Dispatch<SetStateAction<IListItemType[]>>;
