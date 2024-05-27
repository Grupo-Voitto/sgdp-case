export function clampNumber(minValue: number, value: number, maxValue: number) {
  return Math.max(minValue, Math.min(value, maxValue));
}

export function formatDate(date?: string | Date): string {
  if (!date) {
    return 'Data Inválida';
  }

  const newDate = new Date(date);

  if (newDate.toString()?.includes('Invalid')) {
    return 'Data Inválida';
  }

  const day = newDate.getDay().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear();

  return `${day}/${month}/${year}`;
}
