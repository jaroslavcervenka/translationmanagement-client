import { ETranslationJobStatus, TranslationJob } from '@/common/domain';

export const translationJobMock: TranslationJob = {
  id: 1,
  customerName: 'Customer 1',
  status: ETranslationJobStatus.New,
  originalContent: 'Original content',
  translatedContent: 'Originalni obsah',
  price: 10.5,
};
