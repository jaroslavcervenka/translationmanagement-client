export interface ApiFetchResult<Domain> {
  response?: Domain;
  isValid: boolean;
  error?: string;
}
