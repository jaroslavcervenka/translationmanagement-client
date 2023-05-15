import React, { FC, PropsWithChildren } from 'react';

interface PageViewProps extends PropsWithChildren {
  title: string;
}

const PageView: FC<PageViewProps> = ({ title, children }) => (
  <main className="container mx-auto p-4">
    <h1 className="mb-3 text-2xl font-semibold">{title}</h1>
    <div>{children}</div>
  </main>
);

export default PageView;
