export interface IModalType {
  children: string;
  closeHandler: () => void;
  customButton: {
    handler: () => void;
    value: string;
  };
}
