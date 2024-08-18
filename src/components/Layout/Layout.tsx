import { FC, ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[600px] shadow-xl p-5 bg-slate-200 rounded-lg">
        <h1 className="text-center text-blue-600/100 text-2xl mb-3">ToDos</h1>
        <div className="bg-slate-50 rounded-lg p-5">{children}</div>
      </div>
    </div>
  );
};
