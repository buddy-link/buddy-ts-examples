export const truncateString = (input: string) => {
  const maxLength = 14;
  if (input.length <= maxLength) {
    return input;
  }

  if (input.length >= 14 && input.length <= 20) {
    return input.substring(0, 14) + '...';
  }
  const truncatedString = input.substring(0, 4) + '...' + input.substring(input.length - 4);

  return truncatedString;
};
