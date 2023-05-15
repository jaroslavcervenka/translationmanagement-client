import React, { FC } from 'react';

import { ETranslatorStatus } from '@/common/domain';

interface TranslatorItemViewProps {
  name: string;
  hourlyRate: string;
  status: ETranslatorStatus;
  creditCardNumber: string;
}
const TranslatorItemView: FC<TranslatorItemViewProps> = ({
  name,
  hourlyRate,
  status,
  creditCardNumber,
}) => (
  <div className="flex">
    <div className="flex-initial w-64">{name}</div>
    <div className="flex-initial w-10">{hourlyRate}</div>
    <div className="flex-initial w-64">{status}</div>
    <div className="flex-initial w-64">{creditCardNumber}</div>
  </div>
);

export default TranslatorItemView;
