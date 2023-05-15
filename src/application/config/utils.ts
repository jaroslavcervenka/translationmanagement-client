export const getStringValue = (value: string | undefined): string => {
  if (value != null && value !== '') {
    return value;
  }

  throw new TypeError(`Value is null or empty`);
};
