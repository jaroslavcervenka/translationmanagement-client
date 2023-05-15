import { ETranslationJobStatus } from '@/common/domain';

/** @see {isTranslationJobDto} ts-auto-guard:type-guard */
export interface TranslationJobDto {
  id: number;
  customerName: string;
  status: ETranslationJobStatus;
  originalContent: string;
  translatedContent: string;
  price: number;
}
