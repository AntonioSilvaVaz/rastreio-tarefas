export function prettifyDate(date: string): string {
  let [dayMonthYear, time] = date.split('T');
  let [year, month, day] = dayMonthYear.split('-');
  let [hour, minutes] = time.split(':');
  return `Limite: ${day}-${month}-${year} até ${hour}:${minutes}`;
}

export function getDatetimeLocalNow(): string {
  const dateTime = new Date();
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();
  const hour = dateTime.getHours();
  const minutes = dateTime.getMinutes() + 1;
  return `${year}-${month > 9 ? month : '0' + month}-${day > 9 ? day : '0' + day}T${hour > 9 ? hour : '0' + hour}:${minutes > 9 ? minutes : '0' + minutes}`;
}