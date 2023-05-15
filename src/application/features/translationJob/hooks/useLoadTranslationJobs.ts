'use client';

import { useGetTranslationJobsQuery } from '@/infrastructure/api/services';

export const useLoadTranslationJobs = () => {
  const { isLoading, isError, error, data } = useGetTranslationJobsQuery();

  if (isError) {
    console.error('Translation jobs loading error', error);
  }

  return {
    isLoading,
    data: data != null ? data : [],
  };
};
