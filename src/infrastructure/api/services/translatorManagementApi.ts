import { ApiFetchResult, Translator } from '@/common/domain/';
import { fetchApi } from '@/infrastructure/api';
import { TranslatorDto } from '@/infrastructure/api/dto';
import { isTranslatorDto } from '@/infrastructure/api/dto/translationManagement/index.guard';
import { createApiFetchArrayResult } from '@/infrastructure/api/utils';

import { mapToTranslatorDomain } from '../mappers';

export const translatorManagementApi = fetchApi.injectEndpoints({
  endpoints: builder => ({
    getTranslators: builder.query<Translator[], void>({
      query: () => 'translators',
      providesTags: result =>
        result != null
          ? [
              ...result.map(({ id }) => ({
                type: 'translators' as const,
                id,
              })),
              { type: 'translators', id: 'LIST' },
            ]
          : [{ type: 'translators', id: 'LIST' }],
      transformResponse: (rawResult: TranslatorDto[]) => {
        const result = createApiFetchArrayResult(
          isTranslatorDto,
          mapToTranslatorDomain,
          rawResult
        );

        return result.isValid && result.response != null ? result.response : [];
      },
    }),
  }),
});

export const { useGetTranslatorsQuery } = translatorManagementApi;
