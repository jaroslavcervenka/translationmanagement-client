import { ETranslationJobStatus } from '@/common/domain';

export interface TranslationJob {
  id: number;
  customerName: string;
  status: ETranslationJobStatus;
  originalContent: string;
  translatedContent: string;
  price: number;
}

export interface AddTranslatioJob {
  customerName: string;
  originalContent: string;
}
