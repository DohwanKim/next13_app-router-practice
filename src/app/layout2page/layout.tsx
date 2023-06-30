import { ReactNode } from 'react';

export const metadata = {
  description: 'Another Layout',
  title: 'Another Layout Title',
};

export default function Layout2page({ children }: { children: ReactNode }) {
  return (
    <>
      <header>다른 레이아웃의 헤더입니다</header>
      <main>{children}</main>
      <footer>다른 레이아웃의 푸터입니다</footer>
    </>
  );
}
