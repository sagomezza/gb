export const titleDate = (interval) => {
  if (interval === 0) {
    return 'Today';
  }
  if (interval === 1) {
    return 'Tomorrow';
  }
  return `In ${interval} days`;
};
