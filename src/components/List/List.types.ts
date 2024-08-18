import type { IListItemType } from '../../types/listItemType';
import type { setListType } from '../../types/setListType';

export interface IList {
  list: IListItemType[];
  setList: setListType;
}

export interface IListType {
  list: IListItemType[];
  changeHandler: (id: string) => void;
  clickHendler: (id: string) => void;
}

export enum ETypeList {
  COMPLETED = 'completed',
  NOCOMPLETED = 'nocompleted',
}
