export const dateFormater = (date: Date) => {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'long'
  }).format(new Date(date));
};
