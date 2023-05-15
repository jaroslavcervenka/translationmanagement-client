import React, { FC } from 'react';

import TranslationJobAdd from '@/application/features/translationJob/components/TranslationJobForm';
import { useLoadTranslationJobs } from '@/application/features/translationJob/hooks/useLoadTranslationJobs';
import PageView from '@/common/components/PageView';

import TranslationJobListSkeleton from '../TranslationJobListSkeleton';
import TranslationJobListView from '../TranslationJobListView';

const TranslationJobPage: FC = () => {
  const { isLoading, data } = useLoadTranslationJobs();

  return (
    <PageView title="Translation jobs">
      {isLoading ? (
        <TranslationJobListSkeleton />
      ) : (
        <TranslationJobListView items={data} />
      )}
      <div className="mt-4">
        <TranslationJobAdd />
      </div>
    </PageView>
  );
};

export default TranslationJobPage;
