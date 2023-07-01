import { ReactNode } from 'react';

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>header</header>
      <div>{children}</div>
      <footer>footer</footer>
    </>
  );
};

export default CommonLayout;
