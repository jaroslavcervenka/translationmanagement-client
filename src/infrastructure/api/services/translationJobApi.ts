import { AddTranslatioJob, TranslationJob } from '@/common/domain/';
import { fetchApi } from '@/infrastructure/api';
import { TranslationJobDto } from '@/infrastructure/api/dto';
import { isTranslationJobDto } from '@/infrastructure/api/dto/translationJob/index.guard';
import {
  createApiFetchArrayResult,
  createApiFetchResult,
} from '@/infrastructure/api/utils';

import { mapToTranslationJobDomain } from '../mappers';

export const translationJobApi = fetchApi.injectEndpoints({
  endpoints: builder => ({
    createTranslationJob: builder.mutation<TranslationJob, AddTranslatioJob>({
      query(payload) {
        return {
          url: 'jobs',
          method: 'POST',
          body: payload,
        };
      },
      invalidatesTags: [{ type: 'jobs', id: 'LIST' }],
      transformResponse: (rawResult: TranslationJobDto) => {
        const result = createApiFetchResult(
          isTranslationJobDto,
          mapToTranslationJobDomain,
          rawResult
        );

        if (result.isValid && result.response != null) {
          return result.response;
        }

        throw 'Received invalid payload of translation job';
      },
    }),
    getTranslationJobs: builder.query<TranslationJob[], void>({
      query: () => 'jobs',
      providesTags: result =>
        result != null
          ? [{ type: 'jobs', id: 'LIST' }]
          : [{ type: 'jobs', id: 'LIST' }],
      transformResponse: (rawResult: TranslationJobDto[]) => {
        const result = createApiFetchArrayResult(
          isTranslationJobDto,
          mapToTranslationJobDomain,
          rawResult
        );

        return result.isValid && result.response != null ? result.response : [];
      },
    }),
  }),
});

export const { useGetTranslationJobsQuery, useCreateTranslationJobMutation } =
  translationJobApi;
