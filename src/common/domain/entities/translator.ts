import { ETranslatorStatus } from '@/common/domain';

export interface Translator {
  id: number;
  name: string;
  hourlyRate: string;
  status: ETranslatorStatus;
  creditCardNumber: string;
}
