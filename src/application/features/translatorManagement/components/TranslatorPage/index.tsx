import React, { FC } from 'react';

import { useLoadTranslators } from '@/application/features/translatorManagement/hooks/useLoadTranslators';
import PageView from '@/common/components/PageView';

import TranslatorListSkeleton from '../TranslatorListSkeleton';
import TranslatorListView from '../TranslatorListView';

const TranslatorPage: FC = () => {
  const { isLoading, data } = useLoadTranslators();

  return (
    <PageView title="Translators">
      {isLoading ? (
        <TranslatorListSkeleton />
      ) : (
        <TranslatorListView items={data} />
      )}
    </PageView>
  );
};

export default TranslatorPage;
