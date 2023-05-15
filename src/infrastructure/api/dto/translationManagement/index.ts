import { ETranslatorStatus } from '@/common/domain';

export interface TranslatorDto {
  id: number;
  name: string;
  hourlyRate: string;
  status: ETranslatorStatus;
  creditCardNumber: string;
}
