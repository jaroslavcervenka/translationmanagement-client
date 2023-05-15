'use client';

import { useGetTranslatorsQuery } from '@/infrastructure/api/services';

export const useLoadTranslators = () => {
  const { isLoading, isError, error, data } = useGetTranslatorsQuery();

  if (isError) {
    console.error('Translators loading error', error);
  }

  return {
    isLoading,
    data: data != null ? data : [],
  };
};
