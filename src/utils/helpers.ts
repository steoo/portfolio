// Output: "September 27, 2024"
export const formattedDate = (dateString: string) => {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

// Output: "09/24/24"
export const formattedDateTime = (dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);

  return Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateTime);
};

export const formattedTime = (timeString: string) => {
  // Combine with a placeholder date without UTC indicator
  const date = new Date(`1970-01-01T${timeString}`);

  return Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Berlin', // This ensures CET/CEST
  }).format(date);
};

export const sortData = <T extends Record<string, unknown>>(
  data: T[],
  field: keyof T
): T[] => {
  return data.sort(
    (a, b) =>
      new Date(b[field] as string).getTime() -
      new Date(a[field] as string).getTime()
  );
};
