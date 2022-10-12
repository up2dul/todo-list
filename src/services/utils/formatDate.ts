export const formatedDate = (date: Date) => {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'long'
  }).format(new Date(date));
};
