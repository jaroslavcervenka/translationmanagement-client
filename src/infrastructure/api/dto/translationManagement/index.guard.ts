/*
 * Generated type guards for "index.ts".
 * WARNING: Do not manually change this file.
 */
import { ETranslatorStatus } from '../../../../common/domain/enums/eTranslatorStatus';
import { TranslatorDto } from './index';

export function isTranslatorDto(obj: unknown): obj is TranslatorDto {
  const typedObj = obj as TranslatorDto;
  return (
    ((typedObj !== null && typeof typedObj === 'object') ||
      typeof typedObj === 'function') &&
    typeof typedObj['id'] === 'number' &&
    typeof typedObj['name'] === 'string' &&
    typeof typedObj['hourlyRate'] === 'string' &&
    (typedObj['status'] === ETranslatorStatus.Applicant ||
      typedObj['status'] === ETranslatorStatus.Certified ||
      typedObj['status'] === ETranslatorStatus.Deleted) &&
    typeof typedObj['creditCardNumber'] === 'string'
  );
}
