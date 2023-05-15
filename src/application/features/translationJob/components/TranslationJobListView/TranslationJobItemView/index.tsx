import React, { FC } from 'react';

import { ETranslationJobStatus } from '@/common/domain';

interface TranslationJobItemViewProps {
  id: number;
  customerName: string;
  status: ETranslationJobStatus;
  price: number;
}

const TranslationJobItemView: FC<TranslationJobItemViewProps> = ({
  id,
  customerName,
  status,
  price,
}) => (
  <div className="flex">
    <div className="fflex-initial w-4">{id}</div>
    <div className="flex-initial w-64">{customerName}</div>
    <div className="flex-initial w-64">{status}</div>
    <div className="flex-initial">{price}</div>
  </div>
);

export default TranslationJobItemView;
