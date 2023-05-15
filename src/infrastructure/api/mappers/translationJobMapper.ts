import { TranslationJob } from '@/common/domain';
import { TranslationJobDto } from '@/infrastructure/api/dto';

export const mapToTranslationJobDomain = (
  dto: TranslationJobDto
): TranslationJob => ({ ...dto });
