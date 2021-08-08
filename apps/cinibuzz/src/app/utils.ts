import { format } from 'date-fns';

export function formatDate(dateStr?: string): string {
  return dateStr ? format(new Date(dateStr), 'MMM dd, yyyy') : '';
}

export function durationInWords(num: number | undefined | null) {
  if (!num) return '';

  const hrs = Math.floor(num / 60);
  const mins = num % 60;
  const words: string[] = [];

  if (hrs > 0) {
    words.push(`${hrs}h`);
  }
  if (mins > 0) {
    words.push(`${mins}m`);
  }

  return words.join(' ');
}

export function formatCurrency(num?: number): string {
  const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  return formatter.format(num ?? 0);
}
