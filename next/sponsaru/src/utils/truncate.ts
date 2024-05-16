export const truncateString = (input: string) => {
  const maxLength = 11;
  if (input.length <= maxLength) {
    return input;
  }
  const truncatedString = input.substring(0, 4) + '...' + input.substring(input.length - 4);

  return truncatedString;
};
