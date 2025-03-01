export function formatDate(dateString: string) {
    const dateObject = new Date(dateString);
    const formattedDate = `${(dateObject.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${dateObject
      .getDate()
      .toString()
      .padStart(2, '0')}.${dateObject.getFullYear()} ${dateObject
      .getHours()
      .toString()
      .padStart(2, '0')}:${dateObject
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
    
    return formattedDate;
  }