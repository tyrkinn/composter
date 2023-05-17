export const __toPx = (number) => {
  if (!Number.isInteger(number)) {
    throw new TypeError('You can only use integer numbers in sizes')
  }
  return String(number) + 'px';
}
