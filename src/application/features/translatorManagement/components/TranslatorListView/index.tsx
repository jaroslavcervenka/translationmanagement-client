import { useSelector } from 'react-redux';

import React, { FC } from 'react';

import { Translator } from '@/common/domain';

import { selectTranslators } from '../../store';
import TranslatorItemView from './TranslatorItemView';

interface TranslatorListViewProps {
  items: Translator[];
}

const TranslatorListView: FC<TranslatorListViewProps> = ({ items }) => (
  <div>
    {items.map(x => (
      <TranslatorItemView key={x.id} {...x} />
    ))}
  </div>
);

export default TranslatorListView;
