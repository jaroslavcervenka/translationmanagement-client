import React, { FC } from 'react';

import { TranslationJob } from '@/common/domain';

import TranslationJobItemView from './TranslationJobItemView';

interface TranslationJobListViewProps {
  items: TranslationJob[];
}

const TranslationJobListView: FC<TranslationJobListViewProps> = ({ items }) => (
  <div className="grid grid-rows-4 grid-flow-col gap-4">
    {items.map(x => (
      <TranslationJobItemView key={x.id} {...x} />
    ))}
  </div>
);

export default TranslationJobListView;
