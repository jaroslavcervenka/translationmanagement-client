import { ApiFetchResult } from '@/common/domain';

interface MappingResult<Domain> {
  result?: Domain;
  success: boolean;
  error?: string;
}

type ValidatorFnc<DTO> = (data: DTO) => boolean;
type MapperFnc<DTO, Domain> = (data: DTO) => Domain;

/**
 * Validates a payload and maps DTO to domain response.
 * @param validatorFc The payload validator function
 * @param mapperFc The mapper from DTO to domain
 * @param data The response payload
 */
export function createApiFetchResult<DTO, Domain>(
  validatorFc: ValidatorFnc<DTO>,
  mapperFc: MapperFnc<DTO, Domain>,
  data?: DTO
): ApiFetchResult<Domain> {
  if (data == null || !isPayloadValid(validatorFc, data)) {
    return createInvalidPayloadResult();
  }

  const mappingResult = mapToDomain<DTO, Domain>(data, mapperFc);

  return {
    response: mappingResult.result,
    isValid: mappingResult.success,
    error: mappingResult.error,
  };
}

export function createApiFetchArrayResult<DTO, Domain>(
  validatorFc: ValidatorFnc<DTO>,
  mapperFc: MapperFnc<DTO, Domain>,
  data?: DTO[]
): ApiFetchResult<Domain[]> {
  if (data == null) {
    return createInvalidPayloadResult();
  }

  if (data.some(x => !isPayloadValid(validatorFc, x))) {
    return createInvalidPayloadResult();
  }

  const domains: Domain[] = [];
  let failedMappingResult: MappingResult<Domain> | undefined;

  data.forEach(x => {
    if (!isPayloadValid(validatorFc, x)) {
      return;
    }

    const mappingResult = mapToDomain<DTO, Domain>(x, mapperFc);

    if (mappingResult.success && mappingResult.result != null) {
      domains.push(mappingResult.result);
    } else {
      failedMappingResult = mappingResult;
      return;
    }
  });

  if (failedMappingResult !== undefined) {
    return {
      response: undefined,
      isValid: false,
      error: failedMappingResult.error,
    };
  }

  return {
    response: domains,
    isValid: true,
    error: undefined,
  };
}

const isPayloadValid = <DTO>(validatorFc: ValidatorFnc<DTO>, data?: DTO) =>
  data != null && validatePayload(data, validatorFc);

const validatePayload = <DTO>(
  data: DTO,
  validatorFc: ValidatorFnc<DTO>
): boolean => {
  return Array.isArray(data)
    ? data.every(x => validatorFc(x))
    : validatorFc(data);
};

const mapToDomain = <DTO, Domain>(
  data: DTO,
  mapperFc: MapperFnc<DTO, Domain>
): MappingResult<Domain> => {
  try {
    return createMappingResult(mapperFc(data));
  } catch (e) {
    return createFailedMappingResult();
  }
};

const createInvalidPayloadResult = <Domain>(): ApiFetchResult<Domain> => ({
  response: undefined,
  isValid: false,
  error: 'Invalid payload',
});

const createMappingResult = <Domain>(domain: Domain): MappingResult<Domain> => {
  const success = domain != null;

  if (success) {
    return {
      result: domain,
      success: true,
    };
  }

  return {
    result: undefined,
    success: false,
    error: `Mapping error occurred - mapping result is null`,
  };
};

const createFailedMappingResult = () => ({
  result: undefined,
  success: false,
  error: 'Mapping error occurred',
});
