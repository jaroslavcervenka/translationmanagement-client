/*
 * Generated type guards for "index.ts".
 * WARNING: Do not manually change this file.
 */
import { ETranslationJobStatus } from '../../../../common/domain/enums/eTranslationJobStatus';
import { TranslationJobDto } from './index';

export function isTranslationJobDto(obj: unknown): obj is TranslationJobDto {
  const typedObj = obj as TranslationJobDto;
  return (
    ((typedObj !== null && typeof typedObj === 'object') ||
      typeof typedObj === 'function') &&
    typeof typedObj['id'] === 'number' &&
    typeof typedObj['customerName'] === 'string' &&
    (typedObj['status'] === ETranslationJobStatus.New ||
      typedObj['status'] === ETranslationJobStatus.InProgress ||
      typedObj['status'] === ETranslationJobStatus.Completed) &&
    typeof typedObj['originalContent'] === 'string' &&
    typeof typedObj['translatedContent'] === 'string' &&
    typeof typedObj['price'] === 'number'
  );
}
