export const formatDate = (date: number) => {
  const [year, month, day] = new Date(date).toISOString().substring(0, 10).split("-");
  return `${day}.${month}.${year}`;
};
